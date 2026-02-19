import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
function Footer() {
  const data = new Date().getFullYear();
  return (
    <footer className="w-screen bg-orange-700 text-white opacity-80 h-28 bottom-0 text-center flex flex-col justify-center ">
      <p className=" font-bold ">Índio Medeiros | Copyright {data}</p>

      <p>Me encontre nas redes sociais</p>
      <div className="flex justify-center gap-4">
        <LinkedinLogoIcon size={32} weight="bold" />
        <GithubLogoIcon size={32} weight="bold" />
      </div>
    </footer>
  );
}

export default Footer;
