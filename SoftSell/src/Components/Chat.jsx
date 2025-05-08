import React, { useState } from 'react';

const Chat = () => {
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi! I'm your assistant. Ask me anything about SoftSell." },
    ]);
    const [input, setInput] = useState("");

    const exampleQuestions = [
        "How do I sell my license?",
        "What types of licenses do you accept?",
        "Is my data secure?"
    ];

    const handleSend = () => {
        if (!input.trim()) return;
        const userMessage = { sender: "user", text: input };
        setMessages(prev => [...prev, userMessage]);

        let response = "Sorry, I didn't understand that.";
        if (input.toLowerCase().includes("sell")) {
            response = "To sell your license, just fill out the contact form and we'll get back to you.";
        } else if (input.toLowerCase().includes("license")) {
            response = "We accept Windows, Adobe, and many other common licenses.";
        } else if (input.toLowerCase().includes("secure")) {
            response = "Yes, we ensure all transactions are encrypted and secure.";
        }
        setTimeout(() => {
            setMessages(prev => [...prev, { sender: "bot", text: response }]);
        }, 800);
        setInput("");
    };
    return (
        <div className="fixed bottom-6 right-6 z-50">
            {chatOpen ? (
                <div className="w-72 bg-black dark:bg-gray-400 shadow-lg border rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between bg-blue-600 text-white p-2">
                        <span>SoftSell Assistant</span>
                        <button onClick={() => setChatOpen(false)}>✕</button>
                    </div>
                    <div className="h-64 p-2 overflow-y-auto space-y-2 text-sm">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`p-2 rounded ${msg.sender === "bot" ? "bg-white-200 dark:bg-gray-700" : "bg-blue-400 dark:bg-blue-600 text-white-600"}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="flex p-2 border-t">
                        <input
                            type="text"
                            className="flex-1 p-1 border rounded"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => e.key === "Enter" && handleSend()}
                            placeholder="Ask a question..."
                        />
                        <button onClick={handleSend} className="ml-2 px-2 bg-blue-600 text-white rounded">
                            Send
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setChatOpen(true)}
                    className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
                >
                    💬
                </button>
            )}
        </div>
    )
}
export default Chat
