// Get the purchase form
const purchaseForm = document.getElementById('purchase-form');

// Handle form submission
purchaseForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get the form data
    const product = document.getElementById('product').value;
    const flavor = document.getElementById('flavor').value;
    const quantity = document.getElementById('quantity').value;
    const email = document.getElementById('email').value;
  
    // Compose the email body
    const subject = 'New Purchase';
    const body = `Product: ${product}\nFlavor: ${flavor}\nQuantity: ${quantity}\nEmail: ${email}`;
  
    // Send the email
    sendEmail(subject, body);
    
    // Clear the form fields
    purchaseForm.reset();
  });
  
  // Function to send email using SMTPJS
  function sendEmail(subject, body) {
    Email.send({
      SecureToken: 'your_secure_token',
      To: 'makrufmustofa79@gmail.com', // Replace with your admin email address
      From: email, // Replace with the sender's email address
      Subject: subject,
      Body: body,
    }).then(function (message) {
      if (message === 'OK') {
        alert('Purchase request sent successfully!');
      } else {
        alert('Failed to send purchase request. Please try again later.');
      }
    });
  }
  