import Link from "next/link";
import { FC, memo } from "react";

import styles from "@/styles/components/menuLinks.module.scss";

type LinkType = {
  text: string;
  href: string;
  isBlank: boolean;
  isActive: boolean;
};

interface Props {
  articleCount: number;
  links: LinkType[];
}
const MenuLinks: FC<Props> = ({ articleCount, links }) => {
  return (
    <div className={styles.menuLinks}>
      <div className={styles.menuLinks__content}>
        {links.map((link) => (
          <Link
            key={link.text}
            className={`${styles.menuLinks__link} ${
              link.isActive ? styles["menuLinks__link--active"] : ""
            }`}
            href={link.href}
            target={link.isBlank ? "_blank" : undefined}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default memo(MenuLinks);
