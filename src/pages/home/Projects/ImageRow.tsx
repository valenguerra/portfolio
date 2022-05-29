interface ImageRowProps {
  images: ImageProps[];
}

interface ImageProps {
  src: string;
  alt: string;
}

export const ImageRow = ({ images }: ImageRowProps): JSX.Element => {
  const height = { 1: 80, 2: 64, 3: 48, 4: 32 }[images.length];
  const smHeight = { 1: 80, 2: 80, 3: 64, 4: 48 }[images.length];

  return (
    <div className="flex w-full flex-wrap justify-evenly">
      {images.map(({ src, alt }, i) => (
        <img
          key={i}
          src={src}
          alt={alt}
          className={`h-${height} rounded sm:h-${smHeight} md:h-80`}
        />
      ))}
    </div>
  );
};
