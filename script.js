const countdownDisplay = document.getElementById("countdownDisplay");
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
    const targetDateInput = document.getElementById("targetDate").value;
    if (!targetDateInput) {
        countdownDisplay.textContent = "Please select a date and time.";
        return;
    }

    const targetDate = new Date(targetDateInput).getTime();

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            clearInterval(interval);
            countdownDisplay.textContent = "Time's up!";
        } else {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
});
