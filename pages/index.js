import styles from "../styles/Home.module.css";
import List from "../components/list/list";
import Title from "../components/title/title";
import CustomButton from "../components/button/button";
import { useState } from "react";

export default function Home() {
  const [direction, setUpdatedDirection] = useState("down");

  const handleOnClick = (directionWanted) => {
    setUpdatedDirection(directionWanted);
  };
  return (
    <div className={styles.container}>
      <Title customColor="red">Awesome example</Title>
      <p>{direction}</p>
      <List />
      <CustomButton
        onClick={() => {
          handleOnClick("up");
        }}
      >
        Click me
      </CustomButton>
    </div>
  );
}
