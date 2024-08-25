import stream from 'stream';

const transform = async () => {
    const transformStream = new stream.Transform({
        transform(chunk, encoding, callback) {
            const array = [...String(chunk)];
            array.unshift(array.pop()); // move new line symbol to begin of the array
            const revertedChunk = `${array.reverse().join("")}`;
            callback(null, revertedChunk);
        },
    });
    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();