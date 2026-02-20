import { Link } from "react-router-dom";

function Button({
  text,
  path,
  theme,
}: {
  text: string;
  path?: string;
  theme: string;
}) {
  return (
    <>
      {theme !== "form" && (
        <Link to={path || ""}>
          {theme == "primary" && (
            <button className=" bg-orange-700 hover:bg-orange-900 text-white rounded-xl  text-center px-3 py-3 opacity-80 w-28">
              {text}
            </button>
          )}

          {theme == "secondary" && (
            <button className=" hover:bg-green-800 hover:opacity-60 hover:text-white  border-zinc-400 border rounded-xl  text-center px-3 py-3 opacity-80 w-28 ">
              {text}
            </button>
          )}

          {theme == "navigation" && (
            <button className=" hover:bg-green-800 hover:opacity-60 hover:text-white rounded-xl  text-center px-3 py-2 opacity-80  ">
              {text}
            </button>
          )}
        </Link>
      )}

      {theme == "form" && (
        <button className=" bg-orange-700 hover:bg-orange-900 text-white rounded-xl  text-center px-3 py-2 opacity-80 w-80 h-10">
          {text}
        </button>
      )}
    </>
  );
}

export default Button;
