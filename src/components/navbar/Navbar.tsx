import Button from "../ui/Button";

function Navbar() {
  return (
    <nav>
      <ol className="flex justify-around items-center text-sm gap-2 ">
        <li>
          <Button text={"Início"} path="" theme="navigation" />
        </li>
        <li>
          <Button text={"Entrar"} path="/login" theme="navigation" />
        </li>
        <li>
          <Button text={"Temas"} path="/theme" theme="navigation" />
        </li>
        <li>
          <Button text={"Cadastrar"} path="/signup" theme="primary" />
        </li>
      </ol>
    </nav>
  );
}

export default Navbar;
