import Link from 'next/link';

const SignIn: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center px-8 h-screen w-full">
      <Link href="/posts">
        <a>login admin</a>
      </Link>
      <Link href="/">
        <a>login user</a>
      </Link>
    </div>
  );
};

export default SignIn;
