import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";

function Signup() {
  return (
    <div className="flex justify-center  items-center">
      <form className="grid gap-4 w-95 border h-auto  justify-center p-4 rounded-lg border-gray-300 bg-gray-50 ">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-3xl font-bold ">Cadastrar</h2>
          <p className=" text-zinc-400 text-sm">
            Crie sua conta no Blog Pessoal
          </p>
        </div>

        <div className="flex flex-col w-80 active:outline-none gap-4">
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
          <FormInput
            labelText="URL da foto(Opcional)"
            placeholder="https://..."
            type="text"
            id="photo"
            name="photo"
          />
          <FormInput
            labelText="Senha"
            placeholder="*****"
            type="text"
            id="password"
            name="password"
          />
          <FormInput
            labelText="Confirmar Senha"
            placeholder="Mínimo de 8 caracteres"
            type="text"
            id="password-confirm"
            name="password-confirm"
          />
        </div>
        <div>
          <Button theme="form" text="Criar conta" />

          <p className="text-zinc-400 text-sm text-center">
            {" "}
            Já tem uma conta?{" "}
            <Link to={"/login"}>
              <strong className="text-amber-600">Entrar</strong>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
