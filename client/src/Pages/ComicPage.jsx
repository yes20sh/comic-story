import React from "react";

// Example comic images (replace with your actual URLs)
const comicImages = [
  "https://storage.googleapis.com/a1aa/image/ad36748b-b2fa-43e3-2e0a-e833e58127e6.jpg",
  "https://storage.googleapis.com/a1aa/image/e345e811-c932-4507-2335-47b40a8f77c1.jpg",
  "https://storage.googleapis.com/a1aa/image/1aa3cdda-be24-4e92-051f-fb1dc96a2de5.jpg",
];

export const ComicPage = () => {
  return (
    <div className="bg-[#FAF2E9] min-h-screen flex items-center justify-center p-4">
      <main className="max-w-[900px] w-full space-y-8">
        {/* Comic Title and Description */}
        <section className="bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.05)] p-8 text-center">
          <h1 className="text-2xl font-bold text-[#1F1F1F] mb-2">The Adventures of Pixel Cat</h1>
          <p className="text-sm text-[#4B4B4B] mb-4">
            Follow Pixel Cat as they explore a world full of surprises and quirky friends!
          </p>
        </section>

        {/* Comic Panels */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {comicImages.map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.05)] flex flex-col items-center p-4"
            >
              <img
                src={img}
                alt={`Comic panel ${idx + 1}`}
                className="w-full h-64 object-cover rounded-lg mb-2"
              />
              <span className="text-xs text-[#B9B9B9]">Panel {idx + 1}</span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};
