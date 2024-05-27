export const isDevelopment = process.env.NODE_ENV === "development";
export const cache = isDevelopment ? "no-store" : "default";
export const cmsUrl = "https://easytickets-cms.up.railway.app";
export const apiUrl =
  process.env.URL || process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

export async function fetchWrapper(url: string) {
  const res = await fetch(cmsUrl + url, { cache });
  const { data } = await res.json();
  return data;
}

export async function postWrapper(url: string, params: any) {
  const res = await fetch(cmsUrl + url, {
    ...params,
    cache,
  });

  return await res.json();
}
