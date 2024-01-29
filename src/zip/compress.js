import stream from 'stream/promises';
import fs from 'fs';
import path from 'path';
import zlib from 'node:zlib';

const compress = async () => {

    const fileToCompress = path.join('files', 'fileToCompress.txt');
    const archive = path.join('files', 'archive.gz');

    await stream.pipeline(
        fs.createReadStream(fileToCompress),
        zlib.createGzip(),
        fs.createWriteStream(archive),
    );
};

await compress();