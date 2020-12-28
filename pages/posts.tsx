import Link from 'next/link';
import PostList from '../components/PostList';
import { MdExitToApp } from 'react-icons/md';

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
        <a className="flex items-center self-start m-4">
          <MdExitToApp
            className="transform rotate-180 mr-2"
            size={35}
            color="#000"
          />
          Sair
        </a>
      </Link>
    </div>
  );
};

export default Posts;
