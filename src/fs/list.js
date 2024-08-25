import fs from 'node:fs';

const list = async () => {

    const folderName = 'files';

    if (!fs.existsSync(folderName)) {
        throw new Error('FS operation failed');
    } else {
        const fileList = fs.readdirSync(folderName);
        for (const fileName of fileList)
            console.log(fileName);
    }
};

await list();