
function dayfinder ()  {
    let yearOfBirth = document.getElementById("YYYY").value;
    let monthOfBirth = document.getElementById("MM").value;
    let dayOfBirth = document.getElementById("DD").value;

    let genders = document.getElementsByName("gender");

  // gender fetch function
  function getGender () {
    for (let gender of genders){
      if (gender.checked){

        return gender.value;
      }
    }
  }
  // A comment

  let myGenderValue = getGender();

  console.log("The gender is " + myGenderValue);
  console.log("The year is " + yearOfBirth);
  console.log("The day is " + dayOfBirth);
  console.log("The month is " + monthOfBirth);

  //month validation functions
  function monthValidator () {
    let monthInt = parseInt(monthOfBirth);
    let dayInt = parseInt(dayOfBirth);
      if (monthInt < 1 || monthInt > 12) {
        return false;
    } else {
      return true;
    }
  }
//day validation function
  function dayValidator () {
    let monthInt = parseInt(monthOfBirth);
    let dayInt = parseInt(dayOfBirth);
      if (monthInt === 2 && Number(yearOfBirth)%4 === 0) {
        if (dayInt > 28 || dayInt < 1) {
          return false;
      } else if (monthInt === 2 && dayInt > 29) {
        return false;
      } else if (monthInt === 2 && dayInt < 1) {
        return false;
      } else {
        return true;
      }
    } else if (dayInt < 1 || dayInt > 31){
      return false;
    } else {
      return true;
    }
  }

  //validation variables
  let monthValid = monthValidator();
  let dayValid = dayValidator();

  //formula to determine day of birth
  let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
          ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);

  //creating arrays of Akan names for males and females
  let maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

  let femaleAkanNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
  ];

  //condition statement for input validation
  if (myGenderValue == "male" && monthValid && dayValid){
    switch (dayOfWeekNumber) {
      case 1:
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + maleAkanNames[0];
        // document.getElementById('display-name').textContent = "Here is your Akan name: ";
        // return false;
        alert("You are a " + maleAkanNames[0]);
        break;
      case 2:
        document.getElementById('result').textContent = "You were born on a Monday: your Akan name is " + maleAkanNames[1];
        // document.getElementById('display-name').textContent = "Here is your Akan name: ";
        // return false;
        alert("You are a " + maleAkanNames[1]);
        break;
      case 3:
        document.getElementById('result').textContent = "You were born on a Tuesday: your Akan name is " + maleAkanNames[2];
        // document.getElementById('display-name').textContent = "Here is your Akan name: ";
        // return false;
        alert("You are a " + maleAkanNames[2]);
        break;
      case 4:
        document.getElementById('result').textContent = "You were born on a Wednesday: your Akan name is " + maleAkanNames[3];
        // document.getElementById('display-name').textContent = "Here is your Akan name: ";
        // return false;
        alert("You are a " + maleAkanNames[3]);
        break;
      case 5:
        document.getElementById('result').textContent = "You were born on a Thursday: your Akan name is " + maleAkanNames[4];
        // document.getElementById('display-name').textContent = "Here is your Akan name: ";
        // return false;
        alert("You are a " + maleAkanNames[4]);
        break;
      case 6:
        document.getElementById('result').textContent = "You were born on a Friday: your Akan name is " + maleAkanNames[5];
        // document.getElementById('display-name').textContent = "Here is your Akan name: ";
        // return false;
        alert("You are a " + maleAkanNames[5]);
        break;
      case 7:
        document.getElementById('result').textContent = "You were born on a Saturday: your Akan name is " + maleAkanNames[6];
        // document.getElementById('display-name').textContent = "Here is your Akan name: ";
        // return false;
        alert("You are a " + maleAkanNames[6]);
        break;
      default:
        alert("No Akan Name");

    }
  } else if(myGenderValue == "female" && monthValid && dayValid) {
    switch (dayOfWeekNumber) {
      case 1:
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + femaleAkanNames[0];
        // document.getElementById('display-name').textContent = "Here is your Akan name: ";
        // return false;
        alert("You are a " + femaleAkanNames[0]);
        break;
      case 2:
        document.getElementById('result').textContent = "You were born on a Monday: your Akan name is " + femaleAkanNames[1];
        // document.getElementById('display-name').textContent = "Here is your Akan name: ";
        // return false;
        alert("You are a " + femaleAkanNames[1]);
        break;
      case 3:
        document.getElementById('result').textContent = "You were born on a Tuesday: your Akan name is " + femaleAkanNames[2];
        //document.getElementById('display-name').textContent = "Here is your Akan name: ";
        //return false;
        alert("You are a " + femaleAkanNames[2]);
        break;
      case 4:
        document.getElementById('result').textContent = "You were born on a Wednesday: your Akan name is " + femaleAkanNames[3];
        //document.getElementById('display-name').textContent = "Here is your Akan name: ";
        //return false;
        alert("You are a " + femaleAkanNames[3]);
        break;
      case 5:
        document.getElementById('result').textContent = "You were born on a Thursday: your Akan name is " + femaleAkanNames[4];
        //document.getElementById('display-name').textContent = "Here is your Akan name: ";
        //return false;
        alert("You are a " + femaleAkanNames[4]);
        break;
      case 6:
        document.getElementById('result').textContent = "You were born on a Friday: your Akan name is " + femaleAkanNames[5];
        //document.getElementById('display-name').textContent = "Here is your Akan name: ";
        //return false;
        alert("You are a " + femaleAkanNames[5]);
        break;
      case 7:
        document.getElementById('result').textContent = "You were born on a Saturday: your Akan name is " + femaleAkanNames[6];
        //document.getElementById('display-name').textContent = "Here is your Akan name: ";
        //return false;
        alert("You are a " + femaleAkanNames[6]);
        break;
      //case 0:
        //document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + femaleAkanNames[0];
        //document.getElementById('display-name').textContent = "Here is your Akan name: ";
        //return false;
        //alert("You are a " + femaleAkanNames[0]);
       // break;
      default:
        alert("No Akan name");
      }
    } 
    else if(!monthValid){
      alert("The month is not valid")
    }
    else if(!dayValid){
      alert("The month is not valid")
    }
    else{
      if(!monthValid){
        alert("The month is not valid")
      }
      else if(!dayValid){
        alert("The month is not valid")
      }
      // alert("You entered invalid month or day");
    }
  }
