import path from 'node:path';
import fs from 'node:fs';

const remove = async () => {

    const fileToRemoveName = path.join('files', 'fileToRemove.txt');

    if (!fs.existsSync(fileToRemoveName)) {
        throw new Error('FS operation failed');
    } else {
        fs.unlinkSync(fileToRemoveName);
    }
};

await remove();