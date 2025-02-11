function fetchData() {
    return new Promise((resolve, reject) => {
        fetch("http://localhost:8080/get-employees")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // Parse the JSON response
            })
            .then(data => {
                resolve(data); // Resolve the promise with the data
            })
            .catch(error => {
                reject(error); // Reject the promise with the error
            });
    });
}

fetchData()
    .then(data => {
        console.log("Data fetched successfully:", data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
