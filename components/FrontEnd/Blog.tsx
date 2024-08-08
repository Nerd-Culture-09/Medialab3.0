"use client";

import { useState } from "react";

type Post = {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  imageUrl: string;
  category: { title: string; href: string };
  author: {
    name: string;
    role: string;
    href: string;
    imageUrl: string;
    
  };
};

export default function Blog() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const posts: Post[] = [
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint volupas. Error voluptates culpa eligendi. Hic vel totam vitae illo. as. Error voluptates culpa eligendi. Hic vel totam vitae illo. as. Error voluptates culpa eligendi. Hic vel totam vitae illo. as. Error voluptates culpa eligendi. Hic vel totam vitae illo. as. Error voluptates culpa eligendi. Hic vel totam vitae illo. as. Error voluptates culpa eligendi. Hic vel totam vitae illo. as. Error voluptates culpa eligendi. Hic vel totam vitae illo. tas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 2,
      title: "How to use social media for marketing",
      href: "#",
      description:
        "Discover the strategies for utilizing social media platforms effectively to increase brand awareness and engagement.",
      date: "Apr 12, 2020",
      datetime: "2020-04-12",
      imageUrl:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      category: { title: "Social Media", href: "#" },
      author: {
        name: "Sarah Connor",
        role: "Marketing Specialist",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 3,
      title: "Email marketing best practices",
      href: "#",
      description:
        "Learn the best practices for creating successful email marketing campaigns that convert.",
      date: "May 5, 2020",
      datetime: "2020-05-05",
      imageUrl:
        "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      category: { title: "Email Marketing", href: "#" },
      author: {
        name: "John Doe",
        role: "Content Strategist",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 4,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 5,
      title: "How to use social media for marketing",
      href: "#",
      description:
        "Discover the strategies for utilizing social media platforms effectively to increase brand awareness and engagement.",
      date: "Apr 12, 2020",
      datetime: "2020-04-12",
      imageUrl:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      category: { title: "Social Media", href: "#" },
      author: {
        name: "Sarah Connor",
        role: "Marketing Specialist",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 6,
      title: "Email marketing best practices",
      href: "#",
      description:
        "Learn the best practices for creating successful email marketing campaigns that convert.",
      date: "May 5, 2020",
      datetime: "2020-05-05",
      imageUrl:
        "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      category: { title: "Email Marketing", href: "#" },
      author: {
        name: "John Doe",
        role: "Content Strategist",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === posts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className={`duration-700 ease-in-out absolute w-full h-full transition-opacity flex items-center justify-center ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <article className="flex max-w-xl flex-col items-start justify-between p-4 border rounded-lg shadow-lg bg-white">
              <h3 className="text-lg font-semibold leading-6 text-gray-900">
                <a href={post.href}>{post.title}</a>
              </h3>
              <p className="mt-5 text-sm leading-6 text-gray-600">
                <img
                  alt="Author"
                  src={post.author.imageUrl}
                  className="h-10 w-10 rounded-full "
                />
              </p>
              <p className="mt-5 text-sm leading-6 text-gray-600">
                {post.description}
              </p>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="flex items-center justify-center w-20 h-20 overflow-hidden bg-gray-50 rounded-full">
                  <img
                    alt=""
                    src={post.author.imageUrl}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {posts.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-current={index === activeIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
