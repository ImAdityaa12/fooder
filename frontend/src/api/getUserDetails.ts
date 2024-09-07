export const getUserDetails = async (token: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}details/user`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify({ token: token }),
      credentials: "include",
    }
  );
  const json = await response.json();
  return { data: json, status: response.status };
};
