document.addEventListener("DOMContentLoaded", function () {
  // Replace these with dynamic data retrieval logic.
  const train1Time = getCurrentTime(5);
  const train2Time = getCurrentTime(20);
  const train3Time = getCurrentTime(31);

  // Update the displayed times for each train line.
  document.getElementById("train1-time").textContent = train1Time;
  document.getElementById("train2-time").textContent = train2Time;
  document.getElementById("train3-time").textContent = train3Time;
  document.getElementById("current-time").textContent = getCurrentTime();
  setInterval(
    () =>
      (document.getElementById("current-time").textContent = getCurrentTime()),
    60000
  );
});
// const getCurrentTime = (addedMinutes = 0) => {}

function getCurrentTime(addedMinutes = 0) {
  // Create a new Date object to represent the current date and time
  const now = new Date();

  // Get the current hour (0-23) and minutes (0-59)
  let currentHour = now.getHours();
  let currentMinutes = now.getMinutes() + addedMinutes;
  if (currentMinutes >= 60) {
    currentHour++;
    currentMinutes -= 60;
  }

  // Convert single-digit hours/minutes to double-digit format if needed
  const formattedHour = currentHour < 10 ? "0" + currentHour : currentHour;
  const formattedMinutes =
    currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;

  // Display the current time
  return formattedHour + ":" + formattedMinutes;
}
