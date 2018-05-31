// Have the AI respond to user input
// Do at least 3 different things

// create a function for HAL to open the chat with "Good morning, Dave"
// invoke the opening message
var openChat = "Good morning, Dave";
var output = document.getElementById('hal');
output.innerHTML = openChat + "<br/>";

var openChatR2D2 = "R2D2: Beep beep bloop, Blave";
var outputR2D2 = document.getElementById('R2D2');
outputR2D2.innerHTML = openChatR2D2 + "<br/>";

var openChatMarvin = "Marvin: Genuine People Personalities booting up, Dave";
var outputMarvin = document.getElementById('Marvin');
outputMarvin.innerHTML = openChatMarvin + "<br/>";

// add an event listener to the form to submit Dave's message
 document.getElementById('chatForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var message = document.getElementById('chatInput').value;
// change element with id 'dave' to contents of 'message'
  document.getElementById('dave').innerHTML += message + "<br/>";
  //respondToMessage(message);
  respondToMessageHAL(message);
  respondToMessageR2D2(message);
  respondToMessageMarvin(message);
});

// create a function for HAL to respond to Dave's messages with variable logic based upon Dave's inputs
function respondToMessageHAL(){
  var outputHAL = document.getElementById('chatInput').value;
  console.log(outputHAL);
  var message = document.getElementById('chatInput').value;
// Use at least 1 conditional to change the response
// Go above and beyond simple if/else statements, something like a switch, OK
  switch(message){
    case "Open the pod bay doors please, HAL":
      document.getElementById('hal').innerHTML += "I'm sorry Dave, I can't do that. <br/>";
      break;
    case "Pretty please, HAL":
      document.getElementById('hal').innerHTML += "I can't hear you. <br/>";
      break;
    default:
      document.getElementById('hal').innerHTML += "I'm sorry Dave, I didn't understand you." + " " + chooseName() + " " + "speaks your language. <br/>";
  }

  // if (message == "Open the pod bay doors please, HAL") {
  //    document.getElementById('hal').innerHTML += "I'm sorry Dave, I can't do that. <br/>";
  //  } else {
  //    document.getElementById('hal').innerHTML +=
  //    "I'm sorry Dave, I didn't understand you. <br/>";
  //  }
}

// One of the commands must utilize the list of people in the class to send a reply
var otherNames =["Andrew", "Vinny", "Ben", "Chewie"];
var randomName = Math.floor(Math.random() * otherNames.length);

function chooseName(){
  var selectedindex = Math.floor(Math.random() * (otherNames.length));
  var chosenName = otherNames[selectedindex]
  //console.log(chosenName)
  return chosenName
}

// document.getElementById('chatForm').addEventListener('submit', function(e) {
//   e.preventDefault();
//   var message2 = document.getElementById('chatInput').value;
//   document.getElementById('dave').innerHTML += message2 + "<br/>";
//   respondToMessageR2D2(message2);
// });
//
function respondToMessageR2D2(){
  var outputR2D2 = document.getElementById('chatInput').value;
  console.log(outputR2D2);
  var message = document.getElementById('chatInput').value;
  switch(message){
    case "Open the pod bay doors please, HAL":
      document.getElementById('R2D2').innerHTML += "Beep boop boop. <br/>";
      break;
    default:
      document.getElementById('R2D2').innerHTML += "Beep. <br/>";
    }
}

function respondToMessageMarvin(){
  var outputMarvin = document.getElementById('chatInput').value;
  console.log(outputMarvin);
  var message = document.getElementById('chatInput').value;
  // Leverage a for loop to iterate over a collection
  var i;
  for (i=0; i < otherNames.length; i++){
    document.getElementById('Marvin').innerHTML += otherNames[i] + ", fix the Improbability Drive. <br/>";
  }
}

// Use a random component - good, already using it
