import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const MobileNavbar = () => {
  // const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="justify-start">
          {true ? (
            <div className="flex flex-col">
              <div className="text-center text-xl font-semibold mt-4">
                {"Aditya"}
              </div>
              <div className="w-full h-[1px] bg-black/50 my-2" />
              <Link
                className=" text-start my-2 font-semibold hover:bg-black/10 px-3 py-3 rounded-lg"
                href={"/profile"}
              >
                {" "}
                Profile
              </Link>
              <Button
                className="bg-orange-500 font-semibold"
                // onClick={async () => await logout()}
              >
                {" "}
                Logout
              </Button>
            </div>
          ) : (
            <Button
              // onClick={async () => await loginWithRedirect()}
              className="bg-orange-500"
            >
              Login
            </Button>
          )}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
