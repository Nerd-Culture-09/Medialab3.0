import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface CarouselPluginProps {
  data: { type: string; imageUrl: string }[];
}

export function CarouselPlugin({ data }:  CarouselPluginProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  // Ensure the data array has exactly 10 items
  const extendedData = [...data];
  while (extendedData.length < 10) {
    extendedData.push(...data.slice(0, 10 - extendedData.length));
  }

  const [emblaRef] = useEmblaCarousel({
    loop: true,
    skipSnaps: false // Optional: ensure smooth transitions
  });

  return (
    <Carousel
      ref={emblaRef}
      plugins={[plugin.current]}
      className="w-full max-w-xs relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="flex items-center justify-center">
        {extendedData.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="border-none shadow-none">
                <CardContent className="flex items-center justify-center p-6">
                  <Image
                    src={item.imageUrl}
                    alt={item.type}
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
}
