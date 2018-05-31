# jsrProject1Chatbot
Project 1 for JSR course - make a conversational chatbot

Publicly available with HTML, CSS, and JS code here,

https://codepen.io/ajmasnyj/pen/vrEvpv

### Description

My chatbot is a collection of chats between Dave and a lively bunch of bots; HAL, R2D2, and Marvin.

The chat opens with opening messages from all three bots.
When an input is entered, HAL and R2D2 respond to the input based on switch statements, while Marvin begrudgingly responds with a for loop.

For HAL, this program looks as such,
```
  switch(message){
    case "Open the pod bay doors please, HAL":
      document.getElementById('hal').innerHTML += "I'm sorry Dave, I can't do that. <br/>";
      break;
    case "Pretty please, HAL":
      document.getElementById('hal').innerHTML += "I can't hear you. <br/>";
      break;
    default:
      document.getElementById('hal').innerHTML += "I'm sorry Dave, I didn't understand you." + " " + chooseName() + " " + "speaks your language. <br/>";
```

I approached this project with knowledge of functions and for loops in R, and was interested in learning how to tie together HTML, CSS, and JS.

I'm still learning about HTML and CSS, but figured out how to create extra chat panes and modify pixel width.

I would have liked to have figured out a way to incorporate a for loop that counted the number of unique inputs from Dave, and then have Marvin respond with: "I'll have to make n calculations for the improbability drive." However, I couldn't figure out the n.
