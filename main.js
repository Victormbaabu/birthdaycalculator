//array declarations
let daysOfWeek = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
  
    let maleAkanNames = [
      "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    ];
  
    let femaleAkanNames = [
      "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
    ];


    if (dayOfWeekNumber == 0){
      index = 6;
    } else {
      index = dayOfWeekNumber - 1;
    }
  
    console.log(index);



  function dayfinder () {
      let yearOfBirth = document.getElementById("YYYY").value;
      let monthOfBirth = Number(document.getElementById("MM").value);
      let dayOfBirth = Number(document.getElementById("DD").value);
      let genders = document.getElementsByName("gender");
    
      // gender fetch function
      function getGender () {
        for (let gender of genders){
          if (gender.checked){
            return gender.value;
          }
        }
      }
    
      let myGenderValue = getGender();
      console.log(myGenderValue);
    
      // function validation
      function monthValidator () {
        if (monthOfBirth < 1 || monthOfBirth > 12) {
          return false;
        } else {
          return true;
        }
      }
    
      function dayValidator () {
        if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
          if (dayOfBirth > 28 || dayOfBirth < 1) {
            return false;
          } else if (monthOfBirth === 2 && dayOfBirth > 29) {
            return false;
          } else if (monthOfBirth === 2 && dayOfBirth < 1) {
            return false;
          } else {
            return true;
          }
        } else if (dayOfBirth < 1 || dayOfBirth > 31){
          return false;
        } else {
          return true;
        }
      }  


      if (myGenderValue == "male" && monthValid && dayValid) {
            document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanNames[index];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            document.getElementById('result').style.fontSize = "18px";
            document.querySelector('h1').textContent = "Hello" + " " + maleAkanNames[index];
            alert("You are a male")
            return false;
          } else if (myGenderValue == "female" && monthValid && dayValid) {
            document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            document.getElementById('result').style.fontSize = "20px";
            document.querySelector('h1').textContent = "Hello" + " " + femaleAkanNames[index];
            alert("You are a male")
            return false;
          } else {
            alert("You entered an invalid day or month, please try again");
          }
      }


