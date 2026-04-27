import "./App.css";
import Header from "./Header";
import ChatArea from "./ChatArea";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

function App() {
  const [contactId, setContactId] = useState(null);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (!contacts) {
      return;
    }
    async function handleFetchContacts() {
      try {
        const contactMessageFetch = await fetch(
          `http://localhost:3000/contacts`,
        );
        const data = await contactMessageFetch.json();
        setContacts(data);
      } catch (error) {
        console.log(error);
      }
    }

    handleFetchContacts();
  }, []);

  function handleContactId(id) {
    setContactId(id);
  }

  return (
    <>
      <div className="layout">
        <Header user={user} />
        <Sidebar contacts={contacts} onSelectedContact={handleContactId} />
        <ChatArea contactId={contactId} />
      </div>
    </>
  );
}

export default App;
