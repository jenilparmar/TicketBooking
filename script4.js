
// Get the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Retrieve the ticket details from the query parameters
const name = urlParams.get('name');
const from = urlParams.get('from');
const to = urlParams.get('to');
const date = urlParams.get('date');
const selectedClass = urlParams.get('class');
const mode = urlParams.get('mode');

// Display the ticket details on the page
const ticketDetailsElement = document.getElementById('ticketDetails');
ticketDetailsElement.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>From:</strong> ${from}</p>
    <p><strong>To:</strong> ${to}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Class:</strong> ${selectedClass}</p>
    <p><strong>Mode:</strong> ${mode}</p>
    <!-- You can include additional ticket details here -->
`;

