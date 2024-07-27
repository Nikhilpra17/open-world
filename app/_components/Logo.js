import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 pl-5 pr-6 z-10">
      <Image
        src="/logo1.png"
        height="120"
        width="120"
        alt="The Wild Oasis logo"
      />
      <span className="text-xl font-semibold text-primary-100"> </span>
    </Link>
  );
}

export default Logo;
