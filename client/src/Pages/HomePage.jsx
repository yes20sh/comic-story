import React from 'react';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#FAF2E9] flex flex-col items-center justify-center p-4">
      <main className="max-w-[900px] w-full space-y-8">
        {/* Heading and Comic Prompt Input */}
        <section className="bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.05)] p-8 text-center">
          <h1 className="text-2xl font-bold text-[#1F1F1F] mb-4">Comic Creator</h1>
          <p className="text-sm text-[#4B4B4B] mb-6">
            Enter your prompt below to generate your own comic!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Type your comic prompt here..."
              className="flex-grow rounded-md px-4 py-2 text-black text-sm outline-none border border-[#B9B9B9]"
            />
            <button className="bg-[#5B5FEF] text-white font-semibold rounded-md px-6 py-2 hover:bg-opacity-90 transition">
              Generate Comic
            </button>
          </div>
        </section>

        {/* Why to Use */}
        <section className="bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.05)] p-6">
          <h2 className="text-xl font-bold text-[#1F1F1F] mb-3">Why Use Comic Creator?</h2>
          <ul className="list-disc pl-5 text-sm text-[#4B4B4B] space-y-2">
            <li>Create unique comics from any prompt in seconds</li>
            <li>No artistic skills required—AI does the work for you</li>
            <li>Share your comics with friends or the world</li>
            <li>Perfect for writers, teachers, and comic enthusiasts</li>
          </ul>
        </section>

        {/* About */}
        <section className="bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.05)] p-6">
          <h2 className="text-xl font-bold text-[#1F1F1F] mb-3">About</h2>
          <p className="text-sm text-[#4B4B4B]">
            Comic Creator is a web app that lets you turn your ideas into comics using AI. Whether you're a storyteller, educator, or just having fun, our platform makes comic creation easy and accessible for everyone.
          </p>
        </section>
      </main>
    </div>
  );
};
