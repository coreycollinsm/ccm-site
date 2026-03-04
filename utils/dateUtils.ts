export const getTimestamp = () => {
  return new Date().toISOString().replace(/\.\d{3}Z$/, "Z");
};
