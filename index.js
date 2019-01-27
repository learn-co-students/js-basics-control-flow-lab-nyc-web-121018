// Write your code in this file!
function scuberGreetingForFeet(number){
  if (number < 400) {
    return 'This one is on me!'
  }
  else if (number > 2000 && number < 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else  {
    return 'No can do.'
  }

}

function ternaryCheckCity(city) {
  return city ==="NYC" ? 'Ok, sounds good.' : 'No go.';
}


function switchOnCharmFromTip(quality){
  switch (quality) {
    case "generous":
      return "Thank you so much."
      break;
    case "not as generous":
      return "Thank you."
      break;
    default:
      return "Bye."
  }
}
