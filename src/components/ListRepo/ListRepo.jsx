import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { RotatingLines } from "react-loader-spinner";

import { ItemRepo } from "../index";
import styles from "./ListRepo.module.css";

import { getData, setLoader } from "../../redux/actions/users.actions";

export const ListRepo = () => {
  const users = useSelector((state) => state?.usersReducer?.users?.items);
  const filteredUsers = useSelector(
    (state) => state?.usersReducer?.filteredUsers
  );
  const loader = useSelector((state) => state?.usersReducer?.loading);
  const text = useSelector((state) => state?.usersReducer?.inputText);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoader(true));
    dispatch(getData());
  }, []);
  // console.log(text);
  // console.log("USERS", users);
  // console.log("FILTERED", filteredUsers);

  const allUsers = text.trim() ? filteredUsers : users;

  return (
    <div className={styles.list}>
      <div className={styles.loader}>
        <RotatingLines
          strokeColor="lightblue"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={loader}
        />
      </div>
      {allUsers?.map((item) => (
        <ItemRepo key={item.id} item={item} />
      ))}
      {text.trim() && !filteredUsers.length && (
        <div className={styles.empty}>Nothing was found for your request</div>
      )}
    </div>
  );
};
