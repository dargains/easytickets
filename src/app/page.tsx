import { getFestivals } from "../libs/Festival";
import { Festival } from "@/types";
import FestivalItem from "@/components/FestivalItem/FestivalItem";
import styles from "./page.module.css";
import { getCopy } from "@/libs/Copy";

export default async function Home() {
  const copy = await getCopy('homepage_translations');
  const festivals: Festival[] = await getFestivals();

  return (
    <main className={styles.main}>
      <h1>{copy.title}</h1>
      <h2>{copy.subtitle}</h2>
      <section>
        {festivals.map((festival: Festival) => (
          <FestivalItem key={festival.id} {...festival} />
        ))}
      </section>
    </main>
  );
}
