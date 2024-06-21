/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { db } from "~/server/db";
import Link from "next/link";
import { posts } from "~/server/db/schema";

const mockUrls = [
  "https://utfs.io/f/12a2fc4e-4a9f-45e4-85a7-58123b6b84b1-yzd674.jpg",
  "https://utfs.io/f/450c78ba-73c7-4c78-a364-97709022c897-fl0hth.PORTRAIT.jpg",
  "https://utfs.io/f/b8676c71-be75-409b-9661-650b1bd276cd-fkzr8t.PORTRAIT.jpg",
  "https://utfs.io/f/c4b4f8d4-e55f-408d-8da3-98928c529280-976u1e.MP.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default async function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="h-70 w-48 p-4">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
