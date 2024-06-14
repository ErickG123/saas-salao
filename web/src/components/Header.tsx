"use client";

import { jwtDecode } from "jwt-decode";
import Logged from "./Logged";
import LoggedOut from "./LoggedOut";

interface decodedToken {
  name: string;
  email: string;
}

export default function Header() {
  let name;
  let logged = false;

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token") ? localStorage.getItem("token") : false;

    if (token) {
      const decodedToken = jwtDecode(token) as decodedToken;
      name = decodedToken.name;
    }

    logged = localStorage.getItem("logged") ? true : false;
  }

  return (
    <header className="flex justify-between items-center p-4">
      <a href="/" className="text-2xl font-bold">SaaS</a>

      <div className="flex items-center">
        <a href="/salons/create-salon" className="font-semibold text-md mr-4">Para Estabelecimento</a>
        {
          logged ? <Logged /> : <LoggedOut />
        }
      </div>
    </header>
  );
}
