import { useParams } from "react-router-dom";
import HotNews from "../components/HotNews/HotNews";
import PriorityNewsList from "../components/PriorityNews/PriorityNewsList";
import RecentNewsList from "../components/RecentNews/RecentNewsList";
import styles from "./Section.module.css";

const Section = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className={styles["main-sidebar"]}>
      <main className={`${styles.main} ${styles.col}`}>
        <div className={styles["hot-news"]}>
          <HotNews section={params.section_name}></HotNews>
        </div>
        <div className={styles["recent-container"]}>
          <div className={styles["heading-container"]}>
            <div className={styles.heading}>Recent News</div>
          </div>
          <div className={styles["list-container"]}>
            <RecentNewsList section={params.section_name}></RecentNewsList>

            {/* <div className={styles.recent}>Recent2</div>
            <div className={styles.recent}>Recent3</div> */}
          </div>
        </div>
      </main>
      <aside className={`${styles.sidebar} ${styles.col}`}>
        <div className={styles["heading-container"]}>
          <div className={styles.blink}>
            <i className="fas fa-circle"></i>
          </div>
          Top News
        </div>
        <div className={styles["priority-container"]}>
          <PriorityNewsList section={params.section_name}></PriorityNewsList>
        </div>
      </aside>
    </div>
  );
};

export default Section;
