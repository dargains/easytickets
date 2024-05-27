import { cache, cmsUrl } from "./functions";

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
