export interface CreatePageViewPayload {
  sessionId: string;
  currentPage: string;
  prevPage: string;
  timestamp: string;
}

const DEFAULT_BASE_API_URL = "https://api.coreycollinsm.com";
const API_PATH = "/tracking/page-views";

const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT
  ? `${process.env.NEXT_PUBLIC_API_ENDPOINT}${API_PATH}`
  : `${DEFAULT_BASE_API_URL}${API_PATH}`;

export const postPageView = async (
  payload: CreatePageViewPayload,
): Promise<void> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Failed to record page view: ${response.status}`);
  }
};
