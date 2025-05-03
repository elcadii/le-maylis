// furmell de reserve
document.getElementById('reserveButton').addEventListener('click', function() {
    let checkin = document.getElementById('checkin').value;
    let checkout = document.getElementById('checkout').value;
    let persons = document.getElementById('persons').value;
    let chambers = document.getElementById('chambers').value;

    if (checkin && checkout && persons && chambers) {
      let message = `Vous avez réservé pour ${persons} personne(s), ${chambers} chambre(s) du ${checkin} au ${checkout}.`;
     alert(message)
    } else {
      alert("euillez remplir tous les champs.")
    }
  });


  const contactButton = document.getElementById('contactButton');
  contactButton.addEventListener('click', function() {
    let firstname = document.getElementById('firstname').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;


    if (firstname === '' || email === '' || message === '') {
      alert('Please fill in all fields: Name, Email, and Message.');
    } else {
      alert(`we will contact you check your email :( ${email} )`);
    }
  });


  const submitButton = document.getElementById('submitButton');
  

  submitButton.addEventListener('click', function() {

    const emailInput = document.getElementById('emailInput').value;


    if (emailInput) {
      alert("We will contact you at " + emailInput);
    } else {
      alert("Please enter a valid email address.");
    }
  });
