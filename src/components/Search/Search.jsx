import { useDispatch } from "react-redux";
import styles from "./Search.module.css";
import {
  getSearchText,
  setPageNumber,
} from "../../redux/actions/users.actions";

export const Search = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target: { value: text } }) => {
    dispatch(setPageNumber(0));
    dispatch(getSearchText(text));
  };

  return (
    <div className={styles.search}>
      <input placeholder="Search" onChange={handleChange} />
    </div>
  );
};
