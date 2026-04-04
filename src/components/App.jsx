import "./App.css";
import Header from "./Header";
import Main from "./ChatArea";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <div className="layout">
        <Header />
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default App;
