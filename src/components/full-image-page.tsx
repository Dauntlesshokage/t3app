import React from "react";
import { getImage } from "../server/queries";

async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full bg-green-500">
      <img src={image.url} className="w-96 object-contain" />;
    </div>
  );
}
export default FullPageImageView;
