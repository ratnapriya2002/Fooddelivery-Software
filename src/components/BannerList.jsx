import Banner from './Banner';
import ShimmerBanner from './shimmers/ShimmerBanner';
import { useKeenSlider } from 'keen-slider/react';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
import { useState, useRef, useEffect } from 'react';

const BannerList = ({ isLoading, banners }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Define sliderRef and instanceRef using useKeenSlider hook
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free',
    slideChanged(slider) {
      setCurrentSlide(slider?.track.details.rel);
    },
    breakpoints: {
      '(max-width: 480px)': {
        slides: { perView: 1, spacing: 10 },
      },
      '(min-width: 480px)': {
        slides: { perView: 2, spacing: 10 },
      },
      '(min-width: 768px)': {
        slides: { perView: 3, spacing: 10 },
      },
    },
  });

  // Optional: You can also use `useEffect` to manage the slider ref if needed
  useEffect(() => {
    // Example of accessing the slider instance when it's ready
    if (instanceRef.current) {
      console.log('Keen Slider instance initialized');
    }
  }, [instanceRef]);

  // Check if banners are available
  if (!banners) {
    return null;
  }

  // Conditional checks for slider instance
  const goToPrevSlide = () => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  };

  const goToNextSlide = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };

  return (
    <div className="container-max">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-2xl text-zinc-700">Best offers for you</h1>

        {instanceRef.current && (
          <div className="flex gap-2 items-center">
            <button
              disabled={currentSlide === 0}
              onClick={goToPrevSlide}
              className="bg-gray-100 p-2 rounded-full disabled:text-gray-300"
            >
              <ArrowLongLeftIcon className="w-4 h-4" />
            </button>
            <button
              disabled={currentSlide === instanceRef.current?.track?.details?.slides?.length - 1}
              onClick={goToNextSlide}
              className="bg-gray-100 p-2 rounded-full disabled:text-gray-300"
            >
              <ArrowLongRightIcon className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {isLoading ? (
        <div className="flex gap-4 md:gap-8 mb-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <ShimmerBanner key={i} />
          ))}
        </div>
      ) : (
        <div ref={sliderRef} className="keen-slider">
          {banners?.card?.card.gridElements.infoWithStyle.info.map((banner) => (
            <Banner banner={banner} key={banner.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BannerList;
