//REACT
import { useState } from "react";

//PAGES
import Login from "./pages/Login";
import Register from "./pages/Register";

//CSS
import "./App.css";

//PAGINAS
const pages = [{ name: "login" }, { name: "register" }];

function App() {
  const [page, setPage] = useState(pages[0].name);

  //FUNÇÃO PARA SEGUIR NA PAGINA DE REGISTRO
  const currentPageRegister = () => {
    setPage(pages[1].name);
  };

  //FUNÇÃO PARA SEGUIR NA PAGINA DE LOGIN
  const currentPageLogin = () => {
    setPage(pages[0].name);
  };

  return (
    <div>
      {/*VERIFICAÇÃO DE QUAL PAGINA O USUARIO ESTA */}
      {page === "login" && <Login currentPageRegister={currentPageRegister} />}
      {page === "register" && <Register currentPageLogin={currentPageLogin} />}
    </div>
  );
}

export default App;
