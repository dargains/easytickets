export const checkEnvironment = () => {
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.CMS_ENDPOINT;

  return base_url;
};