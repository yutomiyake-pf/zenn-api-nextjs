import { ZENN_POST_TYPE } from "@/types/zennTypes";
import { FC, memo } from "react";

import styles from "@/styles/components/articles.module.scss";

interface Props {
  zennPosts: ZENN_POST_TYPE[];
}

const Articles: FC<Props> = ({ zennPosts }) => {
  return (
    <div className={styles.articles}>
      <div className={styles.articles__content}>
        <article>hoge</article>
      </div>
    </div>
  );
};

export default memo(Articles);
