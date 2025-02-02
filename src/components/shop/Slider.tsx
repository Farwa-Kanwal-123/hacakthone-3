"use client";

import Image from "next/image";

interface ImageData {
  _id: string;
  name: string;
  imageUrl: string;
}

interface SliderProps {
  images: ImageData[];
}

export default function Slider({ images }: SliderProps) {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-6">Featured Products</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-4 w-max">
          {images.map((image) => (
            <div
              key={image._id}
              className="w-[calc(100vw-2rem)] sm:w-[calc(50vw-2rem)] md:w-[calc(33.33vw-2rem)] lg:w-[calc(25vw-2rem)] flex-shrink-0"
            >
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Image
                  src={image.imageUrl}
                  alt={image.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{image.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}