import React from "react";
import styles from "./ItemRepo.module.css";

import StarIcon from "../../assets/images/StarIcon.svg";
import WatchersIcon from "../../assets/images/WatcherIcon.svg";

export const ItemRepo = ({ item }) => {
  return (
    <div className={styles.items}>
      <div className={styles.avatar}>
        <img src={item.owner.avatar_url} alt="" />
      </div>
      <div className={styles.repo}>
        <div className={styles.repoName}>{item.name}</div>
        <div className={styles.auther}>{item.owner.login}</div>
        <div className={styles.language}>{item.language}</div>
        <div className={styles.description}>{item.description}</div>
      </div>
      <div className={styles.followers}>
        <div className={styles.rating}>
          <img src={StarIcon} alt="star" />{" "}
          <span className={styles.countStars}>{item.stargazers_count} </span>
          &nbsp;
          <span className={styles.star}> stars</span>
        </div>
        <div className={styles.watchers}>
          <img src={WatchersIcon} alt="icon" />
          <span className={styles.countWatchers}>{item.watchers} watchers</span>
        </div>
      </div>
    </div>
  );
};
