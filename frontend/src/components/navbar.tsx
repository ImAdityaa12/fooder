"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import MobileNavbar from "./mobile-navbar";
import { User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      const response = await fetch(`http://localhost:7000/logout`);
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
    <div className="w-full h-[10vh] bg-muted flex items-center">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-xl text-orange-500 font-semibold">Fooder.com</div>
        {true ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="text-xl text-orange-500 flex items-center gap-2 max-md:hidden">
              <User className="text-orange-500" />
              {"Aditya"}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
              <DropdownMenuItem>
                <Link href="/profile" className="w-full">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            className="bg-orange-500 text-xl font-semibold max-md:hidden"
            onClick={async () => {}}
          >
            Login
          </Button>
        )}

        <div className="md:hidden max-md:flex">
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
