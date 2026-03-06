"use client";
import { useEffect, useState } from "react";
import { acceptConcent, declineConsent } from "../trackers/TrackingConsent";

export const DataBanner = () => {
  // Default = hidden
  const [showBanner, setShowBanner] = useState(false);

  // LocalStorage hideBanner determines visibility
  useEffect(() => {
    const checkBannerStatus = async () => {
      const isBannerHidden = window.localStorage.getItem("hideBanner");
      if (isBannerHidden != "true") setShowBanner(true);
    };

    checkBannerStatus();
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    window.localStorage.setItem("hideBanner", "true");
    acceptConcent();
  };

  const handleOptOut = () => {
    setShowBanner(false);
    window.localStorage.setItem("hideBanner", "true");
    declineConsent();
  };

  const buttonBaseStyles =
    "py-1 px-3 whitespace-nowrap border-2 border(--black) rounded-full cursor-pointer";

  if (showBanner)
    return (
      <div className="fixed bottom-5 px-5 left-[50%] -translate-x-[50%] w-full flex justify-center">
        <div className="card padding-small round text-xs flex items-center gap-4">
          <p>
            This site collects anonymous details about visitors for the purpose
            of showcasing my full-stack capabilities. You can opt-out at any
            time, but all data is private and never shared, only used as an
            example to prospective partners.
          </p>
          <div className={`${buttonBaseStyles}`} onClick={handleOptOut}>
            Opt-Out
          </div>
          <div
            className={`${buttonBaseStyles} bg-(--black) text-white text-sm`}
            onClick={handleAccept}
          >
            Accept and Dismiss
          </div>
        </div>
      </div>
    );
};
