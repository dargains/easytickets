export const isDevelopment = process.env.NODE_ENV === "development";
export const cache = isDevelopment ? "no-cache" : "default";
export const cmsUrl = "https://easytickets-cms.up.railway.app";
export const apiUrl =
  process.env.URL || process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
export const checkEnvironment = () => {
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.CMS_ENDPOINT;

  return base_url;
};
