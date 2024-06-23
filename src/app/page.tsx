/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { db } from "~/server/db";
import Link from "next/link";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { getMyImages } from "../server/queries";

export const dynamic = "force-dynamic";
export async function Images() {
  const images = await getMyImages();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            <img src={image.url} alt="image" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
export default async function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">Please Sign In</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
