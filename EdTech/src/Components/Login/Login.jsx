import useAxios from "../../hooks/useAxios";
import SweetAlert from "../../utils/SweetAlert";
import LoginUi from "./LoginUi";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const username = data.get("username");
    const password = data.get("password");
    // show message if username is not provided
    if (!username) {
      SweetAlert("Username missing", "error");
      return;
    }
    // show message if password is not provided
    if (!password) {
      SweetAlert("Password is missing", "error");
      return;
    }
    // use axios to load data and auth
    useAxios
      .post("login", {
        username,
        password,
      })
      .then((res) => console.log(res));
  };

  return <LoginUi handleSubmit={handleSubmit}></LoginUi>;
}

export default Login;
