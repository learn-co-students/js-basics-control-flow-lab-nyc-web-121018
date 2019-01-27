// Write your code in this file!
function scuberGreetingForFeet(tripLength){
  let response;
  if (tripLength <= 400){
    response = 'This one is on me!';
  }
  if (tripLength > 2000){
    response = 'I will gladly take your thirty bucks.';
  }
  if (tripLength > 2500){
    response = 'No can do.';
  }
  return response
};

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
};

function switchOnCharmFromTip(tipValue){
  switch (tipValue){
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
      return 'Bye.'
      break;
  }
};
