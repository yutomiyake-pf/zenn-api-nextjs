import Articles from "@/components/Articles";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import MenuLinks from "@/components/MenuLinks";
import { ZENN_POST_TYPE, ZENN_USER_TYPE } from "@/types/zennTypes";
import fetchZennPostsAndUser from "@/utils/functions/fetchZennPostsAndUser";
import { ZENN_USER_URL } from "@/vars/zenn";
import { GetStaticProps } from "next";
import { FC } from "react";

interface Props {
  zennUser: ZENN_USER_TYPE;
  zennPosts: ZENN_POST_TYPE[];
}

const articlesPage: FC<Props> = ({ zennUser, zennPosts }) => {
  const links = [
    {
      text: "HOME",
      href: "/",
      isBlank: false,
      isActive: false,
    },
    {
      text: `Articles ${zennPosts.length}`,
      href: "/articles",
      isBlank: false,
      isActive: true,
    },
    {
      text: "Scraps",
      href: `${ZENN_USER_URL}?tab=scraps`,
      isBlank: true,
      isActive: false,
    },
    {
      text: "Comments",
      href: `${ZENN_USER_URL}?tab=comments`,
      isBlank: true,
      isActive: false,
    },
  ];
  return (
    <>
      <Header zennIconUrl={zennUser.iconUrl} zennUrl={ZENN_USER_URL} />
      <Introduction zennUser={zennUser} />
      <MenuLinks articleCount={zennUser.totalLikedCount} links={links} />
      <Articles zennPosts={zennPosts} />
    </>
  );
};

/**
 * ISRでzennの記事を取得する
 */
export const getStaticProps: GetStaticProps = async () => {
  const { user, posts } = await fetchZennPostsAndUser();
  if (!user || !posts.length)
    return { redirect: { destination: "/503", permanent: false } };
  return {
    props: {
      zennUser: user as ZENN_USER_TYPE,
      zennPosts: posts,
    },
    revalidate: 3600, // 1時間
  };
};

export default articlesPage;
