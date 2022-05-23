import appSettings from "../appSettings";

export async function createUser (name, email, password, role) {
  return fetch(appSettings, {
    method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: name,
        email: email,
        password: password, 
        role: role,
      })
  });
};
