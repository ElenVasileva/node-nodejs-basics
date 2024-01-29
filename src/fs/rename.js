import path from 'node:path';
import fs from 'node:fs';

const rename = async () => {

    const wrongFileName = path.join('files', 'wrongFilename.txt');
    const properFileName = path.join('files', 'properFilename.md');

    if (!fs.existsSync(wrongFileName) || fs.existsSync(properFileName)) {
        throw new Error('FS operation failed');
    } else {
        fs.renameSync(wrongFileName, properFileName, { recursive: true });
    }
};

await rename();