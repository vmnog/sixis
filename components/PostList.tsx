import Link from 'next/link';
import Post from './Post';

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

const PostList: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center px-8 h-screen w-full">
      <h1 className="text-xl font-semibold text-gray-800 mb-7 ">
        Últimas publicações
      </h1>

      {posts.map((post) => (
        <Link href={`posts/${post.id}`} key={post.id}>
          <Post post={post} />
        </Link>
      ))}
    </div>
  );
};

export default PostList;
