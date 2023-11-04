document.addEventListener('DOMContentLoaded', function() {
    const dataForm = document.getElementById('dataForm');
    const jsonOutput = document.getElementById('jsonOutput');

    dataForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(dataForm);
        const jsonData = {};

        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        // Simulate an asynchronous operation (e.g., an API request)
        await delay(1000);

        jsonOutput.textContent = JSON.stringify(jsonData, null, 2);
    });

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
});
