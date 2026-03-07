"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useTrackingConsent } from "@/context/TrackingConsentContext";
import { postPageView } from "@/lib/";

const SESSION_STORAGE_KEY = "sessionId";

export const PageViewTracker = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { canTrack } = useTrackingConsent();

  const previousUrlRef = useRef<string | null>(null);
  const hasMountedRef = useRef(false);

  const currentUrl = searchParams?.toString()
    ? `${pathname}?${searchParams.toString()}`
    : pathname;

  useEffect(() => {
    if (!canTrack) return;
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
    }

    const sessionId = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!sessionId) {
      previousUrlRef.current = currentUrl;
      return;
    }

    const prevPage = previousUrlRef.current ?? "direct";
    previousUrlRef.current = currentUrl;

    void postPageView({
      sessionId,
      currentPage: currentUrl,
      prevPage,
      timestamp: new Date().toISOString(),
    }).catch((error) => {
      console.error("Failed to send page view", error);
    });
  }, [canTrack, currentUrl, pathname]);

  return null;
};
