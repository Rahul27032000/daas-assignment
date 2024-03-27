const Header = () => {
  return (
    <div className="flex justify-between mx-10">
      <div className="flex justify-between">
        <div className="relative">
          <input
            className="border border-gray-400 pl-10 pr-2 py-3  rounded-lg w-full"
            type="text"
            placeholder="Search"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i
              className="fa-solid fa-magnifying-glass text-gray-400"
              style={{ zIndex: "10" }}
            ></i>
          </div>
        </div>
        <button className="px-5 mx-7 py-2 bg-slate-100 rounded-lg border border-gray-400">
          Filters <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      <div className="flex justify-between w-72">
        <button className="py-1 px-1  rounded-lg border bg-sky-500 border-gray-400">
          <i className="fa-solid fa-plus"></i> Add Item
        </button>
        <button className="px-3 py-2 bg-slate-100 rounded-lg border border-gray-400">
          Item Actions <i className="fa-solid fa-chevron-down"></i>
        </button>
        <button className="px-3 py-2 bg-slate-100 rounded-lg border border-gray-400">
          <i className="fa-solid fa-table-cells"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
