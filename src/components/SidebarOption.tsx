const SidebarOption = ({
  icon,
  text,
  icon2,
}: {
  icon: any;
  text: string;
  icon2?: any;
}) => {
  return (
    <div>
      <div className="flex items-center hover:cursor-pointer p-5 my-2 text-lg font-bold">
        <div className="mx-5">{icon}</div>

        <h2>{text}</h2>
        <div className="mx-5">{icon2}</div>
      </div>
    </div>
  );
};

export default SidebarOption;
