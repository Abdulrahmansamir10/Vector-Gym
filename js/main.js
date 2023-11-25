function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
      .querySelector(".custom_menu-btn")
      .classList.toggle("menu_btn-style");
  }


  // Get the current date
  var currentDate = new Date();

  // Get the day, month, and year
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1; // Months are zero-based
  var year = currentDate.getFullYear();

  // Create the date string in the desired format
  var dateString = day + '/' + month + '/' + year;

  // Set the date string as the content of the HTML element
  document.getElementById('date').textContent = dateString;



  
  const toggleMode = document.getElementById('toggle-mode');
const body = document.body;
toggleMode.addEventListener('change', function () {
  if (toggleMode.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});

function formValidate() {
    var name = document.getElementById("name").Value;
   var family  = document.getElementById("family name").Value;
   var Email = document.getElementById("Email").Value;
   var password = document.getElementById("password").Value;
   var error = document.getElementById("error").Value;
   var text = "";
   
   
    if(name.length < 5 ){
       text = "Please Enter Vaild Email";
       error.innerHtml = text;
       return false;
   }
   
   else if(family.length < 5 ){
   
       text = "Please Enter Vaild Email";
       error.innerHtml = text;
       return false;
   }
   
   else if(Email.indexOf("@")== -1 ){
   
       text = "Please Enter Vaild Email";
       error.innerHtml = text;
       return false;
   }
   else if(password.length < 8){
   
       text = "Please Enter Vaild Password";
       error.innerHtml = text;
       return false;
   }
   
   
   else {
   return true;
   }
   }
   
   function sendMail() {
    var params = {
      name: document.getElementById("Name").value,
      email: document.getElementById("Email").value,
      phone: document.getElementById("Phone Number").value,
      message: document.getElementById(" Message").value,
    };
    
    const serviceID = " service_hx3ads9 ";
    const templateID = " template_gdzcr3q ";
    
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
        document.getElementById("Name").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Phone Number").value = "";
        document.getElementById("Message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")
    
      })
      .catch(err=>console.log(err));
    }
   
   
   
   