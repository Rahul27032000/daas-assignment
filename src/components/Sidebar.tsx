import { useState } from "react";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div className="mx-2 border-r-4 border-gray-400 h-screen w-96 bg-gray-200 fixed top-0 left-0 h-full">
      <div className="mx-3 h-full my-10">
        <div className="relative">
          <input
            className="border border-gray-400 pl-10 pr-2 py-2 rounded-lg w-full"
            type="text"
            placeholder="Search"
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value);
              console.log(searchItem);
            }}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i
              className="fa-solid fa-magnifying-glass text-gray-400"
              style={{ zIndex: "10" }}
            ></i>
          </div>
        </div>

        <SidebarOption
          text="Dashboard"
          icon={<i className="fa-solid fa-chart-simple "></i>}
        />

        <SidebarOption
          text="Projects"
          icon={<i className="fa-regular fa-folder-closed"></i>}
          icon2={<i className="fa-solid fa-angle-up"></i>}
        />
        <SidebarOption
          text="Stock"
          icon={<i className="fa-regular fa-folder-closed"></i>}
          icon2={<i className="fa-solid fa-angle-up"></i>}
        />

        {/* <div>Overview</div>
        <div>Items</div>
        <div>Locations</div> */}
        <SidebarOption
          text="Clients"
          icon={<i className="fa-regular fa-folder-closed"></i>}
          icon2={<i className="fa-solid fa-angle-up"></i>}
        />

        <SidebarOption
          text="Purchasing"
          icon={<i className="fa-solid fa-cart-shopping"></i>}
          icon2={<i className="fa-solid fa-angle-up"></i>}
        />

        <SidebarOption
          text="Reporting"
          icon={<i className="fa-regular fa-clipboard"></i>}
        />
      </div>
    </div>
  );
};

export default Sidebar;
