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

export async function getOrders() {
  const token =  localStorage.getItem("token");

  const req = await fetch(`${appSettings.api.urlBase}/orders`, {
    method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
  });
  return req.json();
};

export async function putOrders(params) {
  const token =  localStorage.getItem("token");

  const req = await fetch(`${appSettings.api.urlBase}/orders/${params.orderId}`, {
    method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({status: params.status})
  });
  return req.json();
};
