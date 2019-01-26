// Write your code in this file!


function scuberGreetingForFeet(result){
  if (result <= 400 ){
    return 'This one is on me!';
  }

  else if (1999 < result && result < 2500){
      return 'I will gladly take your thirty bucks.';

  } else {

  return 'No can do.'
  }
 }


 // condition ? expression1 : expression2;

 function ternaryCheckCity(city){
   return city == 'NYC' ?  'Ok, sounds good.' : 'No go.';
 }


 function switchOnCharmFromTip(tip) {
   // const hunger = 'famished';
   //
   // let food;

   switch (tip) {
       case 'generous':
          return 'Thank you so much.'
           break;
       case 'not as generous':
          return 'Thank you.';
           break;
       default:
           return 'Bye.'
           break;

   }

 }
