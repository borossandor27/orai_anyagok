document.addEventListener('DOMContentLoaded', () => {
    document
        .getElementById('request')
        .addEventListener('click', async () => {
            let postal_code = document.getElementById('postal_code').value;
            let country = document.getElementById('country').value;
            const url = `https://community-zippopotamus.p.rapidapi.com/${country}/${postal_code}`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '4e0486642dmsh7fa86fe6268c685p1d64a2jsnae3afcc8b0df',
                    'x-rapidapi-host': 'community-zippopotamus.p.rapidapi.com'
                }
            };

            try {
                console.log(url);
                const response = await fetch(url, options);
                const result = await response.text();
                console.log(result);
                adatMegjelenites(result);
            } catch (error) {
                console.error(error);
            }
        });
    function adatMegjelenites(adatok) {
        const result = JSON.parse(adatok);
        let resultHtml = `<h2>Post code: ${result["post code"]}</h2>
            <p>Country: ${result["country"]} (${result["country abbreviation"]})</p>
            <h3>Places:</h3>
            <div>
                ${result["places"].map(place => `
                    <div>
                        <p><strong>Place name:</strong> ${place["place name"]}</p>
                        <p><strong>State:</strong> ${place.state} (${place["state abbreviation"]})</p>
                        <p><strong>Latitude:</strong> ${place.latitude}</p>
                        <p><strong>Longitude:</strong> ${place.longitude}</p>
                    </div>
                `).join('')}
            </div>
        `;
        document.getElementById('result').innerHTML = resultHtml;

    }
});