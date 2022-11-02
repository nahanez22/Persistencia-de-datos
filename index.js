const nombre = "Elisa";
const apellido = "Añez";

const datos = {
  nombre,
  apellido,
};

sessionStorage.setItem("datos", JSON.stringify(datos));

localStorage.setItem("datos", JSON.stringify(datos));

const caducidad = new Date();
document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(
  caducidad.getTime() + 2 * 60000
)}`;
