import { ImageProps } from "../../../types";

interface ImageRowProps {
  images: ImageProps[];
}

export const ImageRow = ({ images }: ImageRowProps): JSX.Element => {
  return (
    <div className="flex w-full justify-evenly gap-4">
      {images.map(({ src, alt }, i) => (
        <div key={i} className="flex-1">
          <img src={src} alt={alt} className="w-full rounded" />
        </div>
      ))}
    </div>
  );
};
