"use client";
import { useEffect } from "react";
import { getTimestamp } from "@/utils/dateUtils";

// Get the API URL from env or hard-code CCM
const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT
  ? `${process.env.NEXT_PUBLIC_API_ENDPOINT}/tracking/website-visit`
  : "https://api.coreycollinsm.com/tracking/website-visit";

// Set sessionStorage keys
const sessionSentKey = "website-visit-sent";
const visitIdKey = "visit-id";
let hasAttemptedThisPageLoad = false;

// Generate a timestamp
const timestamp = getTimestamp();

// Remove bloated URL params
const removeTrackingParamsFromUrl = () => {
  const url = new URL(window.location.href);
  const trackingKeys = [
    "search",
    "source",
    "placement",
    "utm_source",
    "utm_medium",
  ];
  const keysToRemove = Array.from(url.searchParams.keys()).filter((key) =>
    trackingKeys.includes(key.toLowerCase()),
  );

  if (keysToRemove.length === 0) {
    return;
  }

  keysToRemove.forEach((key) => {
    url.searchParams.delete(key);
  });

  const nextUrl = `${url.pathname}${url.search}${url.hash}`;
  window.history.replaceState(window.history.state, "", nextUrl);
};

export const WebsiteVisitTracker = () => {
  // No dependencies, run on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const TRACKED_SOURCE =
      params.get("source")?.trim() || params.get("search")?.trim() || "direct";
    const PLACEMENT = params.get("placement")?.trim() || "direct";

    try {
      // Prevent duplicates by searching for previous send
      if (
        window.sessionStorage.getItem(sessionSentKey) === "sent" ||
        hasAttemptedThisPageLoad
      ) {
        return; // ❌ cancel if already attempted
      }
    } catch {
      if (hasAttemptedThisPageLoad) {
        return; // ❌ cancel if already attempted
      }
    }

    // prevent future duplicate calls on this session
    hasAttemptedThisPageLoad = true;

    // prevent this method if in development environment
    // TODO unblock this after development
    // if (process.env.NODE_ENV == "development") {
    //   console.log("🟣 Visitor log disabled in development");
    //   return;
    // }

    // Set the payload for the API call
    const payload = {
      source: TRACKED_SOURCE,
      placement: PLACEMENT,
      timestamp,
    };

    // Fetch the API which will return data.id with the session ID
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Visit tracking request failed");
        }

        const res = await response.json();

        try {
          if (res?.data?.id) {
            window.sessionStorage.setItem(visitIdKey, res.data.id); // Store the session ID in sessionStorage on the client
          }
        } catch {
          // Ignore storage errors.
        }
      })
      .catch(() => {
        // Intentionally silent; user should not be alerted.
      })
      .finally(() => {
        try {
          window.sessionStorage.setItem(sessionSentKey, "sent"); // Store a website-visit-sent key on sessionStorage to prevent duplicate calls
        } catch {
          // Ignore storage errors.
        }

        removeTrackingParamsFromUrl();
      });
  }, []);

  return null;
};
