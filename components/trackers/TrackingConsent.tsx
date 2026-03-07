"use client";
import { getTimestamp } from "@/utils/dateUtils";
import { useEffect } from "react";

// API URL Setup
const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT
  ? `${process.env.NEXT_PUBLIC_API_ENDPOINT}`
  : "https://api.coreycollinsm.com";

// Storage keys
const TRACKING_STORAGE_KEY = "trackingId";
const SESSION_STORAGE_KEY = "sessionId";
const CONSENT_STORAGE_KEY = "consent";
const DATA_PERMISSION_STORAGE_KEY = "canCollectData";

export const TrackingConsent = () => {
  useEffect(() => {
    const trackVisit = async () => {
      // Prevent execution during Chrome prerender / speculative loads
      // Chrome was prerendering when pasting the link + doesn't save to storage API
      // This prevents that
      if (document.visibilityState !== "visible") {
        return;
      }

      // Pull saved consent status and stop if "declined"
      try {
        const trackingId = await getNewTrackingId();

        if (trackingId) {
          await getNewSessionId(trackingId);
        }

        // Double-verifying both trackingId and sessionId are stored
        const newlyStoredTrackingId =
          window.localStorage.getItem(TRACKING_STORAGE_KEY);
        const newlyStoredSessionId =
          window.sessionStorage.getItem(SESSION_STORAGE_KEY);

        // ✅ All good, setting canCollectData to "true"
        if (newlyStoredSessionId && newlyStoredTrackingId) {
          window.localStorage.setItem(DATA_PERMISSION_STORAGE_KEY, "true");
        }
      } catch (err) {
        console.error("Tracking error:", err);
      }
    };

    // The latter part of the Chrome prerender issue
    const runWhenVisible = () => {
      if (document.visibilityState === "visible") {
        trackVisit();
      }
    };

    // Run immediately if already visible
    runWhenVisible();

    // Otherwise wait until the page becomes visible & unmount event listener afterwards
    document.addEventListener("visibilitychange", runWhenVisible);
    return () => {
      document.removeEventListener("visibilitychange", runWhenVisible);
    };
  }, []);

  return null;
};

const getNewTrackingId = async () => {
  const consent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (consent === "declined") return;

  // ✅ consent is implied or directly stored - can collect data

  // Checking for trackingId or getting a new one
  let trackingId = window.localStorage.getItem(TRACKING_STORAGE_KEY);
  if (!trackingId) {
    const timestamp = getTimestamp();

    const response = await fetch(`${API_URL}/tracking/site-visitors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        consent: consent == "accepted" ? "accepted" : "implied",
        consentTimestamp: timestamp,
      }),
    });

    if (!response.ok) throw new Error("Failed to create visit");

    const serverTrackingData = await response.json();
    trackingId = serverTrackingData?.data?.trackingId;

    // Save trackingId in LocalStorage for multiple visits (represents the user)
    if (trackingId) {
      window.localStorage.setItem(TRACKING_STORAGE_KEY, trackingId);
      return trackingId;
    } else return;
  }
};

const getNewSessionId = async (trackingId: string) => {
  // Checking for sessionId or getting a new one
  let sessionId = window.sessionStorage.getItem(SESSION_STORAGE_KEY);

  if (!sessionId) {
    const response = await fetch(`${API_URL}/tracking/site-sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        trackingId,
      }),
    });

    if (!response.ok) throw new Error("Failed to create session");

    const serverSessionData = await response.json();
    sessionId = serverSessionData?.data?.sessionId;

    // Save trackingId in SessionStorage to only represent this user's session
    if (sessionId) {
      window.sessionStorage.setItem(SESSION_STORAGE_KEY, sessionId);
      return sessionId;
    }
  }
};

export const acceptConsent = async () => {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, "accepted");
  window.localStorage.setItem(DATA_PERMISSION_STORAGE_KEY, "true");

  // TODO trackingId doesn't exist after opt-out
  let trackingId = window.localStorage.getItem(TRACKING_STORAGE_KEY);
  const timestamp = getTimestamp();

  if (!trackingId) {
    const newTrackingId = await getNewTrackingId();
    if (newTrackingId) trackingId = newTrackingId;
  }

  if (trackingId) getNewSessionId(trackingId);

  try {
    await fetch(`${API_URL}/tracking/opt-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        trackingId,
        timestamp,
      }),
    });
  } catch (err) {
    console.error("Error opting-in trackingId:", err);
  }
};

export const declineConsent = async () => {
  const trackingId = window.localStorage.getItem(TRACKING_STORAGE_KEY);

  try {
    await fetch(`${API_URL}/tracking/opt-out`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        trackingId,
      }),
    });
  } catch (err) {
    console.error("Error removing trackingId:", err);
  }

  window.localStorage.setItem(CONSENT_STORAGE_KEY, "declined");
  window.localStorage.setItem(DATA_PERMISSION_STORAGE_KEY, "false");
  window.localStorage.removeItem(TRACKING_STORAGE_KEY);
  window.sessionStorage.removeItem(SESSION_STORAGE_KEY);
};
