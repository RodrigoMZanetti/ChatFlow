import { useEffect, useState } from "react";
import "./ChatArea.css";

function ChatArea({ contactId }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!contactId) {
      return;
    }
    async function handleFetchMessages() {
      try {
        const contactMessageFetch = await fetch(
          `http://localhost:3000/contacts/${contactId}/messages`,
        );
        const data = await contactMessageFetch.json();
        setMessages(data);
      } catch (error) {
        console.error(error);
      }
    }

    handleFetchMessages();
  }, [contactId]);

  function handleMessagesControl() {
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

  function handleTextChange(evt) {
    setText(evt.target.value);
  }

  function handleNameChange(evt) {
    setName(evt.target.value);
  }
  return (
    <div className="chatArea">
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
          onChange={handleNameChange}
          placeholder="Type your name here"
        />
        <label>Send Your Message</label>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Type your message here"
        />
        <button type="button" onClick={handleMessagesControl}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatArea;
