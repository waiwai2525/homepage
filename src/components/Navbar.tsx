import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about/">
        <a>About</a>
      </Link>
      <Link href="/about/groups/">
        <a>About-Groups</a>
      </Link>
    </div>
  );
};

export default Navbar;
