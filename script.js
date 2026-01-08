
function getWeather() {
  let city = document.getElementById("city").value;

  if (!city) {
    alert("City name likho bhai 😅");
    return;
  }

  let apiKey = "2aa9d9430806b1b3162825e73e4d3dbe"; // tumhari new key
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data); // 🔥 debugging ke liye

      if (Number(data.cod) === 200) {
        document.getElementById("output").innerHTML = `
          <p>🌍 City: ${data.name}</p>
          <p>🌡️ Temp: ${data.main.temp} °C</p>
          <p>☁️ Weather: ${data.weather[0].description}</p>
        `;
      } else {
        document.getElementById("output").innerHTML =
          data.message || "City not found ❌";
      }
    })
    .catch(err => {
      console.log(err);
      document.getElementById("output").innerHTML = "Error fetching data ❌";
    });
}
