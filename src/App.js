import { Outlet } from "react-router-dom";
import "./App.css";
import { PromoSection } from "./Component/Dashboard/Promotion";
import { Header } from "./Component/Header/Header";
import { Sidebar } from "./Component/SideBar/SideBar";
import { ProductSection } from "./Pages/Dashboard/Production";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 overflow-y-auto bg-[#EFEFEF] px-8 pb-8">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
