import { getProviders } from 'next-auth/react'
import Image from 'next/image';
import SignInComponent from '../../../components/SignInComponent';

async function SignInPage() {
    const providers = await getProviders();

  return (
    <div className="grid justify-center items-center">
        <div>
            <Image
            className="mx-2 object-contain"
                src="/Messenger.png"
                alt="MessengerLogo"
                height={250}
                width={250}
                />
        </div>
        <SignInComponent providers={providers} />
    </div>
  )
}

export default SignInPage