"use client";
import { getTimestamp } from "@/utils/dateUtils";
import { ReactNode } from "react";

// Get the API URL
const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT
  ? `${process.env.NEXT_PUBLIC_API_ENDPOINT}/tracking/button-click`
  : "https://api.coreycollinsm.com/tracking/button-click";

const timestamp = getTimestamp();

export type ButtonClickSetup = {
  page: string;
  buttonId: string;
};

export type ButtonClickPayload = {
  page: string;
  buttonId: string;
  visitId: string;
  timestamp: string;
};

export const ButtonClickTracker = ({
  children,
  className,
  page,
  buttonId,
}: {
  children: ReactNode;
  className?: string;
  page: string;
  buttonId: string;
}) => {
  const handleClick = () => {
    if (process.env.NODE_ENV == "development") {
      console.log("🟣 Button tracking has been disabled in development");
      return;
    }

    const visitId = window.sessionStorage.getItem("visit-id");
    console.log(visitId);
    if (!visitId || visitId.length < 1) return;

    // Format API payload
    const payload = {
      page: page,
      buttonId,
      visitId,
      timestamp,
    };

    void fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Button click tracking request failed");
        }
      })
      .catch(() => {
        // Intentionally silent; user should not be alerted.
      });
  };

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};
