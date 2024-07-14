function updateClock() {
    let now = new Date();
    
    // Format HH:MM:SS
    let hours24 = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let time24 = `${hours24}:${minutes}:${seconds}`;

    // Format HH:MM:SS AM/PM
    let hours12 = ((hours24 % 12) || 12).toString().padStart(2, '0');
    let period = hours24 < 12 ? 'AM' : 'PM';
    let time12 = `${hours12}:${minutes}:${seconds} ${period}`;

    // Display the times
    console.log(`24-hour format: ${time24}`);
    console.log(`12-hour format: ${time12}`);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
