import { useContext} from "react";
import { Form } from "./components/Form";
import Home from "./components/Home";
import { UserContext } from "./contexts/userContext";
import DarkMode from "./components/DarkMode/DarkMode";
import Title from "./components/Title";

function App() {
  const { logged } = useContext(UserContext);

 

  return (
    <div className="App">      
      <DarkMode />
      <Title />
      {logged ? <Home /> : <Form />}
    </div>
  );
}

export default App;
