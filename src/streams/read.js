import stream from 'stream/promises';
import fs from 'fs';
import path from 'path';

const read = async () => {

    const fileName = path.join('files', 'fileToRead.txt');

    await stream.pipeline(
        fs.createReadStream(fileName),
        process.stdout,
    );
};

await read();