import { ZENN_POST_TYPE } from "@/types/zennTypes";
import { FC, memo } from "react";

import styles from "@/styles/components/articles.module.scss";
import Link from "next/link";

interface Props {
  zennPosts: ZENN_POST_TYPE[];
}

const Articles: FC<Props> = ({ zennPosts }) => {
  return (
    <div className={styles.articles}>
      <div className={styles.articles__content}>
        <div className={styles.articles__articleWrap}>
          {zennPosts.map((post) => (
            <article className={styles.articles__article} key={post.id}>
              <Link
                className={styles.articles__articleLinkWrap}
                href={post.url}
                target="_blank"
              >
                <div className={styles.articles__emojiWrap}>
                  <span>{post.emoji}</span>
                  <div className={styles.articles__articleType}>
                    {post.articleType}
                  </div>
                </div>
                <div className={styles.articles__titleWrap}>
                  <h3 className={styles.articles__title}>{post.title}</h3>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Articles);
