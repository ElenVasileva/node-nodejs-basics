import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import stream from 'stream';

const calculateHash = async () => {

    const fileName = path.join('files', 'fileToCalculateHashFor.txt');
    const readableStream = fs.createReadStream(fileName);

    const hash = crypto.createHash('sha256');

    const transformStream = new stream.Transform({
        transform(chunk, encoding, callback) {
            callback(null, hash.update(chunk).digest('hex'));
        },
    });
    readableStream.pipe(transformStream).pipe(process.stdout);
};

await calculateHash();