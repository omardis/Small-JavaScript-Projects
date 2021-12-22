/*
Sleep Debt Calculator
Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

Omar Alvarado
*/



const getSleepHours = day => {
 const dayOfTheWeek = day;
 switch (dayOfTheWeek){
   case 'monday':
     return 8;
     break;
   case 'tuesday':
     return 8;
    break;
   case 'wednesday':
     return 8;
     break;
   case 'thursday':
    return 8;
     break;
   case 'friday':
     return 12;
     break;
   case 'saturday':
    return 12;
     break;
   case 'sunday':
     return 6;
     break;
   default:
     console.log('Choose a day of the week');
 }
}

const getActualSleepHours = () => {
 const monday = getSleepHours('monday');
 const tuesday = getSleepHours('tuesday');
 const wednesday = getSleepHours('wednesday');
 const thursday = getSleepHours('thursday');
 const friday = getSleepHours('friday');
 const saturday = getSleepHours('saturday');
 const sunday = getSleepHours('friday');
 const weekdays = monday + tuesday + wednesday + thursday + friday;
 const weekends = saturday + sunday;
 const totalDays = weekdays + weekends;

 return totalDays;
}

const getIdealSleepHours = () => {
 const idealHours = 8;
 return idealHours * 7;
}

const calculateSleepDebt = () => {
 const actualSleepHours = getActualSleepHours();
 const idealSleepHours = getIdealSleepHours();
 const hourDifference = actualSleepHours - idealSleepHours;
 if(actualSleepHours == idealSleepHours){
   console.log('You have a perfect amount of sleep');
 }
 else if(actualSleepHours > idealSleepHours){
   console.log(`You get ${hourDifference} hours more of sleep than what you need`);
 }
 else {
   console.log(`You should sleep ${hourDifference} hours more to get some rest`);
 }
}

calculateSleepDebt();
