import React from "react";
import Link from "next/link";
import { Festival } from "@/types";
import styles from "./FestivalItem.module.css";

const FestivalItem = ({ id, name, date }: Festival) => {
  return (
    <article className={styles.festivalItem}>
      <h3>{name}</h3>
      <p>{date}</p>
      <Link href={`/festival-details/${id}`}>Detalhes do Festival</Link>
      <button>Eu bou, crl!</button>
    </article>
  );
};

export default FestivalItem;
