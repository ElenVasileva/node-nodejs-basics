import fs from 'node:fs';

const rename = async () => {

    const wrongFileName = 'files/wrongFilename.txt';
    const properFileName = 'files/properFilename.md';

    if (!fs.existsSync(wrongFileName) || fs.existsSync(properFileName)) {
        throw new Error('FS operation failed');
    } else {
        fs.renameSync(wrongFileName, properFileName, { recursive: true });
    }
};

await rename();