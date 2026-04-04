import { useState } from "react";
import "./App.css";

const initialMessages = [
  {
    id: 1,
    sender: "Rodrigo",
    isUser: true,
    message: "What time is it?",
  },
  {
    id: 2,
    sender: "Larissa",
    isUser: false,
    message: "nine o'clock, I am not ready yet",
  },
  {
    id: 3,
    sender: "Fernandes",
    isUser: false,
    message: "Hurry up bro",
  },
  {
    id: 4,
    sender: "Jorge",
    isUser: true,
    message: "Wait for me guys!",
  },
];

function App() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState(initialMessages);

  function MessagesControl() {
    const newMessage = {
      id: new Date().getTime(),
      sender: name,
      isUser: true,
      message: text,
    };

    setMessages((prevMessages) => {
      return [...prevMessages, newMessage];
    });

    setText("");
    setName("");
  }

  function TextChange(evt) {
    setText(evt.target.value);
  }

  function NameChange(evt) {
    setName(evt.target.value);
  }

  return (
    <>
      <div className="app">
        {messages.map((message) => (
          <div key={message.id}>
            <h1>{message.sender}</h1>
            <p>{message.message}</p>
          </div>
        ))}
        <div className="inputs">
          <label>Your Name</label>
          <input
            type="text"
            value={name}
            onChange={NameChange}
            placeholder="Type your name here"
          />
          <label>Send Your Message</label>
          <input
            type="text"
            value={text}
            onChange={TextChange}
            placeholder="Type your message here"
          />
          <button type="submit" onClick={MessagesControl}>
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
