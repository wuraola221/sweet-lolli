document.addEventListener('DOMContentLoaded', function() {
 const storeHoursElement = document.querySelector('.footer-3');
 const storeHours = `
     <p>Monday to Saturday: 9am - 8pm</p>
     <p>Sunday: 12pm - 7pm</p>
 `;
 storeHoursElement.innerHTML += storeHours;

 const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 const now = new Date();
 const day = days[now.getDay()];
 const hour = now.getHours();
 const minute = now.getMinutes();

 let isOpen = false;
 if (day === "Sunday") {
     isOpen = (hour >= 12 && hour < 19) || (hour === 19 && minute === 0);
 } else {
     isOpen = (hour >= 9 && hour < 20) || (hour === 20 && minute === 0);
 }

 const status = isOpen ? "Open" : "Closed";
 const currentTime = `Current time: ${day}, ${hour}:${minute < 10 ? '0' + minute : minute}`;
 const storeStatus = `<p>SweetLolli is currently: ${status}</p>`;
 storeHoursElement.innerHTML += storeStatus;
});