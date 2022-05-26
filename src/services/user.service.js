import appSettings from "../appSettings";

export async function createUser (name, email, password, role) {
  const req = await fetch(`${appSettings.api.urlBase}/users`, {
    method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: name,
        email: email,
        password: password, 
        role: role,
        restaurant: 'Burguer Queen'
      })
  });
  return req.json();
};
