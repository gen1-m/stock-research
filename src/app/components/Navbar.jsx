'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function NavBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/">
          <p className="font-bold px-2 text-inherit">StockLib</p>
          <Image
                      className="h-8 w-auto bg-white rounded-md"
                      width={150}
                      height={150}
                      src="https://api.iconify.design/arcticons:stockswidget.svg"
                      alt="Your Company"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="/news">
            News
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/watchlist">
            Watchlist
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
