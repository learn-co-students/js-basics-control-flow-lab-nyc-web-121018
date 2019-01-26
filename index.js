// Write your code in this file!

function scuberGreetingForFeet(feet) {
  if (feet < 400) {
    return "This one is on me!"
  } else if (feet > 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks."
  } else if (feet > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(destination) {
  let response;
  destination === "NYC" ? response = "Ok, sounds good." : response = "No go.";

  return response;
}

function switchOnCharmFromTip(tip_type) {
  switch (tip_type) {
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye.";
      break;
  }
}
