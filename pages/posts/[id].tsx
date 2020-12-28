import Image from 'next/image';
import Link from 'next/link';
import { TextField } from '@material-ui/core';
import { MdKeyboardBackspace } from 'react-icons/md';
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
    <div className="flex justify-center items-center h-screen w-full px-4 lg:px-56">
      <div className="flex flex-col w-full">
        <Link href="/posts">
          <a className="flex items-center text-xl	mb-4 w-28">
            <MdKeyboardBackspace size={25} color="#000" className="mr-3" />
            Voltar
          </a>
        </Link>

        <h1 className="text-xl font-bold mb-8">Visualizar publicação</h1>

        {!!post && (
          <>
            <TextField
              id="title"
              label="Título"
              autoComplete="off"
              variant="filled"
              disabled
              value={post.title}
            />

            <strong className="mt-8">Banner</strong>

            <div className="my-8 flex items-center justify-center">
              <Image
                src={post.banner}
                alt={post.title}
                width={1000}
                height={300}
                objectFit="cover"
              />
            </div>

            <TextField
              id="content"
              label="Conteúdo"
              autoComplete="off"
              multiline
              rows={4}
              rowsMax={4}
              variant="filled"
              disabled
              value={post.content}
            />

            <button
              className="bg-red-600 px-8 py-2 rounded-md	text-white mr-5 mt-10 hover:bg-red-800"
              onClick={() => {}}
            >
              Remover
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
