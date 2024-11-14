import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { Card, CardContent } from './ui/card'
import Autoplay from 'embla-carousel-autoplay'

const photos_url = [
  {
    id: 1,
    url: 'https://i.postimg.cc/0j76LFWz/01.jpg',
    alt: 'Photo 1',
  },
  {
    id: 2,
    url: 'https://i.postimg.cc/pTwhcRZN/02.jpg',
    alt: 'Photo 2',
  },
  {
    id: 3,
    url: 'https://i.postimg.cc/TwL5cpnq/03.jpg',
    alt: 'Photo 3',
  },
  {
    id: 4,
    url: 'https://i.postimg.cc/xdFbHKN1/04.jpg',
    alt: 'Photo 4',
  },
  {
    id: 5,
    url: 'https://i.postimg.cc/nVmQj9Fn/05.jpg',
    alt: 'Photo 5',
  },
  {
    id: 6,
    url: 'https://i.postimg.cc/RVzJcChK/06.jpg',
    alt: 'Photo 6',
  },
]
export function Photos() {
  return (
    <Carousel
      className="w-full max-w-xs"
      opts={{
        loop: true,
      }}
      plugins={[Autoplay({ playOnInit: false, delay: 3000 })]}
    >
      <CarouselContent>
        {photos_url.map(photos => {
          return (
            <CarouselItem key={photos.id}>
              <div className="p-1">
                <Card className="border-none bg-transparent">
                  <CardContent className="flex aspect-square items-center justify-center p-6 text-white">
                    <img
                      src={photos.url}
                      alt={photos.alt}
                      className="object-cover aspect-[1/1.5]"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}
