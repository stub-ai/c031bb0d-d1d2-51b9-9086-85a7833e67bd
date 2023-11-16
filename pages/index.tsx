import { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Login from '../components/Login';

export default function Home() {
  const handleDownloadAndResize = async (urls: string[], folderNames: string[]) => {
    await axios.post('/api/downloadAndResize', { urls, folderNames });
  };

  return (
    <div>
      <Header />
      <Login onDownloadAndResize={handleDownloadAndResize} />
    </div>
  );
}