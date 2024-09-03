"use client";
const page = () => {
  const handleSignUp = async () => {
    try {
      const response = await fetch(`http://localhost:7000/api/my/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "test1",
          email: "test",
          password: "test",
        }),
        credentials: "include",
      });
      window.location.href = "/home";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <input type="text" placeholder="Enter Username" />
      <input type="text" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default page;
