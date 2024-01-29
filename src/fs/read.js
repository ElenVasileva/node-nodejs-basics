import fs from 'node:fs';

const read = async () => {

    const fileToRead = 'files/fileToRead.txt';

    if (!fs.existsSync(fileToRead)) {
        throw new Error('FS operation failed');
    } else {
        const content = fs.readFileSync(fileToRead, { encoding: 'utf-8' });
        console.log(content);
    }
};

await read();