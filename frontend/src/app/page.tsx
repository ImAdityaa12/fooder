"use client";
import { handleSignUp } from "@/api/createUser";
import MobileNavbar from "@/components/mobile-navbar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "@/lib/getCookie";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const cookie = getCookie("token");
    if (cookie) {
      window.location.href = "/home";
    }
  }, []);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const createUser = async () => {
    try {
      const response = await handleSignUp(userData);
      if (response.status === 201 || response.status === 200) {
        toast.success(response.data.message);
        router.push("/home");
      }
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };
  return (
    <div className="w-full h-full">
      <div className="w-full h-[10vh] bg-muted flex items-center">
        <div className="container mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-xl text-orange-500 font-semibold">
            Fooder.com
          </div>
          <Dialog>
            <DialogTrigger className="text-xl bg-orange-500 px-5 py-2 hover:bg-orange-400 rounded-xl text-white transition-all">
              Login
            </DialogTrigger>
            <DialogContent>
              <h1 className="text-xl font-bold text-center">Sign Up</h1>
              <form className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="py-2 px-3 rounded-lg border border-orange-400 outline-none"
                  onChange={(e) => {
                    setUserData({ ...userData, username: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="py-2 px-3 rounded-lg border border-orange-400 outline-none"
                  onChange={(e) => {
                    setUserData({ ...userData, email: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="Enter Password"
                  className="py-2 px-3 rounded-lg border border-orange-400 outline-none"
                  onChange={(e) => {
                    setUserData({ ...userData, password: e.target.value });
                  }}
                />
                <Button
                  className="bg-orange-500 rounded-xl min-h-8 px-3 py-4 mt-1 w-fit ml-auto transition-all hover:rounded-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    createUser();
                  }}
                >
                  Sign Up
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <div className="md:hidden max-md:flex">
            <MobileNavbar />
          </div>
        </div>
      </div>
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <div className="relative h-[90vh] w-full max-md:h-[70vh] pointer-events-none -z-10">
          <Image
            src={"/hero.png"}
            fill
            style={{ objectFit: "cover" }}
            alt="hero image"
          />
        </div>
        <div className="relative bottom-10 w-[70%] h-[12rem] shadow-md shadow-[rgba(0,0,0,0.1)] rounded-xl bg-white flex flex-col items-center justify-center px-7 max-md:w-full">
          <h1 className="text-orange-500 text-3xl font-bold">
            Tuck into a takeway today
          </h1>
          <p>Food in just one click away!</p>
          <div className="w-full rounded-full flex items-center justify-center border border-orange-500 h-12 p-3 mt-5">
            <Search className="text-orange-500 p-[2px]" />
            <input className="bg-white flex-1 h-10 outline-none focus:outline-none focus:border-none ml-2" />
            <Button className="bg-orange-500 rounded-full h-8 px-3 py-2">
              Search
            </Button>
          </div>
        </div>
        <div className="w-[70%] h-full flex justify-start px-4">
          <div className="relative w-[50%] h-[20rem]">
            <Image
              src={"/landing-image.png"}
              fill
              style={{ objectFit: "contain" }}
              alt="hero image"
              className="pointer-events-none"
            />
          </div>
          <div className="relative w-[50%] flex flex-col items-center justify-center h-[20rem] gap-4">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold text-black">
                Order Takeaway Even Faster!
              </h1>
              <p>Faster than you think and more convenient than you imagine.</p>
            </div>
            <div className="relative w-full h-[3rem]">
              <Image
                src={"/playstore-app.png"}
                fill
                style={{ objectFit: "contain" }}
                alt="hero image"
                className="pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
