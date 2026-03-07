"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";

type ConsentValue = "true" | "false" | null;

interface TrackingConsentContextValue {
  canTrack: boolean;
  consentValue: ConsentValue;
  setConsentValue: (value: "true" | "false") => void;
}

const TrackingConsentContext =
  createContext<TrackingConsentContextValue | null>(null);

const CONSENT_STORAGE_KEY = "canCollectData";

export const TrackingConsentProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [consentValue, setConsentState] = useState<ConsentValue>(() => {
    if (typeof window === "undefined") return null;

    const storedValue = window.localStorage.getItem(CONSENT_STORAGE_KEY);

    if (storedValue === "true" || storedValue === "false") {
      return storedValue;
    }

    return "false";
  });

  const setConsentValue = (value: "true" | "false") => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
    setConsentState(value);
  };

  const value = useMemo(
    () => ({
      consentValue,
      canTrack: consentValue === "true",
      setConsentValue,
    }),
    [consentValue],
  );

  return (
    <TrackingConsentContext.Provider value={value}>
      {children}
    </TrackingConsentContext.Provider>
  );
};

export const useTrackingConsent = () => {
  const context = useContext(TrackingConsentContext);

  if (!context) {
    throw new Error(
      "useTrackingConsent must be used within TrackingConsentProvider",
    );
  }

  return context;
};
