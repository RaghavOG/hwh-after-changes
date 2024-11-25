'use client';
import Link from "next/link";

export default function TailButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <div className="p-[3px] relative cursor-pointer transition duration-300 ease-in-out">
        {/* Gradient Background with Theme Colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#DD7CB2] to-[#3FBFBD] rounded-lg" />
        <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
          {children}
        </div>
      </div>
    </Link>
  );
}
