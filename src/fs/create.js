import fs from 'node:fs/promises';

const create = async () => {

    const fileName = 'files/fresh.txt';
    const text = 'I am fresh and young';

    try {
        const fileDescriptor = await fs.open(fileName, 'wx');
        await fs.writeFile(fileDescriptor, text);
    }
    catch (error) {
        if (error.code === 'EEXIST')
            throw new Error('FS operation failed');
        else throw error;
    }
};

await create();