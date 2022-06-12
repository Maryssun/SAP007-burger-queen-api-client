import appSettings from "../appSettings";

export async function postOrders(orders) {
  const token =  localStorage.getItem("token");

  const req = await fetch(`${appSettings.api.urlBase}/orders`, {
    method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify(orders)
  });
  return req.json();
};
