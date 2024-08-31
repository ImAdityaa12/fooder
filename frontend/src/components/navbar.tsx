import Link from "next/link";
import { Button } from "./ui/button";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] bg-muted flex items-center">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-xl text-orange-500 font-semibold">Fooder.com</div>
        <Link href={"/sign-in"} className="text-xlfont-semibold  max-md:hidden">
          <Button className="bg-orange-500">Login</Button>
        </Link>
        <div className="md:hidden max-md:flex">
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
