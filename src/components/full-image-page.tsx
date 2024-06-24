import React from "react";
import { getImage } from "../server/queries";

async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full min-w-0 ">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} className="flex-shrink object-contain" />
      </div>
      <div className=" flex w-48 flex-shrink flex-col border-l"></div>
      <div className="text-xl font-bold">{image.name}</div>
    </div>
  );
}
export default FullPageImageView;
