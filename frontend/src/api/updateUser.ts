type User = {
  username: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
};

export const updateUser = async (user: User) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}api/my/user/update`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      credentials: "include",
    }
  );
  const json = await response.json();
  return { data: json, status: response.status };
};
