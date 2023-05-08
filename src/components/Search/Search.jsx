import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Search.module.css";
import { getSearchText } from "../../redux/actions/users.actions";

export const Search = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  const handleChange = ({ target: { value: text } }) => {
    setInputText(text);
  };

  useEffect(() => {
    dispatch(getSearchText(inputText));
  }, [inputText]);

  return (
    <div className={styles.search}>
      <input placeholder="Search" onChange={handleChange} value={inputText} />
    </div>
  );
};
