import { useCatImage } from "../hooks/useCatImage";

export function Other() {
  const { imageUrl } = useCatImage({ fact: "cat loves fish" });

  return (
    <>
      <p>New Image</p>
      {imageUrl && <img src={imageUrl} alt="" width={300} />}
    </>
  );
}
