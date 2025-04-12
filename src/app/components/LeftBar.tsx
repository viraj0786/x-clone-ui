import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

function LeftBar() {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* LOGO MENU BUTTON */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start   ">
        {/* LOGO */}
        <Link href="/" className="p-2 rounded-full hover-bg-[#181818]">
          <Image src="icons/logo.svg" alt="logo" width={24} height={24} />
        </Link>
        {/* MENU LIST */}
        <div className="flex flex-1 flex-col gap-4 justify-end items-start ">
          {menuList?.map((ele) => {
            return (
              <Link
                href={ele.link}
                key={ele.id}
                className="flex p-2 rounded-full  hover-bg-[#181818] items-center gap-4"
              >
                <Image
                  src={`icons/${ele.icon}`}
                  alt="logo"
                  width={24}
                  height={24}
                ></Image>
                <span className="hidden xxl:inline">{ele.name}</span>
              </Link>
            );
          })}
        </div>
        {/* BUTTON */}
        <Link
          href="/"
          className=" bg-white text-black rounded-full font-bold py-2  w-12 h-12 flex items-center justify-center xxl:hidden"
        >
          <Image
            src="icons/post.svg"
            alt="new post"
            width={24}
            height={24}
          ></Image>
        </Link>
        <Link
          href="/"
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          post
        </Link>
      </div>
      {/* USER */}
      <div>
        <div className="flex items-center justify-center xxl:justify-between pt-8 ">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 relative rounded-full overflow-hidden">
              <Image
                src="/general/avatar.png"
                alt="lama dev"
                width={100}
                height={100}
              />
            </div>
            <div className="hidden xxl:flex flex-col">
              <span className="font-bold">Lama Dev</span>
              <span className="text-sm text-textGray">@lamaWebDev</span>
            </div>
          </div>
          <div className="hidden xxl:block cursor-pointer font-bold">...</div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
