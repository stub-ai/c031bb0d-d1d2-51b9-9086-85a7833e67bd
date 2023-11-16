import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [urls, setUrls] = useState<string[]>([''])
  const [folderNames, setFolderNames] = useState<string[]>([''])

  const handleDownloadAndResize = async () => {
    await axios.post('/api/downloadAndResize', { urls, folderNames })
  }

  return (
    <div>
      {urls.map((url, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => {
              const newUrls = [...urls]
              newUrls[index] = e.target.value
              setUrls(newUrls)
            }}
          />
          <input
            type="text"
            placeholder="Enter Folder Name"
            value={folderNames[index]}
            onChange={(e) => {
              const newFolderNames = [...folderNames]
              newFolderNames[index] = e.target.value
              setFolderNames(newFolderNames)
            }}
          />
        </div>
      ))}
      <button onClick={() => setUrls([...urls, ''])}>Add URL</button>
      <button onClick={handleDownloadAndResize}>Download and Resize Images</button>
    </div>
  )
}