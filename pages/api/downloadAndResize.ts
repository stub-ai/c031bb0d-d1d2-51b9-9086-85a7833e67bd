import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { urls, folderNames } = req.body;

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const folderName = folderNames[i];

    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const resizedImageBuffer = await sharp(response.data)
      .resize(1000, 1000)
      .toBuffer();

    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }

    fs.writeFileSync(path.join(folderName, `${i}.jpg`), resizedImageBuffer);
  }

  res.status(200).json({ message: 'Images downloaded and resized successfully.' });
}