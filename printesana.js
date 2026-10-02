document.getElementById('print-but').addEventListener('click', function () {
    try {
        // Print the CV content by element ID
        printJS({
            printable: 'cv-saturs', // ID of the element to print
            type: 'html',
            style: '*{} p { font-size: 14px; } h1 { font-size: 18px; text-align: center}'
        });
    } catch (error) {
        console.error('Printing failed:', error);
        alert('Unable to print CV. Please try again.');
    }
});
