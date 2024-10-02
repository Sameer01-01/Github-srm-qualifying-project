// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Pagetwo = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-black bg-opacity-95">
        <div>
          <p className="text-white text-5xl text-center font-bold pt-40">
            Why choose us?
          </p>
          <p className="text-center text-zinc-500 p-8">
            Unlock Your Potential with Our Comprehensive Learning Approach
          </p>
        </div>

        <div className="w-3/4 m-auto">
          <div className="mt-20">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 border-2 border-zinc-700 rounded-2xl h-[300px] w-[300px] hover:border-white"
                >
                  {/* Card content */}
                  <div>
                    <p className="text-white text-4xl font-bold px-3 py-5">
                      {d.head}
                    </p>
                  </div>
                  <div>
                    <p className="text-rose-800 text-xl font-semibold px-3">
                      {d.bottom}
                    </p>
                    <p className="text-white px-3 py-5">{d.last}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

const data = [
  {
    head: "O1",
    bottom: "Expert-Crafted Learning",
    last: "Our team of accomplished engineers, with impressive coding profiles across various programming platforms, hails from top tech companies like Google, Amazon, Meta, and Microsoft. They also boast a proven track record of successful teaching.",
  },
  {
    head: "O2",
    bottom: "Structured Learning Path",
    last: "Master Data Structures & Algorithms (DSA), System Design, core subjects, and practical projects – all through premium blog posts and in-depth video solutions.",
  },
  {
    head: "O3",
    bottom: "Unmatched Content Depth",
    last: "We prioritize quality content, offering in-depth explanations and a wider range of solved problems in both free and paid courses. Our focus is on developing problem-solving skills through intuitive video explanations.",
  },
];

export default Pagetwo;
