import Link from 'next/link';

const Publish: React.FC = () => {
  return (
    <div className="flex justify-center items-center px-8 h-screen w-full">
      <Link href="/posts">
        <a>{'<-'} Voltar</a>
      </Link>
      Publish
    </div>
  );
};

export default Publish;
