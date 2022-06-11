import appSettings from "../appSettings";

export async function getProducts() {
  const token =  localStorage.getItem("token");
  const req = await fetch(`${appSettings.api.urlBase}/products`, {
    method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
  });
  return req.json();
};
