import { useState } from "react";

const SidebarOption = ({
  icon,
  text,
  icon2,
}: {
  icon: any;
  text: string;
  icon2?: any;
}) => {
  const [showItem, setShowItem] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  return (
    <div>
      <div className="flex justify-between w-64  hover:cursor-pointer p-5 mt-2 text-lg font-bold">
        <div className="flex justify-center">
          <div className="mx-5">{icon}</div>

          <h2>{text}</h2>
        </div>
        <div className="mx-5">
          {icon2 && (
            <button onClick={() => setShowItem(!showItem)}>
              {showItem ? (
                <i className="fa-solid fa-angle-down"></i>
              ) : (
                <i className="fa-solid fa-chevron-up"></i>
              )}
            </button>
          )}
        </div>
      </div>
      {showItem && (
        <div className="text-lg font-bold">
          <h1 className="ml-12 mt-2 p-5 hover:bg-slate-300">one</h1>
          <h1 className="ml-12 mt-2 p-5 hover:bg-slate-300">two</h1>
        </div>
      )}
    </div>
  );
};

export default SidebarOption;
