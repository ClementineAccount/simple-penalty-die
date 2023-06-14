/** 
* Calls hook on an event before an ability roll is made, after the dice pool is assembled, in 
* order to add a penalty dice to the dice roll that takes in account the exhaustion level of the character
* https://github.com/foundryvtt/dnd5e/wiki/Hooks
* 
* @param {Actor5e} actor - Actor for which the ability test is being rolled. Used here to retrieve the exhaustion level
* @param {D20RollConfiguration} rollData - Configuration data for the pending roll. Used here to add the additional die
*/
Hooks.on("dnd5e.preRollAbilityTest", (actor, rollData) => {

  //To Do: Clean up this stuff and move it to its own function
  //Using just if/else because maximum possible exhaustion level is 6 so don't need to map it.
  if (actor.system.attributes.exhaustion == 1)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d4";
  }
  else if (actor.system.attributes.exhaustion == 2)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d6";
  }
  else if (actor.system.attributes.exhaustion == 3)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d8";
  }
  else if (actor.system.attributes.exhaustion == 4)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d10";
  }
  else if (actor.system.attributes.exhaustion == 5)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d12";
  }
});