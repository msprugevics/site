document.getElementById('print-but').addEventListener('click', function () {
    try {
        printJS({
            header: 'Mārtiņš Spruģēvics',
            printable: 'cv-saturs',
            type: 'html',
            documentTitle: 'Mārtiņš Spruģēvics',
            css: '../printesana.css',
            scanStyles: false,
            ignoreElements: ['projektiignore']
        });
    } catch (error) {
        console.error('Printing failed:', error);
        alert('Unable to print CV. Please try again.');
    }
});