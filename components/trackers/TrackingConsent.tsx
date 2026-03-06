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
      try {
        const consent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
        if (consent === "declined") return;

        let trackingId = window.localStorage.getItem(TRACKING_STORAGE_KEY);

        // Create tracking ID if it doesn't exist
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

          if (trackingId) {
            window.localStorage.setItem(TRACKING_STORAGE_KEY, trackingId);
          } else return;
        }

        let sessionId = window.sessionStorage.getItem(SESSION_STORAGE_KEY);

        // Create session ID if it doesn't exist
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

          if (sessionId) {
            window.sessionStorage.setItem(SESSION_STORAGE_KEY, sessionId);
          }
        }

        const newlyStoredTrackingId =
          window.localStorage.getItem(TRACKING_STORAGE_KEY);
        const newlyStoredSessionId =
          window.sessionStorage.getItem(SESSION_STORAGE_KEY);

        if (newlyStoredSessionId && newlyStoredTrackingId) {
          window.localStorage.setItem(DATA_PERMISSION_STORAGE_KEY, "true");
        }
      } catch (err) {
        console.error("Tracking error:", err);
      }
    };

    trackVisit();
  }, []);

  return null;
};
