import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const posts = [
  {
    id: '1',
    title: 'título bem legal',
    date: '23/12/2020',
    content: 'Um conteúdo muito legal e bacana para entreter a mulekada',
    banner:
      'https://images.unsplash.com/photo-1608731294828-d4023daac5ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
  },
  {
    id: '2',
    title: 'título bem bacana',
    date: '23/12/2020',
    content: 'Um conteúdo muito legal e bacana para entreter a mulekada',
    banner:
      'https://images.unsplash.com/photo-1608731294828-d4023daac5ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
  },
  {
    id: '3',
    title: 'título bem daora',
    date: '23/12/2020',
    content: 'Um conteúdo muito legal e bacana para entreter a mulekada',
    banner:
      'https://images.unsplash.com/photo-1608731294828-d4023daac5ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
  },
  {
    id: '4',
    title: 'título bem massa',
    date: '23/12/2020',
    content: 'Um conteúdo muito legal e bacana para entreter a mulekada',
    banner:
      'https://images.unsplash.com/photo-1608731294828-d4023daac5ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
  },
];

const Post: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log();

  const post = posts.find((post) => post.id === id);

  return (
    <div className="flex flex-col justify-center items-center px-8 h-screen w-full">
      <Link href="/posts">
        <a>{'<-'} Voltar</a>
      </Link>

      <span>{post.title}</span>
      <span>{post.date}</span>
      <span>{post.content}</span>
      <Image src={post.banner} alt={post.title} width={500} height={500} />
    </div>
  );
};

export default Post;
