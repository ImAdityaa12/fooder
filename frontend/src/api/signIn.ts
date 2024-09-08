export const signInUser = async (email: string, password: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    }
  );
  const json = await response.json();
  return { data: json, status: response.status };
};
