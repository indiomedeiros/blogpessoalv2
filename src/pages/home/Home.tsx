import Button from "../../components/ui/Button";
import SearchInput from "../../components/ui/SearchInput";

function Home() {
  return (
    <main className="">
      <section className="flex-col flex justify-start  items-center text-center pt-10 gap-5">
        <h1 className="text-7xl">Blog Pessoal</h1>
        <p className="text-zinc-400">
          Compartilhe suas ideias, histórias e conhecimentos com o mundo.
        </p>
        <div className="flex justify-center gap-4">
          <Button text={"Entrar"} path={""} theme="primary" />
          <Button text={"Cadastrar"} path={""} theme="secondary" />
        </div>
        <div className=" w-1/2 mt-8">
          <SearchInput />
        </div>
      </section>

      <section></section>
    </main>
  );
}
export default Home;
