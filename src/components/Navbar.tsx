"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/navbar-menu';
import { cn } from "@/lib/utils";
import Link from "next/link";
const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-[1.5rem]",
          className
        )}
      >
        <Menu setActive={setActive} >
           <HoveredLink href={"/"} >
               Home
            </HoveredLink>

            <MenuItem setActive={setActive} active={active} item="Our Course" >
                <div className="flex flex-col space-y-4 text-[1.2rem]">
                    <HoveredLink href={"/all-course"} >All Course</HoveredLink>
                    <HoveredLink href={"/basic-course"} >Basic Music</HoveredLink>
                    <HoveredLink href={"/hiphop-course"} >Hip-Hop</HoveredLink>
                    <HoveredLink href={"/music-production-course"} >Music Production</HoveredLink>
                </div>
            </MenuItem>

            <HoveredLink href={"/contact"} >
               Contact Us
            </HoveredLink>
        </Menu>
      </div>
    </>
  );
};

export default Navbar;
