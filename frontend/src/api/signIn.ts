export const signInUser = async (email: string, password: string) => {
  const response = await fetch(`http://localhost:7000/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });
  const json = await response.json();
  return { data: json, status: response.status };
};
