"use client";
import { signOut } from 'next-auth/react'

function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
     className="bg-gradient-to-b from-[#FF6968] via-[#A334FA] to-[#0695FF] hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
        Sign Out
    </button>
  )
}

export default LogoutButton;