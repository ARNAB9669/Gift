// Set the birthday date (format: YYYY, MM-1, DD)
const birthDate = new Date(2007, 4, 26); // Example: May 17, 2006

function updateAge() {
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const diffInSeconds = Math.floor((now - birthDate) / 1000);

    // Update corresponding divs
    document.getElementById("Year").innerHTML = `<h1><b>${years}</b> Years</h1>`;
    document.getElementById("Month").innerHTML = `<h1><b>${months}</b> Months</h1>`;
    document.getElementById("Date").innerHTML = `<h1><b>${days}</b> Days</h1>`;
    document.getElementById("Second").innerHTML = `<h1><b>${diffInSeconds.toLocaleString()}</b> Seconds</h1>`;
}

// Update every second
setInterval(updateAge, 1000);
updateAge();