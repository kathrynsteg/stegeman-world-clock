setInterval(function () {
  // seoul
  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = seoulTime.format("dddd, MMMM Do, YYYY");
  seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<small>]A[</small>]");

  // tbilisi
  let tbilisiElement = document.querySelector("#tbilisi");
  let tbilisiDateElement = tbilisiElement.querySelector(".date");
  let tbilisiTimeElement = tbilisiElement.querySelector(".time");
  let tbilisiTime = moment().tz("Asia/Tbilisi");

  tbilisiDateElement.innerHTML = tbilisiTime.format("dddd, MMMM Do, YYYY");
  tbilisiTimeElement.innerHTML = tbilisiTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // quebec
  let quebecElement = document.querySelector("#quebec");
  let quebecDateElement = quebecElement.querySelector(".date");
  let quebecTimeElement = quebecElement.querySelector(".time");
  let quebecTime = moment().tz("Canada/Eastern");

  quebecDateElement.innerHTML = quebecTime.format("dddd, MMMM Do, YYYY");
  quebecTimeElement.innerHTML = quebecTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
