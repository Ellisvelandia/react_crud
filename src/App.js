import { useContext, useEffect } from "react";
import "./App.css";
import { Form } from "./components/Form";
import Home from "./components/Home";
import { UserContext } from "./contexts/userContext";
import DarkMode from "./components/DarkMode/DarkMode";

function App() {
  const { logged } = useContext(UserContext);

  useEffect(() => {
    // checkear si existe un token en el localStorage
    // si no existe, mostrar formulario de login
    // checkear si ese token es valido (endpoint check)
    // si es valido, setear logged a true
    // si no es valido, eliminar token de localStorage mostrar formulario de login
  });

  return (
    <div className="App">
      {logged ? <Home /> : <Form />}
      <DarkMode/>
    </div>
  );
}

export default App;
