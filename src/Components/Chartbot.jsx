import { useState } from "react";
import axios from "axios";

export default function ChatBot() {
  const [messages, setMessages] = useState([{ role: "system", content: "How can I help you today?" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: newMessages,
        },
        {
          headers: {
            Authorization: `Bearer YOUR_OPENAI_API_KEY`,
            "Content-Type": "application/json",
          },
        }
      );

      const reply = response.data.choices[0].message;
      setMessages([...newMessages, reply]);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="h-96 overflow-y-auto bg-white shadow rounded p-4 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded ${
              msg.role === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && <div className="text-gray-400">Typing...</div>}
      </div>
      <div className="mt-4 flex">
        <input
          className="flex-1 border p-2 rounded-l outline-none"
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
