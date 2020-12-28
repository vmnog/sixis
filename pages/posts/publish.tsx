import Link from 'next/link';
import { useRouter } from 'next/router';

import { MdKeyboardBackspace } from 'react-icons/md';
import { TextField } from '@material-ui/core';
import Upload from '../../components/Upload';
import { useState } from 'react';

interface IBannerDTO {
  name: string;
  preview: string;
}

const Publish: React.FC = () => {
  const router = useRouter();

  const [banner, setBanner] = useState<IBannerDTO>({ name: '', preview: '' });

  const handleUpload = (files) => {
    console.log(URL.createObjectURL(files[0]));

    const file = {
      name: files[0].name,
      preview: URL.createObjectURL(files[0]),
    };

    setBanner(file);
  };

  const handlePublish = () => {
    return router.push('/posts');
  };

  return (
    <div className="flex justify-center items-center h-screen w-full px-4 lg:px-56">
      <div className="flex flex-col w-full">
        <Link href="/posts">
          <a className="flex items-center text-xl	mb-4 w-28">
            <MdKeyboardBackspace size={25} color="#000" className="mr-3" />
            Voltar
          </a>
        </Link>

        <h1 className="text-xl font-bold mb-8">Criar publicação</h1>

        <TextField
          id="title"
          label="Título"
          variant="outlined"
          autoComplete="off"
          autoFocus
        />

        <strong className="mt-8">Banner</strong>
        <Upload onUpload={handleUpload} preview={banner.name} />

        <TextField
          id="content"
          label="Conteúdo"
          variant="outlined"
          autoComplete="off"
          multiline
          rows={4}
          rowsMax={4}
        />

        <button
          className="bg-indigo-600 px-8 py-2 rounded-md	text-white mr-5 mt-10 hover:bg-indigo-800"
          onClick={handlePublish}
        >
          Publicar
        </button>
      </div>
    </div>
  );
};

export default Publish;
