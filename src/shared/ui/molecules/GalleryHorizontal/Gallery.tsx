import {
  AspectRatio,
  HStack,
  Image,
  Skeleton,
  Stack,
  StackProps,
  IconButton,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { Carousel, CarouselIconButton, CarouselSlide, useCarousel } from "./Carousel";
import type { ProductImage } from "./_data";

interface GalleryProps {
  images: ProductImage[];
  aspectRatio?: number;
  rootProps?: StackProps;
}

export const Gallery = (props: GalleryProps) => {
  const { images, aspectRatio = 1 / 1, rootProps } = props;
  const [index, setIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = useBreakpointValue({ base: 3, md: 5 });

  const [ref, slider] = useCarousel({
    slides: {
      perView: slidesPerView,
      spacing: useBreakpointValue({ base: 16, md: 24 }),
    },
    slideChanged: (slider) => setCurrentSlide(slider.track.details.rel),
  });

  return (
    <Stack spacing="4" {...rootProps}>
      <Box position="relative">
        <IconButton
          position="absolute"
          left="2"
          top="50%"
          transform="translateY(-50%)"
          onClick={() => {
            if (index === 0) return;
            slider.current?.prev();
            setIndex((prev) => prev - 1);
          }}
          icon={<IoChevronBackOutline />}
          aria-label="Previous slide"
          disabled={currentSlide === 0}
          zIndex={1}
        />
        <AspectRatio ratio={aspectRatio} position="relative">
          <Image
            src={images[index].src}
            objectFit="contain"
            alt={images[index].alt}
            fallback={<Skeleton />}
          />
        </AspectRatio>
        <IconButton
          position="absolute"
          right="2"
          top="50%"
          transform="translateY(-50%)"
          onClick={() => {
            if (index === images.length - 1) return;
            slider.current?.next();
            setIndex((prev) => prev + 1);
          }}
          icon={<IoChevronForwardOutline />}
          aria-label="Next slide"
          disabled={currentSlide + Number(slidesPerView) === images.length}
          zIndex={1}
        />
      </Box>
      <HStack spacing="4">
        <CarouselIconButton
          onClick={() => slider.current?.prev()}
          icon={<IoChevronBackOutline />}
          aria-label="Previous slide"
          disabled={currentSlide === 0}
        />
        <Carousel ref={ref} direction="row" width="full">
          {images.map((image, i) => (
            <CarouselSlide key={i} onClick={() => setIndex(i)} cursor="pointer">
              <AspectRatio
                ratio={aspectRatio}
                transition="all 200ms"
                opacity={index === i ? 1 : 0.4}
                _hover={{ opacity: 1 }}
              >
                <Image
                  src={image.src}
                  objectFit="cover"
                  alt={image.alt}
                  fallback={<Skeleton />}
                />
              </AspectRatio>
            </CarouselSlide>
          ))}
        </Carousel>
        <CarouselIconButton
          onClick={() => slider.current?.next()}
          icon={<IoChevronForwardOutline />}
          aria-label="Next slide"
          disabled={currentSlide + Number(slidesPerView) === images.length}
        />
      </HStack>
    </Stack>
  );
};
