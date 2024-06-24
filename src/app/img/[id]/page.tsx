import React from "react";
function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
  return <div>{photoId}</div>;
}
export default PhotoModal;
