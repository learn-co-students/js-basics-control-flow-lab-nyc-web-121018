// Write your code in this file!
function scuberGreetingForFeet(someValue){
  if (someValue <= 400){
    return "This one is on me!";
  } else if (someValue > 2000 && someValue < 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (someValue > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(city){
  let resp;
  city === 'NYC' ? (resp = 'Ok, sounds good.') : (resp = 'No go.');
  return resp;
}

function switchOnCharmFromTip(tip){
  let resp;
  switch (tip) {
    case 'generous':
      resp = 'Thank you so much.'
      break;
    case 'not as generous':
      resp = 'Thank you.'
      break;
    case 'thanks for everything':
      resp = 'Bye.'
      break;
  }
  return resp;

}
