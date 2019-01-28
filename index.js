// Write your code in this file!
function scuberGreetingForFeet(someValue){
  let statement;
  if (someValue <= 400) {
    statement = 'This one is on me!';
  }else if(someValue > 2000 && someValue < 2500) {
    statement = 'I will gladly take your thirty bucks.';
  }else if(someValue > 2500){
    statement = 'No can do.'
  }
  return statement;

}

function ternaryCheckCity(city){
  let phrase =  city === "NYC" ? "Ok, sounds good." : "No go.";
  return phrase;
}

function switchOnCharmFromTip(tip){
  let response;
  switch (tip){
    case 'generous':
      response = "Thank you so much.";
      break
    case 'not as generous':
      response = "Thank you.";
      break 
    default:
      response = "Bye.";
  }
  return response

}
