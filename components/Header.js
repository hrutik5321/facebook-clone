import HeaderSearchBox from "./HeaderItems/HeaderSearchBox";
import HeaderCenter from "./HeaderItems/HeaderCenter";
import HeaderRight from "./HeaderItems/HeaderRight";
import LogoImage from "./HeaderItems/LogoImage";

function Header(props) {
  return (
    <>
      <header className="bg-white px-4 flex z-10 shadow-md items-center fixed top-0 left-0 w-full justify-between">
        <div className="flex items-center">
          <LogoImage />
          <HeaderSearchBox />
        </div>

        <div className="header__center h-auto">
          <HeaderCenter />
        </div>

        <div className="header__right">
          <HeaderRight />
        </div>
      </header>
      {props.children}
    </>
  );
}

export default Header;
