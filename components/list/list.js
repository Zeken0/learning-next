import styles from "../../styles/Home.module.css";

import RenamedMyComp from "../my-comp/my-comp";
import { navArr } from "../../data/navlist";

export default function List() {
  return (
    <ul className={styles.navList}>
      {navArr.map(({ label, url }) => (
        <li key={label}>
          <RenamedMyComp customText={label} href={url} />
        </li>
      ))}
    </ul>
  );
}
