"use client";

import { getProviders } from 'next-auth/react'
import {signIn} from 'next-auth/react';

type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>;
}

function SignInComponent({providers}: Props) {
    
  return (
    <div className="flex justify-center">
        {Object.values(providers!).map((provider) => (
            <div key={provider.name}>
                <button className="bg-gradient-to-b from-[#FF6968] via-[#A334FA] to-[#0695FF] hover:bg-blue-300 text-white font-bold py-2 px-4 rounded mt-24 text-center" onClick={() => signIn(provider.id, {
                    callbackUrl: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
                })}>
                    Sign in with {provider.name}
                </button>
            </div>
       ) )}
    </div>
  )
}

export default SignInComponent