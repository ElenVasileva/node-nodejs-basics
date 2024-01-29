import fs from 'node:fs';

const copy = async () => {

    const sourceFolderName = 'files';
    const destinationFolderName = 'files_copy';
    console.log('test')
    fs.access(destinationFolderName, fs.constants.F_OK, error => {
        console.log(error)
        if (error) {
            console.log('test1')
            fs.cp(sourceFolderName, destinationFolderName, { recursive: true }, (e) => {
                console.log(e)
                throw new Error('FS operation failed');
            });
        } else {
            throw new Error('FS operation failed');
        }
    });
};

await copy();
