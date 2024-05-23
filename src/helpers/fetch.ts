export async function fetchWrapper(url: string) {
  const res = await fetch(process.env.CMS_ENDPOINT + url);
  const { data } = await res.json();

  return data;
}