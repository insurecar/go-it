import { useDispatch } from "react-redux";
import styles from "./Search.module.css";
export const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.search}>
      <input placeholder="Search" />
    </div>
  );
};
