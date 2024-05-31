import { useNavigate } from "react-router-dom";
import getAxios from "../../utils/getAxios";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { jwtLocalStorage } from "../../utils/jwtLocalStorage";
import SweetAlert from "../../utils/SweetAlert";
import RegisterUi from "./RegisterUi";

function Register() {
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { setLoading, setUser } = useContext(AuthContext);

  // fetch data function
  const fetchData = async (username, password, role) => {
    setLoading(true);

    try {
      await getAxios
        .post("signup", {
          username,
          password,
          role,
        })
        .then((res) => {
          // set jwt token to local storage
          jwtLocalStorage.setJwt(res.data);
          setUser({
            username,
            password,
            role,
          });
          navigate(from, { replace: true });
        })
        .catch((err) => {
          SweetAlert("Duplicate Username", "error");
        });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);

    const username = data.get("username");
    const password = data.get("password");
    const role = data.get("radio-buttons-group");
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
    fetchData(username, password, role);
  };
  return <RegisterUi handleSubmit={handleSubmit}></RegisterUi>;
}

export default Register;
