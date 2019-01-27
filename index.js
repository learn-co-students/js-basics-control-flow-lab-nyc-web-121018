// Write your code in this file!

function scuberGreetingForFeet(someValue) {
  if (someValue <= 400){
    return 'This one is on me!'
  } else if ((someValue > 400) && (someValue <= 2500)){
    return 'I will gladly take your thirty bucks.'
  } else if (someValue > 2500) {
    return 'No can do.'
  }
};

function ternaryCheckCity(destinationCity){
  return (destinationCity === 'NYC' ? 'Ok, sounds good.' : 'No go.');
};

function switchOnCharmFromTip(tipQuality){
  switch(tipQuality){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.'
    }
}
