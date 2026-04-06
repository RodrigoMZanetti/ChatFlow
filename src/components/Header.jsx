import "./Header.css";

function Header({ user }) {
  return (
    <div className="header">
      {user.map((item) => (
        <div key={item.id} className="header__container">
          <img src={item.avatar} alt={item.name} className="contact__image" />
          <h3 className="header__name">{item.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Header;
