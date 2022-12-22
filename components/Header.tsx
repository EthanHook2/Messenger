import Image from 'next/image'
import Link from 'next/link'
import LogoutButton from './LogoutButton';
import { unstable_getServerSession } from "next-auth/next"


export default async function Header() {
    const session = await unstable_getServerSession();

    if (session) 
    return (
        <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-md mb-12">
            <div className="flex space-x-2">
            <Image
                    className="rounded-full mx-2 object-contain"
                    src={session.user?.image!}
                    alt="ProfilePicture"
                    height={10}
                    width={50}
                    />

                    <div>
                        <p className="text-[#0695FF]">Logged in as:</p>
                        <p className="font-bold text-lg">{session.user?.name}</p>
                    </div>
            </div>

            <LogoutButton />
        </header>
    );

  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-md mb-12">
        <div className="flex flex-col space-y-5 items-center">
            <div className="flex space-x-2 items-center">
                <Image
                    src="/Messenger.png"
                    alt="MessengerLogo"
                    height={10}
                    width={50}
                    />


                    <p className="text-[#0695FF] ">Welcome to Messenger</p>
            </div>

            <Link href="/auth/signin" className="bg-gradient-to-b from-[#FF6968] via-[#A334FA] to-[#0695FF] hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">Sign In</Link>
        </div>
    </header>
  )
}

