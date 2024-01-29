import stream from 'stream/promises';
import fs from 'fs';
import path from 'path';
import zlib from 'node:zlib';

const decompress = async () => {

    const fileToCompress = path.join('files', 'fileToCompress.txt');
    const archive = path.join('files', 'archive.gz');

    await stream.pipeline(
        fs.createReadStream(archive),
        zlib.createGunzip(),
        fs.createWriteStream(fileToCompress),
    );
};

await decompress();