"use client";
import { useRouter } from "next/navigation";
import { SubmitEvent, useState } from "react";
import { SubmitButton } from "@/components/ui";

export const ContactForm = ({ className }: { className?: string }) => {
  // Form Fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  // Form Submission
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [disableForm, setDisableForm] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const submission = {
      firstName,
      lastName,
      email,
      company,
      message,
      origin: "ccm",
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_ENDPOINT
          ? `${process.env.NEXT_PUBLIC_API_ENDPOINT}/contact`
          : "https://api.coreycollinsm.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submission),
        },
      );

      let result = null;
      try {
        result = await response.json();
      } catch {
        // If the response body isn't JSON, leave result as null
      }

      // Handle non-2xx responses explicitly
      if (!response.ok) {
        // 403 with spam/blacklist flag
        const isSpamOrBlacklisted =
          response.status === 403 &&
          (result?.data?.spam ||
            result?.message === "Rejected: Suspected Spam");

        if (isSpamOrBlacklisted) {
          setErrorMessage(
            "Your message was rejected because it appears to be spam or from a blocked address. If you believe this is an error, please email us directly.",
          );
        } else {
          setErrorMessage(
            result?.message ||
              "There was an error submitting the form. Please try again later.",
          );
        }

        return;
      }

      // Successful HTTP response, check app-level success
      if (result?.success) {
        setErrorMessage(""); // Clear any existing error
        router.push("/contact/success");
        return;
      } else {
        setErrorMessage(
          result?.message ||
            "There was an error submitting the form. Please try again later.",
        );
        return;
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setErrorMessage(
        "There was an error submitting the form. Please try again later or reach out via social media channels.",
      );
      setDisableForm(true);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  };

  return (
    <div
      className={`${className} bg-(--black) text-white card round padding flex justify-center`}
    >
      <form
        className="p-10 flex flex-col items-center gap-5 max-w-125 min-w-100"
        onSubmit={handleSubmit}
      >
        <h1>Contact</h1>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap md:flex-nowrap gap-3 items-center">
            <input
              className="w-full"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
            <input
              className="w-full"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />
          </div>
          <input
            className="w-full"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <div className="flex flex-wrap md:flex-nowrap gap-2 items-center">
            <input
              className="w-full"
              type="text"
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company"
              required
            />
          </div>
          <textarea
            placeholder="Message"
            className="form-control w-full"
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            required
          />
        </div>
        {!disableForm && (
          <SubmitButton
            buttonId={"ccm-contact-submit"}
            darkMode
            disabled={isLoading}
            page={"contact"}
            style="primary"
            text={`${isLoading ? "Sending..." : "Send Message"}`}
          />
        )}
        {errorMessage && <p className="text-error text-sm">{errorMessage}</p>}
      </form>
    </div>
  );
};
