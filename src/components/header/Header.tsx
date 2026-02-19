import Navbar from "../navbar/Navbar";

function Header() {
  return (
    <header className="border-b  border-gray-200 flex w-full justify-evenly bg-white text-md h-16 items-center">
      <h1 className="  font-bold text-2xl">Blog pessoal</h1>
      <Navbar />
    </header>
  );
}

export default Header;
