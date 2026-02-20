import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";

function Login() {
  return (
    <div className="flex justify-center  items-center">
      <form className="grid gap-4 w-98 border h-7/12  justify-center p-4 rounded-lg border-gray-300 bg-gray-50 ">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-3xl font-bold ">Entrar</h2>
          <p className=" text-zinc-400 text-sm">
            Acesse a sua conta no Blog Pessoal
          </p>
        </div>

        <div className="flex flex-col h-30 w-80 active:outline-none gap-4">
          <FormInput
            labelText="Nome"
            placeholder="Seu nome"
            type="text"
            id="name"
            name="nome"
          />
          <FormInput
            labelText="E-mail"
            placeholder="seu@email.com"
            type="text"
            id="user"
            name="user"
          />
        </div>
        <div>
          <Button theme="form" text="Entre" />

          <p className="text-zinc-400 text-sm text-center">
            {" "}
            Não tem uma conta?{" "}
            <Link to={"/signup"}>
              <strong className="text-amber-600">Cadastre-se</strong>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
