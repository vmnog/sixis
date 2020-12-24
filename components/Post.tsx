import Link from 'next/link';
import IPostDTO from '../dtos/IPostDTO';

interface PostProps {
  post: IPostDTO;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="flex justify-start items-center px-8 h-24 w-full border-2 border-gray-300 mb-2">
      <Link href={`posts/${post.id}`}>
        <button className="bg-indigo-600 px-8 py-2 rounded-md	text-white mr-5 hover:bg-indigo-800	">
          Visualizar
        </button>
      </Link>
      <strong className="text-gray-800 mr-auto	">{post.title}</strong>
      <span className="text-gray-800">{post.date}</span>
    </div>
  );
};

export default Post;
