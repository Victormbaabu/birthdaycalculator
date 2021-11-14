//var d = '20/02/1990';
//var d = new Date();
//var n = d.getDay();

//switch (new Date().getDay()) {
  //case 0:
    //day = "Sunday";
    //break;
  //case 1:
    //day = "Monday";
    //break;
  //case 2:
    //day = "Tuesday";
    //break;
  //case 3:
    //day = "Wednesday";
    //break;
  //case 4:
   // day = "Thursday";
    //break;
  //case 5:
   // day = "Friday";
   // break;
  //case 6:
    //day = "Saturday";
//}

//function calculatingday(){
  //year = document.getElementById ('year').value;
  //CC = parseInt(year.substring(0,2));
 // d = (((CC/4) -2*CC-1) + ((5*YY/4)) + ((26 * (MM+1)/10)) DD )mod 7
  //return (math.floor(d));
//}
function dayfinder ()  {
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

  //month validation functions
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
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 2:
        document.getElementById('result').textContent = "You were born on a Monday: your Akan name is " + maleAkanNames[1];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 3:
        document.getElementById('result').textContent = "You were born on a Tuesday: your Akan name is " + maleAkanNames[2];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 4:
        document.getElementById('result').textContent = "You were born on a Wednesday: your Akan name is " + maleAkanNames[3];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 5:
        document.getElementById('result').textContent = "You were born on a Thursday: your Akan name is " + maleAkanNames[4];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 6:
        document.getElementById('result').textContent = "You were born on a Friday: your Akan name is " + maleAkanNames[5];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 7:
        document.getElementById('result').textContent = "You were born on a Saturday: your Akan name is " + maleAkanNames[6];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 0:
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + maleAkanNames[0];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      default:
        alert("mmh no Akan name for you");

    }
  } else if(myGenderValue == "female" && monthValid && dayValid) {
    switch (dayOfWeekNumber) {
      case 1:
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + femaleAkanNames[0];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 2:
        document.getElementById('result').textContent = "You were born on a Monday: your Akan name is " + femaleAkanNames[1];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        alert("Kwadwo");
        break;
      case 3:
        document.getElementById('result').textContent = "You were born on a Tuesday: your Akan name is " + femaleAkanNames[2];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 4:
        document.getElementById('result').textContent = "You were born on a Wednesday: your Akan name is " + femaleAkanNames[3];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 5:
        document.getElementById('result').textContent = "You were born on a Thursday: your Akan name is " + femaleAkanNames[4];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 6:
        document.getElementById('result').textContent = "You were born on a Friday: your Akan name is " + femaleAkanNames[5];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 7:
        document.getElementById('result').textContent = "You were born on a Saturday: your Akan name is " + femaleAkanNames[6];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 0:
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + femaleAkanNames[0];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      default:
        alert("mmh no Akan name for you");
      }
    } else{
      alert("You entered invalid month or day");
    }
  }
