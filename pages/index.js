import styles from "../styles/Home.module.css";
import List from "../components/list/list";
import Title from "../components/title/title";
import CustomButton from "../components/button/button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Title customColor="red">Awesome example</Title>
      <List />
      <CustomButton>Click me</CustomButton>
    </div>
  );
}
