import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
function Footer() {
  const data = new Date().getFullYear();
  return (
    <footer className="w-screen bg-orange-700 text-white opacity-80 h-28 bottom-0 text-center flex flex-col justify-center ">
      <p className=" font-bold ">Índio Medeiros | Copyright {data}</p>

      <p>Me encontre nas redes sociais</p>
      <div className="flex justify-center gap-4">
        <a href="https://www.linkedin.com/in/indio-medeiros/" target="_blank">
          <LinkedinLogoIcon size={32} weight="bold" />
        </a>
        <a href="https://github.com/indiomedeiros" target="_blank">
          <GithubLogoIcon size={32} weight="bold" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
