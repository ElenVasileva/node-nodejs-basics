import fs from 'node:fs';

const remove = async () => {

    const fileToRemoveName = 'files/fileToRemove.txt';

    if (!fs.existsSync(fileToRemoveName)) {
        throw new Error('FS operation failed');
    } else {
        fs.unlinkSync(fileToRemoveName);
    }
};

await remove();