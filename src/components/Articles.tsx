import { ZENN_POST_TYPE } from "@/types/zennTypes";
import { FC } from "react";

interface Props {
  zennPosts: ZENN_POST_TYPE[];
}

const Articles: FC<Props> = ({ zennPosts }) => {
  return (
    <div>
      <div>
        <article></article>
      </div>
    </div>
  );
};

export default Articles;
