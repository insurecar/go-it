import React, { useEffect, useState } from "react";
import { ListRepo, Search } from "../../components";
import styles from "./App.module.css";

export const App = () => {
  return (
    <div className={styles.box}>
      <Search />
      <ListRepo />
    </div>
  );
};
