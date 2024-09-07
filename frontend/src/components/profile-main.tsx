import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { updateUser } from "@/api/updateUser";
import { toast } from "sonner";

type User = {
  username: string;
  email: string;
};
const ProfileMain = ({ user }: { user: User | null }) => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
  });
  useEffect(() => {
    if (user) {
      setUserData({
        username: user.username,
        email: user.email,
        addressLine1: "",
        addressLine2: "",
      });
    }
  }, [user]);
  const handleUpdateUser = async () => {
    try {
      const response = await updateUser(userData);
      if (response.status === 201 || response.status === 200) {
        toast.success("Profile updated successfully");
        // router.push("/home");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="px-20 py-10 max-md:px-2 max-md:py-2 w-full">
      <h1 className="text-4xl font-semibold text-black">User Profile</h1>
      <p className="mt-2">View and change your profile information here</p>
      <form className="mt-10 flex flex-col gap-7">
        <div className="flex flex-col gap-1">
          <p>Email</p>
          <input
            type="text"
            className="h-12 border-2 border-black/40 rounded-lg text-lg px-2 cursor-not-allowed"
            value={user?.email}
            disabled
          />
        </div>
        <div className="flex flex-col gap-1">
          <p>Name</p>
          <input
            type="text"
            className="h-12 border-2 border-black/40 rounded-lg text-lg px-2"
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
            value={userData?.username}
          />
        </div>
        <div className="w-full flex items-center gap-4 max-md:flex-col">
          <div className="flex flex-col gap-1 w-1/2 max-md:w-full">
            <p>Address Line 1</p>
            <input
              type="text"
              className="h-12 border-2 border-black/40 rounded-lg text-lg px-2"
              onChange={(e) =>
                setUserData({ ...userData, addressLine1: e.target.value })
              }
              value={userData.addressLine1}
            />
          </div>
          <div className="flex flex-col gap-1 w-1/2 max-md:w-full">
            <p>Address Line 2</p>
            <input
              type="text"
              className="h-12 border-2 border-black/40 rounded-lg text-lg px-2"
              onChange={(e) =>
                setUserData({ ...userData, addressLine2: e.target.value })
              }
            />
          </div>
        </div>
        <Button
          className="w-24 ml-auto"
          onClick={(e) => {
            e.preventDefault();
            handleUpdateUser();
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ProfileMain;
