import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { CardDemo } from './CardDemo';

export default function Cards() {
  interface CardData {
    type: string;
    imageUrl: string;
  }
  
  const data: CardData[] = [
    {
      type: "Photography",
      imageUrl: "/photography.jpg"
    },
    {
      type: "Animation",
      imageUrl: "/photography.jpg"
    },
    {
      type: "Post Production",
      imageUrl: "/photography.jpg"
    },
    {
      type: "Video production",
      imageUrl: "/photography.jpg"
    },
  ];

  // Create a reference to the scrollable container
  const scrollRef = useRef<HTMLDivElement>(null);

  // Function to handle scrolling
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust the scroll amount as needed
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-14 ml-3">
      <div className="max-w-screen-xl mx-auto px-4 ">
        <div className="bg-white dark:bg-slate-900 p-8 text-gray-600 dark:text-gray-300 gap-x-12 lg:flex md:px-8 relative">
          <div className="lg:max-w-xl flex-shrink-0">
            <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
              <div className="max-w-2xl">
                <h3 className="text-gray-900 dark:text-gray-200 text-3xl font-semibold sm:text-4xl">
                  What are you waiting for?
                </h3>
                <p className="mt-3 max-w-xl">
                  Checkout what we have for you!
                </p>
              </div>
            </div>
          </div>

            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white dark:bg-slate-800 rounded-full shadow-lg z-10"
              onClick={() => scroll('left')}
            >
              <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          <div
            ref={scrollRef}
            className="relative flex items-center overflow-x-auto space-x-6 py-4 lg:py-0 scrollbar-hidden"
          >
            
            {data.length > 0 ? (
              data.map((item: CardData, index: number) => (
                <CardDemo
                  key={index}
                  type={item.type}
                  imageUrl={item.imageUrl}
                />
              ))
            ) : (
              <p className="w-full text-center text-gray-500">No results found</p>
            )}

          </div>
            {/* Right Arrow Button */}
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white dark:bg-slate-800 rounded-full shadow-lg z-10"
              onClick={() => scroll('right')}
            >
              <ArrowRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
        </div>
      </div>
    </section>
  );
}
