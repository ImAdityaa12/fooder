"use client";

import { handleSignUp } from "@/api/createUser";

const page = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <input type="text" placeholder="Enter Username" />
      <input type="text" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />
      {/* <button onClick={handleSignUp}>Sign Up</button> */}
    </div>
  );
};

export default page;
