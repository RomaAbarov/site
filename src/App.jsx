import "./styles/main.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
