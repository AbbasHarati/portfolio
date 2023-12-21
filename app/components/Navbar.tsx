import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <div className=" text-white fixed top-0 left-0 right-0 z-10
     bg-[#121212] bg-opacity-90">
      <div className="flex flex-row justify-between p-2 m-2">
        <div className="">
          <NavLinks />
        </div>
        <div className=" m-2">
          <Logo />
        </div>
      </div>
    </div>
  );
}
