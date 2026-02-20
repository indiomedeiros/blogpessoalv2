import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";

function Theme() {
  return (
    <div className="flex justify-center  items-start pt-10 ">
      <form className="flex flex-col gap-4 w-xl border h-4/12  justify-center p-4 rounded-lg border-gray-300 bg-gray-50 ">
        <h2 className="text-3xl font-bold ">Temas</h2>

        <FormInput
          labelText="Crie temas"
          placeholder="Escreva a descrição do tema"
          type="text"
          id="name"
          name="nome"
        />
        <div className="self-center">
          <Button theme="form" text="Criar +" />
        </div>
      </form>
    </div>
  );
}

export default Theme;
