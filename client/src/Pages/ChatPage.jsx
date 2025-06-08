import React, { useState } from "react";

const comicCharacter = {
  name: "Pixel Cat",
  role: "Comic Hero",
  avatar: "https://storage.googleapis.com/a1aa/image/1aa3cdda-be24-4e92-051f-fb1dc96a2de5.jpg",
};

const initialMessages = [
  {
    from: "comic",
    text: "Hello, I'm Pixel Cat! Ready for an adventure?",
  },
  {
    from: "user",
    text: "Hi Pixel Cat! What's your next quest?",
  },
  {
    from: "comic",
    text: "I'm searching for the legendary cheese crystal. Want to join?",
  },
];

export const ChatPage = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    // Simulate comic character reply (for demo)
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        {
          from: "comic",
          text: "Let's go! But beware of the sneaky robot mice.",
        },
      ]);
    }, 800);
  };

  return (
    <div className="bg-[#FAF2E9] min-h-screen flex items-center justify-center p-4">
      <main className="max-w-[400px] w-full">
        <section className="bg-[#5B5FEF] rounded-2xl shadow-[0_10px_20px_rgba(91,95,239,0.3)] p-4 text-white flex flex-col">
          {/* Chat header */}
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center space-x-3">
              <img
                src={comicCharacter.avatar}
                alt={comicCharacter.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col text-xs font-semibold leading-tight">
                <span>{comicCharacter.name}</span>
                <span className="text-[9px] font-normal opacity-70">
                  {comicCharacter.role}
                </span>
              </div>
            </div>
            <button
              aria-label="Close chat"
              className="text-white font-bold text-lg leading-none"
            >
              ×
            </button>
          </div>
          {/* Chat messages */}
          <div className="flex flex-col gap-2 mb-2 max-h-64 overflow-y-auto">
            {messages.map((msg, idx) =>
              msg.from === "user" ? (
                <div key={idx} className="flex justify-end">
                  <div className="bg-white text-[#1F1F1F] rounded-lg px-3 py-1 text-xs max-w-[70%]">
                    {msg.text}
                  </div>
                </div>
              ) : (
                <div key={idx} className="flex justify-start">
                  <div className="bg-[#FCA88A] text-white rounded-lg px-3 py-1 text-xs max-w-[70%]">
                    {msg.text}
                  </div>
                </div>
              )
            )}
          </div>
          {/* Chat input */}
          <form
            className="mt-2 flex items-center bg-white rounded-md overflow-hidden"
            onSubmit={handleSend}
          >
            <input
              className="flex-grow px-3 py-1 text-xs text-black outline-none"
              placeholder="Type your message..."
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="text-[#5B5FEF] font-semibold text-xs px-3"
              type="submit"
            >
              Send
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};
