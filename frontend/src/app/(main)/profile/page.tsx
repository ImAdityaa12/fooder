"use client";
import { getUserDetails } from "@/api/getUserDetails";
import { useEffect } from "react";
import { getCookie } from "@/lib/getCookie";
import ProfileMain from "@/components/profile-main";
import { useUserStore } from "@/lib/store/userStore";

const Profile = () => {
  const { user, setUser } = useUserStore();
  const getUserProfile = async () => {
    try {
      const cookie = getCookie("token");
      if (!cookie) {
      }
      if (typeof cookie === "string") {
        console.log(cookie);
        const response = await getUserDetails(cookie);
        if (response) {
          setUser(response.data.user);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <ProfileMain user={user} />
    </div>
  );
};
export default Profile;
