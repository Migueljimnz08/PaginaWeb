document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); 

  console.log(event.target.elements);

  console.log(event.target.fname.value);
  console.log(event.target.lname.value);
  console.log(event.target.email.value);

  const fname = event.target.fname.value;
  const lname = event.target.lname.value;
  const email = event.target.email.value;

  let ms = '';

  if (fname.length < 3 || fname.length > 30) {
    console.log('First name out of character range: 3-30');
    msj += 'First name out of character range: 3-30';
  }

  if (lname.length <3 || lname.length > 30) {
    console.log('Last name out of character range: 3-30');
    msj += 'Last name out of character range: 3-30';
  }

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (emailRegex.test(email)){
    console.log(`${email}: is not valid`);
    msj += `${email}: is not valid`;
   }

   if (msj.length !=0) {
    alert(msj);
    let p = document.createElement('pre');
    let message = document.createTextNode(msj);
    p.style.color = '#DD1C1A';
    p.style.fontSize = '16px';
    p.appendChild(message);
    
    document.getElementById('contact').appendChild(p)
   }
   else{
    alert('Form correctly sent');
    event.target.submit();
   }
});