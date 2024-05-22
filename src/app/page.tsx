import { Festival } from "./festival-details/page";
import styles from "./page.module.css";
import Link from "next/link";

const languages_code = "pt-PT";

async function getCopy() {
  const res = await fetch(
    "https://directus-production-1635.up.railway.app/items/homepage_translations"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data } = await res.json();
  return data.find((d) => d.languages_code === languages_code);
}

async function getFestivals() {
  const res = await fetch(
    "https://directus-production-1635.up.railway.app/items/festivals"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const copy = await getCopy();
  const { data: festivals } = await getFestivals();
  console.log(festivals);

  return (
    <main className={styles.main}>
      <h1>{copy.title}</h1>
      <h2>{copy.subtitle}</h2>
      <section>
        {festivals.map((festival: Festival) => (
          <div key={festival.id} className={styles.festivalItem}>
            <h3>{festival.name}</h3>
            <p>{festival.date}</p>
            <p>{festival.location}</p>
            <Link href="/festival-details">Detalhes do Festival</Link>
          </div>
        ))}
      </section>
    </main>
  );
}
