document.addEventListener('DOMContentLoaded', function() {
  const calculateButton = document.getElementById('calculate-button');
  const startTimeInput = document.getElementById('start-time');
  const endTimeInput = document.getElementById('end-time');
  const timeDifferenceDisplay = document.getElementById('time-difference');

  calculateButton.addEventListener('click', calculateTimeDifference);

  function calculateTimeDifference() {
      const startTime = new Date(`1970-01-01T${startTimeInput.value}`);
      const endTime = new Date(`1970-01-01T${endTimeInput.value}`);

      const timeDiff = endTime - startTime;
      if (isNaN(timeDiff)) {
          timeDifferenceDisplay.textContent = 'Invalid time format';
      } else {
          const hours = Math.floor(timeDiff / 3600000);
          const minutes = Math.floor((timeDiff % 3600000) / 60000);
          timeDifferenceDisplay.textContent = `${hours} hours and ${minutes} minutes`;
      }
  }
});