import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Bell, ChevronDown, DiamondPercent, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menu } from "@/data/menu";
import ThemeUpdate from "./themeUpdate";

function Header() {
  const pathname = usePathname().split("/")[1];
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <div>
      <div className="md:hidden block">
        <header className="fixed top-0 left-0 w-full bg-card shadow-md z-50 p-4">
          <div className="mx-1">
            <div className="flex justify-between items-center">
              <div
                className="flex justify-center items-center cursor-pointer"
                onClick={() => setIsSidebar(!isSidebar)}
              >
                <Menu />
              </div>
              <div className="flex items-center justify-between gap-x-2 h-full">
                <div className="flex h-full justify-center items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Image
                        src="/images/user.svg"
                        alt="profile"
                        height={40}
                        width={40}
                        className="rounded h-[47px] w-[47px]"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Profile</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Setting</DropdownMenuItem>
                      <DropdownMenuItem>Status</DropdownMenuItem>
                      <DropdownMenuItem>Update Password</DropdownMenuItem>
                      <DropdownMenuItem className="flex justify-center items-center gap-x-2">
                        <ThemeUpdate />
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Menu list */}
        {isSidebar && (
          <div className="fixed top-0 left-0 h-screen w-screen bg-card z-50 p-4">
            <div className="container mx-auto">
              <div className="flex justify-between items-center w-full py-[20px]">
                <Link href="/" className="flex gap-x-[14px] ">
                  <div className="bg-primary flex justify-center items-center p-[12px] rounded-[8px]">
                    <DiamondPercent className="text-activeText h-6" />
                  </div>
                  <span className="self-center text-2xl font-semibold sm:text-2xl whitespace-nowrap">
                    DashFlow
                  </span>
                </Link>
                <div
                  className="cursor-pointer"
                  onClick={() => setIsSidebar(false)}
                >
                  <X />
                </div>
              </div>
              <ul className="space-y-2 font-medium">
                {menu?.map((o) => {
                  return (
                    <li key={o.title}>
                      <Link
                        href={o.url}
                        className={`flex items-center 2xl:px-6 lg:px-3 px-1 2xl:py-4 lg:py-2 py-1
                          group ${
                            pathname === o.pathname
                              ? "text-activeText rounded-lg bg-primary dark:hover:bg-gray-700"
                              : "text-text rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                      >
                        <o.icon
                          className={`${
                            pathname === o.pathname
                              ? "text-activeText"
                              : "text-text"
                          }, mr-2 h-4 w-4`}
                        />
                        <span className="2xl:ms-3 lg:ms-2 ms-1 capitalize xl:text-lg lg:text-base text-sm leading-[27px]">
                          {o.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
      {/*---------Desktop header---------------  */}
      <div className="md:block hidden">
        <nav className="xl:ml-[250px] ml-[200px] fixed top-0 z-50 xl:w-[calc(100%-250px)] w-[calc(100%-200px)] bg-card border-border">
          <div className="grid  grid-cols-2 2xl:py-[30px] py-[15px] 2xl:px-10 px-4 2xl:gap-x-2 gap-x-1 w-full">
            <div className="text-4xl leading-[50.4px] font-semibold flex items-center text-text capitalize">
              {pathname}
            </div>
            <div className="flex items-center justify-end 2xl:gap-x-[14px] gap-x-2">
              <div className="flex items-center justify-between 2xl:gap-x-[42px] gap-x-2">
                <div className="flex 2xl:gap-x-[14px] gap-x-2 pl-[10px] items-center justify-center">
                  <div className="flex 2xl:gap-x-[14px] gap-x-2">
                    <Image
                      src="/images/user.svg"
                      alt="profile"
                      height={30}
                      width={30}
                      className="rounded-[16px] h-[60px] w-[60px]"
                    />
                    <div className="flex flex-col justify-center">
                      <div>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <div className="flex 2xl:gap-x-[14px] gap-x-2">
                              <div className="text-base font-medium">Komal</div>
                              <ChevronDown />
                            </div>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>Profile</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="flex justify-center items-center gap-x-2">
                              <ThemeUpdate />
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="text-sm font-normal text-[#737791]">
                        Admin
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
