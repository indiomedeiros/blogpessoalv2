function Navbar() {
  return (
    <nav>
      <ol className="flex justify-around items-center  ">
        <li className=" hover:bg-green-800 hover:opacity-60 hover:text-white rounded-xl  text-center px-3 py-2 ">
          Início
        </li>
        <li className=" hover:bg-green-800 hover:opacity-60 hover:text-white rounded-xl  text-center px-3 py-2">
          Entrar
        </li>

        <li className=" hover:bg-green-800 hover:opacity-60 hover:text-white rounded-xl  text-center px-3 py-2">
          Temas
        </li>

        <li className=" hover:bg-green-800 hover:opacity-60 hover:text-white rounded-xl  text-center px-3 py-2">
          Nova Postagem
        </li>

        <li className=" bg-orange-700 text-white rounded-xl  text-center px-3 py-2 opacity-80 ">
          Cadastrar
        </li>
      </ol>
    </nav>
  );
}

export default Navbar;
