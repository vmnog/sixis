import Link from 'next/link';
import PostList from '../components/PostList';

const Posts: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full px-4 lg:px-56">
      <Link href="posts/publish">
        <button className="bg-indigo-600 px-8 py-2 rounded-md	text-white mr-5 mt-10 hover:bg-indigo-800 self-start">
          Criar nova publicação
        </button>
      </Link>
      <PostList />
      <Link href="signin">
        <a>Logout</a>
      </Link>
    </div>
  );
};

export default Posts;
