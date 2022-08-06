import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";
import AuthService from "../services/authService";
import "./Form.css";

export const Form = () => {
  const [values, setValues] = useState({
    email: "eyis619@gmail.com",
    discordId: "490371137608482816",
  });

  const authService = new AuthService();
  const { setLogged } = useContext(UserContext);

  const handleChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  function submit(e) {
    e.preventDefault();
    authService.login(values).then((res) => {
      setLogged(true);
    });
  }

  return (
    <div className="container">
      <h1></h1>
      <form className="form" onSubmit={submit}>
        <div>
          <label>DiscordId</label>
          <input
            type="text"
            name="discordId"
            value={values.discordId || ""}
            onChange={handleChange}
            placeholder="Discord Id"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            placeholder="email"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
