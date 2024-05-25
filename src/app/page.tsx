import Link from "next/link";
import { Festival, HomepageTranslations, itemStatus } from "@/types";
import { fetchWrapper } from "@/helpers/fetch";
import styles from "./page.module.css";
import './reset.css'

const languages_code = "pt-PT";

async function getCopy() {
  const data = await fetchWrapper("/items/homepage_translations");

  return data.find((d: HomepageTranslations) => d.languages_code === languages_code);
}

async function getFestivals() {
  const result = await fetchWrapper('/items/festivals');
  console.log(result)
  return result.filter((item: Festival) => item.status === itemStatus.published);
}

export default async function Home() {
  const copy = await getCopy();
  const festivals: Festival[] = await getFestivals();

  return (
    <main className={styles.main}>
      <h1>{copy.title}</h1>
      <h2>{copy.subtitle}</h2>
      <section>
        {festivals.map((festival: Festival) => (
          <div key={festival.id} className={styles.festivalItem}>
            <h3>{festival.name}</h3>
            <p>{festival.date}</p>
            <Link href={`/festival-details/${festival.id}`}>Detalhes do Festival</Link>
          </div>
        ))}
      </section>
    </main>
  );
}
