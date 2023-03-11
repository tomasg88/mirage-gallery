import Image from 'next/image';

export const HomeSectionImagesRow = ({ samples }: { samples: string[] }) => {
  return (
    <div className="grid h-64 grid-cols-10 my-6 overflow-hidden">
      {samples.map((image, i) => (
        <div className="w-full h-64 overflow-hidden" key={`${image}-${i}`}>
          <Image
            alt="alt"
            className="object-cover w-full h-64"
            height={900}
            quality={100}
            src={image}
            width={1200}
          />
        </div>
      ))}
    </div>
  );
};
