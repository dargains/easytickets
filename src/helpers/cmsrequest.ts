const cache = process.env.NODE_ENV === 'development' ? 'no-store' : 'default'
const cmsUrl = "https://easytickets-cms.up.railway.app";

export async function fetchWrapper(url: string) {
  const res = await fetch(process.env.CMS_ENDPOINT + url, { cache });
  const { data } = await res.json();

  return data;
}

export async function postWrapper(url: string, params: any) {
  const res = await fetch((process.env.CMS_ENDPOINT || cmsUrl) + url, {
    ...params,
    cache
  })

  return await res.json();
}