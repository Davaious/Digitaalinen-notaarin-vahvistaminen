import crypto from 'crypto';

function hashDocument(file) {
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
        const fileContent = event.target.result;
        const hash = crypto.createHash('sha256').update(fileContent).digest('hex');
        console.log('Document Hash:', hash);
    };
    fileReader.readAsArrayBuffer(file);
}
