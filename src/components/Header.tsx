import Link from 'next/link';
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-white to-red-400 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3">
        <Link href="/" className="text-2xl font-extrabold group cursor-pointer">
          <span className="text-primary-gray">Kode</span>
          <span className="text-primary-red">konnect</span>
        </Link>
        <nav>
          <ul className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </ul>
        </nav>
      </div>
    </header>
  );
}
