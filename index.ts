interface UserProfile {
  id: number;
  name: string;
  email: string;
};

type UpdateUser = Partial<UserProfile>;

const updateUser: UpdateUser = {
  name: "新・タロウ"
};

console.log(`更新データ: ${updateUser.name}`);

interface DBUser {
  id: number;
  name: string;
  passwordHash: string;
};

type PublicUser = Omit<DBUser, "passwordHash">;

const safeUser: PublicUser = {
  id: 1,
  name: "ハナコ"
};

console.log(`公開ユーザー情報: ID ${safeUser.id}, 名前 ${safeUser.name}`);

interface Article {
  id: number;
  title: string;
  content: string;
};

type ArticlePreview = Omit<Article, "content">;
type UpdateArticle = Partial<Article>;

const articlePrev: ArticlePreview = {
  id: 1,
  title: "記事タイトル"
};

const updateArticle: UpdateArticle = {
  content: "差し替え記事"
};

console.log(`記事名: ${articlePrev.title}`);
console.log(`更新記事内容: ${updateArticle.content}`);