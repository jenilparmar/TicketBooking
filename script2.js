
    // Retrieve information from URL
    var urlParams = new URLSearchParams(window.location.search);
    var information = urlParams.get('information');

    ticketInformation =document.getElementById('ticketInformation') 
    v = document.getElementById("v")
    x = document.getElementById("x")
    o = document.getElementById("o")
    q = document.getElementById("q")
    r = document.getElementById("r")
ticket = document.getElementById('ticket')
var gpayElement = document.getElementById('gpay');
var gpayButton = document.getElementById('gpayb');  
    // Decode and display information
    ticketInformation.innerText = decodeURIComponent(information);
    document.addEventListener("DOMContentLoaded", function() {
        // Get the payment button
        var paymentButton = document.getElementById('p');
    
        // Get the Google Pay elements
 
    

        // Add click event listener to the payment button
        paymentButton.addEventListener('click', function() {
            // Toggle the visibility of the Google Pay elements
            if (gpayElement.style.display === 'none' || gpayElement.style.display === '') {
                gpayElement.style.display = 'block';
                gpayButton.style.display = 'block';
                ticketInformation.style.display = "none";
                v.style.display = "none";
                x.style.display = "none";
                o.style.display = "none";
                q.style.display = "block";
                r.style.display = "block";
                ticket.style.display = "block"

            } else {
                gpayElement.style.display = 'none';
                gpayButton.style.display = 'none';
            }
        });
    });
    r.addEventListener("click",()=>{
        gpayElement.style.display = 'none';
                gpayButton.style.display = 'none';
                ticketInformation.style.display = "block";
        v.style.display = "block";
                x.style.display = "block";
                o.style.display = "block";
                q.style.display = "none";
                r.style.display = "none";
                ticket.style.display = "none"
    })
    function viewTicket() {
        // Gather input values
        var name = document.getElementById('name').value;
        var from = document.getElementById('From').value;
        var to = document.getElementById('To').value;
        var date = document.getElementById('date').value;
        var selectedClass = document.getElementById('Classes').value;
        var mode = document.getElementById('Mode').value;
    
        // Construct the URL
        var url = 'ticket.html?name=' + encodeURIComponent(name) + '&from=' + encodeURIComponent(from) +
                  '&to=' + encodeURIComponent(to) + '&date=' + encodeURIComponent(date) +
                  '&class=' + encodeURIComponent(selectedClass) + '&mode=' + encodeURIComponent(mode);
    
        // Redirect to the ticket page with the constructed URL
        window.location.href = url;
    }
    
    // Wait for the DOM to be fully loaded
    document.addEventListener("DOMContentLoaded", function() {
        // Get the ticket button
        var ticketButton = document.getElementById('ticket');
    
        // Add click event listener to the ticket button
        ticketButton.addEventListener('click', function() {
            // Call the viewTicket function
            viewTicket();
        });
    });