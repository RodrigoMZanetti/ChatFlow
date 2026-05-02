import "./Header.css";

function Header({ user }) {
  return (
    <div className="header">
      <div className="header__container">
        <img src={user.avatar} alt={user.name} className="contact__image" />
        <h3 className="header__name">{user.name}</h3>
      </div>
    </div>
  );
}

export default Header;
