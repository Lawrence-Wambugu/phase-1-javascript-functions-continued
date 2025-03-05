// code your solution here
function saturdayFun(activity = 'roller-skate') {
    console.log(`This Saturday, I want to ${activity}!`);
  }
  
  // Example usage:
  
  saturdayFun(); // Outputs: This Saturday, I want to roller-skate!
  saturdayFun('go hiking'); // Outputs: This Saturday, I want to go hiking!
  
  function mondayWork(task = 'go to the office') {
    console.log(`On Monday, I will ${task}.`);
}
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example usage:
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("amazing"));  // Output: You are !!!amazing!!!!
  console.log(encouragingPromptFunction());          // Output: You are *special*!
  
  function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(task = "go to the office") {
    console.log(`On Monday, I need to ${task}.`);
}
function mondayWork(activity = "go to the office") {
    console.log(`This Monday, I will go to the office.`);
}
function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
};
