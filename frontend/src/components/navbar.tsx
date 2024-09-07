"use client";
import Link from "next/link";
import MobileNavbar from "./mobile-navbar";
import { User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { getCookie } from "@/lib/getCookie";
import { getUserDetails } from "@/api/getUserDetails";
import { useCallback, useEffect } from "react";
import { useUserStore } from "@/lib/store/userStore";

const Navbar = () => {
  const { user, setUser } = useUserStore();
  const getUserProfile = useCallback(async () => {
    try {
      const cookie = getCookie("token");
      if (!cookie) return;
      if (typeof cookie === "string") {
        const response = await getUserDetails(cookie);
        if (response) {
          setUser(response.data.user);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [setUser]);
  useEffect(() => {
    getUserProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const logout = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/logout`
      );
      if (response.ok) {
        // clear token cookie
        document.cookie =
          "token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT";
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-[5rem] bg-muted flex items-center">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-xl text-orange-500 font-semibold">Fooder.com</div>

        <DropdownMenu>
          <DropdownMenuTrigger className="text-xl text-orange-500 flex items-center gap-2 max-md:hidden">
            <User className="text-orange-500" />
            {user?.username}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <DropdownMenuItem>
              <Link href="/profile" className="w-full">
                Profile({user?.email})
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={logout}>Log Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="md:hidden max-md:flex">
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
