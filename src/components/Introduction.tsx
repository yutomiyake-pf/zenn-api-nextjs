import { ZENN_USER_TYPE } from "@/types/zennTypes";
import Image from "next/image";
import { FC, memo } from "react";

import styles from "@/styles/components/introduction.module.scss";

interface Props {
  zennUser: ZENN_USER_TYPE;
}

const IntroductionSection: FC<Props> = ({ zennUser }) => {
  return (
    <section className={styles.introduction}>
      <div className={styles.introduction__content}>
        <div className={styles.introduction__mainContent}>
          <Image
            className={styles.introduction__icon}
            src={zennUser.iconUrl}
            height={100}
            width={100}
            loading="lazy"
            alt={zennUser.name}
          />
          <div className={styles.introduction__nameWrap}>
            <h2 className={styles.introduction__name}>{zennUser.name}</h2>
            <div className={styles.introduction__likedCountWrap}>
              <span className={styles.introduction__likedCount}>
                {zennUser.totalLikedCount}&nbsp;
              </span>
              Likes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(IntroductionSection);
