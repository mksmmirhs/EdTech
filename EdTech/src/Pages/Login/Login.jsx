import { useNavigate } from "react-router-dom";
import getAxios from "../../utils/getAxios";
import { jwtLocalStorage } from "../../utils/jwtLocalStorage";
import SweetAlert from "../../utils/SweetAlert";
import LoginUi from "./LoginUi";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";

function Login() {
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { setLoading } = useContext(AuthContext);

  // fetch data function
  const fetchData = async (username, password) => {
    setLoading(true);

    try {
      await getAxios
        .post("login", {
          username,
          password,
        })
        .then((res) => {
          // set jwt token to local storage
          jwtLocalStorage.setJwt(res.data);
          navigate(from, { replace: true });
        })
        .catch((err) => {
          SweetAlert("Invalid username or password", "error");
        });
    } finally {
      setLoading(false);
    }
  };

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
    fetchData(username, password);
  };

  return <LoginUi handleSubmit={handleSubmit}></LoginUi>;
}

export default Login;
