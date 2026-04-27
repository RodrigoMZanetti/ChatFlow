import contacts from "./data/contacts.js";
import express from "express";

const server = express();
const { PORT = 3000 } = process.env;

server.get("/contacts", (req, res) => {
  res.send(contacts);
});

server.get("/contacts/:id/messages", (req, res) => {
  const id = Number(req.params.id);
  const contactMessage = contacts.find((contact) => contact.id === id);
  if (!contactMessage) {
    res.status(404).send({ error: "Contact not found" });
    return;
  }
  const message = contactMessage.messages;

  res.send(message);
});

server.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
