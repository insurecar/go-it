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

  const pageNumber = useSelector((state) => state?.usersReducer?.pageNumber);
  const pagesVisited = pageNumber * usersPerPage;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoader(true));

    pageNumber === 0
      ? dispatch(getData(usersPerPage))
      : dispatch(getData((pageNumber + 1) * usersPerPage));
  }, [pageNumber]);

  const displayUsers = users
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item) => <ItemRepo key={item.id} item={item} />);

  const pageCount = Math.ceil(20 / usersPerPage);

  const handleChange = ({ selected }) => {
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
      {/* {Boolean(displayUsers?.length) && ( */}
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        previousLinkClassName={styles.previousBtn}
        containerClassName={styles.paginate}
        activeClassName={styles.activePaginate}
        onPageChange={handleChange}
        disabledLinkClassName={styles.disabledBtn}
        disabledClassName={styles.dis}
        pageCount={7}
        initialPage={pageNumber}
      />
      //
      <div>
        <a target="_blank" href="https://github.com/insurecar/go-it">
          Github
        </a>
      </div>
    </div>
  );
};
