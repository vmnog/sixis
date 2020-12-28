import { MdPublish } from 'react-icons/md';
import Dropzone from 'react-dropzone';

interface UploadProps {
  onUpload: any;
  preview: string;
}

const Upload: React.FC<UploadProps> = ({ onUpload, preview }) => {
  const handleUploadStyle = (isDragActive, isDragReject) => {
    const defaultStyling =
      'h-56 rounded-lg border-dashed border-4 border-gray-300 flex items-center justify-center cursor-pointer ';

    if (isDragReject) return defaultStyling + 'border-red-400';
    if (isDragActive) return defaultStyling + 'border-green-400';

    return defaultStyling;
  };

  const handleIconStyle = (isDragActive, isDragReject) => {
    const defaultStyling = '#bbb';

    if (isDragReject) return '#f87171';
    if (isDragActive) return '#34d399';

    return defaultStyling;
  };

  return (
    <div className="bg-gray-100 mb-8 p-8 rounded-lg">
      <Dropzone accept="image/*" onDropAccepted={onUpload}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <div
            {...getRootProps()}
            className={handleUploadStyle(isDragActive, isDragReject)}
          >
            <input {...getInputProps()} />
            {!!preview ? (
              <span>{preview}</span>
            ) : (
              <div className="flex flex-col items-center text-gray-400 ">
                <MdPublish
                  color={handleIconStyle(isDragActive, isDragReject)}
                  size={50}
                />
              </div>
            )}
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default Upload;
