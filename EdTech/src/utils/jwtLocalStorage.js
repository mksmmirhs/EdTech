function setJwt(token) {
  localStorage.setItem("token", token);
}

function getJwt() {
  return localStorage.getItem("token");
}

function removeJwt() {
  localStorage.removeItem("token");
}
export const jwtLocalStorage = { setJwt, getJwt, removeJwt };
