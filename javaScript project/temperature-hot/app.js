
const key = `0c55729a917ada76ddbfd90c361ae181`
const search = document.getElementById('search')
search.addEventListener('click', function () {
    const city = document.getElementById('cityInput').value
    const temp = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    fetch(temp)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('city').innerText = data.name
            document.getElementById('temperature').innerText = data.main.temp
            document.getElementById('condition').innerText = data.weather[0].main

            const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            const imgIcon = document.getElementById('image');
            imgIcon.setAttribute('src', url);
        })
    console.log(city)
})
