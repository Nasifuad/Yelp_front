import { useEffect, useState } from "react";

const InspirationSection = () => {
  const images = [
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643", // Journal
    "https://images.unsplash.com/photo-1544717305-2782549b5136", // Books
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40", // Workspace
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3", // Notes
    "https://images.unsplash.com/photo-1501504905252-473c47e087f8", // Coffee and notebook
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 relative h-96 overflow-hidden rounded-lg shadow-xl">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt="Journal"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Daily Inspiration</h2>
          <p className="text-gray-600 mb-4">
            "The journey of a thousand miles begins with one step. Start your
            daily practice of self-reflection and watch your productivity soar."
          </p>
          <button className="text-indigo-600 font-semibold hover:text-indigo-700">
            Read More Inspirations →
          </button>
        </div>
      </div>
    </div>
  );
};

export default InspirationSection;
