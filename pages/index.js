import styles from "../styles/Home.module.css";
import List from "../components/list/list";
import Title from "../components/title/title";
import CustomButton from "../components/button/button";
import Counter from "../components/counter/counter";
import { useState } from "react";

export default function Home() {
  const [direction, setDirection] = useState("down");

  const handleOnClick = (updatedDirection) => {
    setDirection(updatedDirection);
  };
  return (
    <div className={styles.container}>
      <Title customColor="red">Awesome example</Title>
      <p>{direction}</p>
      <List />
      <CustomButton
        onClick={() => {
          handleOnClick("then up");
        }}
      >
        Click me
      </CustomButton>
      <Counter />
    </div>
  );
}
