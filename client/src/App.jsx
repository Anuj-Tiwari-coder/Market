import React, { useState } from "react";
import Buy_and_sell from "./Components/Buy and sell";
import Chat from "./Components/Chat";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Testimonials from "./Components/Testimonials";
import Us from "./Components/Us";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <header className="flex items-center justify-between p-6 shadow-md sticky top-0 bg-inherit z-10">
        <h1 className="text-2xl font-bold">SoftSell</h1>
        <button
          onClick={toggleMode}
          className="border px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <hr />

      <main className="space-y-20 px-4 md:px-20 py-10">
        {/* Header  */}
        <Hero />
        {/* How It Works */}
        <Buy_and_sell />
        {/* Why Choose Us */}
        <Us />
        {/* Testimonials */}
        <Testimonials />
        {/* Ai Assistant */}
        <Chat />
        {/* Contact Form */}
        <Contact />

      </main>

      <footer className="text-center p-6 border-t mt-10">
        <p>© 2025 SoftSell. All rights reserved.</p>
      </footer>
    </div>
  );
}