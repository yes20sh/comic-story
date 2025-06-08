import React from "react";

// Example user comics data
const userComics = [
  {
    id: 1,
    title: "The Lost Treasure",
    story: "A daring adventure to find the hidden treasure in the ancient ruins.",
    cover: "https://storage.googleapis.com/a1aa/image/ad36748b-b2fa-43e3-2e0a-e833e58127e6.jpg",
  },
  {
    id: 2,
    title: "Robot's Day Out",
    story: "Follow Robo as he explores the city and learns about friendship.",
    cover: "https://storage.googleapis.com/a1aa/image/e345e811-c932-4507-2335-47b40a8f77c1.jpg",
  },
  {
    id: 3,
    title: "Pixel Cat's Quest",
    story: "Pixel Cat embarks on a quest to save the digital kingdom.",
    cover: "https://storage.googleapis.com/a1aa/image/1aa3cdda-be24-4e92-051f-fb1dc96a2de5.jpg",
  },
];

export const UserComic = () => {
  return (
    <div className="bg-[#FAF2E9] min-h-screen flex items-center justify-center p-4">
      <main className="max-w-[900px] w-full">
        <h1 className="text-2xl font-bold text-[#1F1F1F] mb-6 text-center">Your Comic Stories</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add New Comic Card */}
          <div className="bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center p-8 text-center">
            <button
              aria-label="Add new comic"
              className="w-12 h-12 rounded-full bg-[#FCE9E0] text-[#FCA88A] flex items-center justify-center text-3xl font-extrabold mb-4"
            >
              +
            </button>
            <h2 className="text-sm font-semibold mb-1">Add New Comic</h2>
            <p className="text-[10px] text-[#B9B9B9] max-w-[120px] leading-tight">
              Store your creative comic stories here!
            </p>
          </div>
          {/* User Comic Cards */}
          {userComics.map((comic) => (
            <div
              key={comic.id}
              className="bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.05)] flex flex-col items-center p-5"
            >
              <img
                src={comic.cover}
                alt={comic.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="text-lg font-semibold text-[#1F1F1F] mb-1">{comic.title}</h3>
              <p className="text-xs text-[#4B4B4B] mb-2 text-center">{comic.story}</p>
              <button className="mt-auto bg-[#5B5FEF] text-white text-xs font-semibold rounded-md px-4 py-1 hover:bg-opacity-90 transition">
                View Comic
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};
