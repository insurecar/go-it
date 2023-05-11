import { useTransition, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getInputText,
  getFilteredData,
} from "../../redux/actions/users.actions";

import styles from "./Search.module.css";
export const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSearch = ({ target: { value } }) => {
    setValue(value);
    dispatch(getInputText(value));
  };

  useEffect(() => {
    const search = setTimeout(
      () => value.trim() && dispatch(getFilteredData(value)),
      300
    );

    return () => clearTimeout(search);
  }, [value]);

  return (
    <div className={styles.search}>
      <input placeholder="Search" onChange={handleSearch} />
    </div>
  );
};
