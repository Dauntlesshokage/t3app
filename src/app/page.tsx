/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { db } from "~/server/db";
import Image from "next/image";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { getMyImages } from "../server/queries";
import { object } from "zod";

export const dynamic = "force-dynamic";
export async function Images() {
  const images = await getMyImages();

  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex h-48 w-48 flex-col">
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              alt="image"
            />
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
