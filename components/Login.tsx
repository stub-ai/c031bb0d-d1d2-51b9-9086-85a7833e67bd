import React, { useState } from 'react';

interface LoginProps {
  onDownloadAndResize: (urls: string[], folderNames: string[]) => void;
}

const Login: React.FC<LoginProps> = ({ onDownloadAndResize }) => {
  const [urls, setUrls] = useState<string[]>(['']);
  const [folderNames, setFolderNames] = useState<string[]>(['']);

  const handleDownloadAndResize = () => {
    onDownloadAndResize(urls, folderNames);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {urls.map((url, index) => (
        <div key={index} className="flex space-x-4">
          <input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => {
              const newUrls = [...urls];
              newUrls[index] = e.target.value;
              setUrls(newUrls);
            }}
            className="p-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Enter Folder Name"
            value={folderNames[index]}
            onChange={(e) => {
              const newFolderNames = [...folderNames];
              newFolderNames[index] = e.target.value;
              setFolderNames(newFolderNames);
            }}
            className="p-2 border rounded-md"
          />
        </div>
      ))}
      <button
        onClick={() => setUrls([...urls, ''])}
        className="p-2 mt-4 bg-blue-500 text-white rounded-md"
      >
        Add URL
      </button>
      <button
        onClick={handleDownloadAndResize}
        className="p-2 mt-4 bg-green-500 text-white rounded-md"
      >
        Download and Resize Images
      </button>
    </div>
  );
};

export default Login;