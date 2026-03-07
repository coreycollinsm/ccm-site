"use client";
import { useEffect, useState } from "react";
import { acceptConsent, declineConsent } from "../trackers/TrackingConsent";
import Link from "next/link";
import { CardDividerOnly } from "../ui";
import { usePathname } from "next/navigation";

export const DataBanner = () => {
  // Default = hidden
  const [showBanner, setShowBanner] = useState(false);

  const pathname = usePathname();
  const isDataPolicyPage = pathname === "/data-policy";

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
    acceptConsent();
  };

  const handleOptOut = () => {
    setShowBanner(false);
    window.localStorage.setItem("hideBanner", "true");
    declineConsent();
  };

  const buttonBaseStyles =
    "py-3 px-4 sm:py-2 sm:px-3 text-md md:text-sm whitespace-nowrap border-2 border-(--black) rounded-full cursor-pointer text-center flex justify-center items-center";

  if (showBanner || isDataPolicyPage)
    return (
      <div className="fixed bottom-5 px-5 left-[50%] -translate-x-[50%] w-full flex justify-center">
        <div className="card bg-(--almost-white) padding-grow round flex flex-col md:flex-row items-center gap-2 md:gap-4 max-w-240">
          <p className="text-xs">
            This site collects anonymous details about visitors for the purpose
            of showcasing my full-stack capabilities. You can opt-out at any
            time, but all data is private and never shared, only used as an
            example to prospective partners. If you have any questions or
            concerns, please visit my{" "}
            <Link className="text-blue-400 font-semibold" href="/data-policy">
              Data Policy Page
            </Link>
            .
          </p>
          <CardDividerOnly className="md:h-full w-full md:w-0.5" />
          <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4">
            <div className={`${buttonBaseStyles}`} onClick={handleOptOut}>
              Opt-Out
            </div>
            <div
              className={`${buttonBaseStyles} bg-(--black) text-white sm:text-sm`}
              onClick={handleAccept}
            >
              Accept and Dismiss
            </div>
          </div>
        </div>
      </div>
    );
};
