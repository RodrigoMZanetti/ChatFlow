import "./Sidebar.css";

function Sidebar({ contacts, onSelectedContact }) {
  return (
    <aside className="sidebar">
      {contacts.map((contact) => (
        <div key={contact.id} className="contact__container">
          <img
            src={contact.avatar}
            alt={contact.name}
            className="contact__image"
            onClick={() => onSelectedContact(contact.id)}
          />
          <h3 className="contact__name">{contact.name}</h3>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
