import Search from "../Search/Search";

const Header = () => {
  return (
    <div className="h-15 bg-white border-b border-b-gray-100">
      <div className="flex flex-row justify-between pt-3.25 pr-3.5 pb-3.25 pl-14">
        <Search />
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer">
            <img
              className="w-4 h-4"
              src="/assets/icons/header/notification.svg"
              alt="Notifications"
            />
            <div className="absolute -top-0.5 right-0 w-1.75 h-1.75 rounded-full bg-accent-red" />
          </div>
          <div className="w-32 h-8 rounded-30 bg-gray-200 flex items-center gap-1 pl-1 py-2.5 pr-2.5 cursor-pointer">
            <img
              className="w-6 h-6 rounded-full"
              src="/assets/images/common/profile-pic.svg"
              alt="Profile pic"
            />
            <span className="font-medium text-xs leading-4">Muhammad</span>
            <img
              className="w-3 h-3"
              src="/assets/icons/header/caret-down.svg"
              alt="Down caret"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
