setInterval(function () {
  // seoul
  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = seoulTime.format("MMMM Do, YYYY");
  seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<small>]A[</small>]");

  // tbilisi
  let tbilisiElement = document.querySelector("#tbilisi");
  let tbilisiDateElement = tbilisiElement.querySelector(".date");
  let tbilisiTimeElement = tbilisiElement.querySelector(".time");
  let tbilisiTime = moment().tz("Asia/Tbilisi");

  tbilisiDateElement.innerHTML = tbilisiTime.format("MMMM Do, YYYY");
  tbilisiTimeElement.innerHTML = tbilisiTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // quebec
  let quebecElement = document.querySelector("#quebec");
  let quebecDateElement = quebecElement.querySelector(".date");
  let quebecTimeElement = quebecElement.querySelector(".time");
  let quebecTime = moment().tz("Canada/Eastern");

  quebecDateElement.innerHTML = quebecTime.format("MMMM Do, YYYY");
  quebecTimeElement.innerHTML = quebecTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);
