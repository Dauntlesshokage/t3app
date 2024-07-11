/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { db } from "~/server/db";
import Image from "next/image";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { getMyImages } from "../server/queries";
import { object } from "zod";
import Link from "next/link";

export const dynamic = "force-dynamic";
export async function Images() {
  const images = await getMyImages();

  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {images.map((image) => (
          <div key={image.id} className="flex h-48 w-48 flex-col">
            <Link href={`/img/${image.id}`}>
              <Image
                src={image.url}
                style={{ objectFit: "contain" }}
                width={192}
                height={192}
                alt={image.name}
              />
            </Link>
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
        <div className="flex h-screen w-full items-center justify-center text-8xl">
          Please Sign In
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
