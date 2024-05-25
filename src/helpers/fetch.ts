const cache = process.env.NODE_ENV === 'development' ? 'no-store' : 'default'

export async function fetchWrapper(url: string) {
  const res = await fetch(process.env.CMS_ENDPOINT + url, { cache });
  const { data } = await res.json();

  return data;
}