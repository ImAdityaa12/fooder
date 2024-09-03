type User = {
  username: string;
  email: string;
  password: string;
};
const ProfileMain = ({ user }: { user: User | null }) => {
  return (
    <div>
      <h1>{user?.username}</h1>
      <h1>{user?.email}</h1>
      <h1>{user?.password}</h1>
    </div>
  );
};

export default ProfileMain;
