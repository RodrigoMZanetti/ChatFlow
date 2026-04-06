import "./Sidebar.css";

function Sidebar({ contacts }) {
  return (
    <aside className="sidebar">
      {contacts.map((contact) => (
        <div key={contact.id} className="contact__container">
          <h3 className="contact__name">{contact.name}</h3>
          <img
            src={contact.avatar}
            alt={contact.name}
            className="contact__image"
          />
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
