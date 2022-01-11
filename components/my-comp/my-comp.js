import styles from "../../styles/home.module.css";

const MyComp = ({ customText, href }) => {
  return (
    <a href={href} className={styles.link}>
      {customText} link
    </a>
  );
};

export default MyComp;
