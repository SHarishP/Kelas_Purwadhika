"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface IUsers {
  id: number;
  name: string;
  email: string;
  password: string;
}

export default function AboutUsView() {
  const [users, setUsers] = useState<IUsers[]>([]);

  return (
    <div>
      <p>About-Us Page</p>
      <Link href="/">Home</Link>
    </div>
  );
}
