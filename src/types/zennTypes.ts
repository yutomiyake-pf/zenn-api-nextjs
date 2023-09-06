export type ZENN_POST_TYPE = {
  id: string;
  title: string;
  commentCount: number;
  likedCount: number;
  articleType: string;
  emoji: string;
  url: string;
};

export type ZENN_USER_TYPE = {
  id: string;
  username: string;
  name: string;
  iconUrl: string;
  totalLikedCount: number;
};
