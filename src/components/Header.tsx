import Image from "next/image";
import Link from "next/link";
import { FC, memo } from "react";

import styles from "@/styles/components/header.module.scss";

interface Props {
  zennIconUrl: string;
  zennUrl: string;
}

const Header: FC<Props> = ({ zennIconUrl, zennUrl }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.header__title}>
          <Image
            className={styles.header__icon}
            src={zennIconUrl}
            alt="ゆーとおじさん"
            width={70}
            height={70}
            quality={80}
            loading="lazy"
          />
        </h1>
        <nav>
          <ul>
            <li>
              <Link
                className={styles.header__link}
                href={zennUrl}
                target="_blank"
              >
                フォロー
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
