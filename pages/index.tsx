import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h1 className="flex items-center">Últimas publicações</h1>
      <Link href="/signin">
        <strong className="cursor-pointer">Entrar</strong>
      </Link>
    </div>
  );
}
