import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

function Main() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
}

export default Main;
