"use client";
import ProfileMain from "@/components/profile-main";
import { useUserStore } from "@/lib/store/userStore";

const Profile = () => {
  const { user } = useUserStore();
  return (
    <div className="w-full min-h-[calc(100vh-10rem)] px-5">
      <ProfileMain user={user} />
    </div>
  );
};
export default Profile;
