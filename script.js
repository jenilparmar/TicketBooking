var buttons = document.querySelectorAll('.ticket button');

  // Add click event listener to each button
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Get the parent container of the clicked button
      var container = this.closest('.ticket');

      // Extract information from the container
      var trainName = container.querySelector('.information').innerText.match(/Train Type:- (.+)/)[1];
      var arrivalTime = container.querySelector('.information').innerText.match(/From :- (.+)/)[1];
      var departureTime = container.querySelector('.information').innerText.match(/To :- (.+)/)[1];

      // Call toggleForm function with extracted information
      alert(trainName+ "" +arrivalTime+" " +departureTime);
    });
  });


function boardTrain(trainIndex) {
  // alert(trainIndex)
  var information =
    document.querySelectorAll(".information")[trainIndex - 1].innerText;
  var encodedInformation = encodeURIComponent(information);
//   alert("Working")
// document.querySelector('.loader -container').style.display = 'block';
document.getElementById('one').style.display = 'block';
d = document.getElementById('d').style.display = 'none';

  
  setTimeout(() => {
    window.location.href = "form.html?information=" + encodedInformation;
    document.querySelector('.loader-container').style.display = 'none';
  }, 3000);



}

