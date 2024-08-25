import fs from 'node:fs';

const copy = async () => {

    const sourceFolderName = 'files';
    const destinationFolderName = 'files_copy';
    fs.access(destinationFolderName, fs.constants.F_OK, error => {
        if (error) {
            fs.cp(sourceFolderName, destinationFolderName, { recursive: true }, (e) => {
                throw new Error('FS operation failed');
            });
        } else {
            throw new Error('FS operation failed');
        }
    });
};

await copy();
