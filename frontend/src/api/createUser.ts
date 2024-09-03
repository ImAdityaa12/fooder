type User = {
  username: string;
  email: string;
  password: string;
};

export const handleSignUp = async (user: User) => {
  const response = await fetch(`http://localhost:7000/api/my/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
    credentials: "include",
  });
  const json = await response.json();
  return { data: json, status: response.status };
};
