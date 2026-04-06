import "./App.css";
import Header from "./Header";
import Main from "./ChatArea";
import Sidebar from "./Sidebar";
//images
import ManOne from "../assets/images/Man-one.jpg";
import ManTwo from "../assets/images/Man-two.jpg";
import WomanOne from "../assets/images/Woman-one.jpg";
import WomanTwo from "../assets/images/Woman-two.jpg";
import WomanThree from "../assets/images/Woman-three.jpg";
import User from "../assets/images/user.jpg";

function App() {
  const contacts = [
    {
      id: 1,
      avatar: ManOne,
      name: "Rodrigo",
      messages: [],
    },
    {
      id: 2,
      avatar: WomanOne,
      name: "Larissa",
      messages: [],
    },
    {
      id: 3,
      avatar: ManTwo,
      name: "Alexandro",
      messages: [],
    },
    {
      id: 4,
      avatar: WomanTwo,
      name: "Sarah",
      messages: [],
    },
    {
      id: 5,
      avatar: WomanThree,
      name: "Lilian",
      messages: [],
    },
  ];

  const user = [
    {
      avatar: User,
      name: "You",
    },
  ];

  return (
    <>
      <div className="layout">
        <Header user={user} />
        <Sidebar contacts={contacts} />
        <Main />
      </div>
    </>
  );
}

export default App;
