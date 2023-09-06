import { ZENN_POST_TYPE, ZENN_USER_TYPE } from "@/types/zennTypes";
import { ZENN_FETCH_POST_URL, ZENN_ORIGIN } from "@/vars/zenn";

/**
 * zennの記事とユーザー情報を取得する
 * @returns {Promise<{posts: ZENN_POST_TYPE[], user: ZENN_USER_TYPE}>}
 */
export default async function fetchZennPostsAndUser() {
  const posts: ZENN_POST_TYPE[] = []; // 記事
  let user: ZENN_USER_TYPE | undefined = undefined; // ユーザー
  await fetch(ZENN_FETCH_POST_URL)
    .then(async (res) => {
      const data = await res.json();
      let totalLikedCount = 0; // いいね数
      data.articles.forEach((article: any) => {
        totalLikedCount += article.liked_count;
        posts.push({
          id: article.id as string,
          title: article.title as string,
          commentCount: article.comments_count as number,
          likedCount: article.liked_count as number,
          articleType: article.article_type as string,
          emoji: article.emoji as string,
          url: `${ZENN_ORIGIN}${article.path}`,
        });
        user = {
          id: article.user.id as string,
          username: article.user.username as string,
          name: article.user.name as string,
          iconUrl: article.user.avatar_small_url as string,
          totalLikedCount: totalLikedCount,
        };
      });
    })
    .catch((error) => {
      console.error(error);
    });

  return { posts, user };
}
