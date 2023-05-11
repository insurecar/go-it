import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
import ReactPaginate from "react-paginate";

import { ItemRepo } from "../index";
import styles from "./ListRepo.module.css";

import {
  getData,
  setLoader,
  setPageNumber,
} from "../../redux/actions/users.actions";

export const ListRepo = () => {
  const usersPerPage = 3;

  const users = useSelector((state) => state?.usersReducer?.users?.items);
  const loader = useSelector((state) => state?.usersReducer?.loading);

  const filteredUsers = useSelector(
    (state) => state?.usersReducer?.filteredUsers
  );
  const pageNumber = useSelector((state) => state?.usersReducer?.pageNumber);
  const pagesVisited = pageNumber * usersPerPage;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoader(true));
    dispatch(getData());
  }, []);

  const displayUsers = users
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item) => <ItemRepo key={item.id} item={item} />);

  const pageCount = Math.ceil(users?.length / usersPerPage);

  const handleChange = ({ selected }) => {
    console.log(selected);
    dispatch(setPageNumber(selected));
  };

  return (
    <div className={styles.list}>
      {
        <div className={styles.loader}>
          <RotatingLines
            strokeColor="lightblue"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={loader}
          />
        </div>
      }
      {displayUsers}
      {Boolean(displayUsers?.length) && (
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          previousLinkClassName={styles.previousBtn}
          containerClassName={styles.paginate}
          activeClassName={styles.activePaginate}
          onPageChange={handleChange}
          pageCount={7}
          disabledLinkClassName={styles.disabledBtn}
          disabledClassName={styles.dis}
        />
      )}

      <div>
        <a target="_blank" href="https://github.com/insurecar/go-it">
          Github
        </a>
      </div>
    </div>
  );
};
