import stream from 'stream/promises';
import fs from 'fs';
import path from 'path';

const write = async () => {
    const fileName = path.join('files', 'fileToWrite.txt');

    await stream.pipeline(
        process.stdin,
        fs.createWriteStream(fileName),
    );
};

await write();