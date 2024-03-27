import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div className="col-span-1 mx-2 border-r-4 border-gray-400 h-screen">
      <div className="mx-3 h-full my-10">
        <div>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            className="border border-gray-400 p-2 rounded-lg"
            type="text"
            placeholder="Search"
          />
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
