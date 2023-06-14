/** 
* Add the penalty dice to the dice roll that takes in account the exhaustion level of the character.
* @param {number} exhaustionLevel - The exhaustion level that was passed in
* @param {D20RollConfiguration} rollData - Configuration data for the pending roll. Used here to add the additional die.
*/
function addPenaltyDie(exhaustionLevel, rollData) {
  //Using just if/else because maximum possible exhaustion level is 6 so don't need to map it.
  if (exhaustionLevel == 1)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d4";
  }
  else if (exhaustionLevel == 2)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d6";
  }
  else if (exhaustionLevel == 3)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d8";
  }
  else if (exhaustionLevel == 4)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d10";
  }
  else if (exhaustionLevel == 5)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d12";
  }
};

/* -------------------------------------------- */
/*  Hooks                                       */
/* -------------------------------------------- */
/*List of dnd5e system hooks used: https://github.com/foundryvtt/dnd5e/wiki/Hooks*/

// Possible to do: force these hooks to be last in the event queue (https://github.com/foundryvtt/foundryvtt/issues/9387)
// if any bugs are encountered with other modules... would be unlikely though 

/** 
* Calls hook on an event before an ability check roll is made
*
* @param {Actor5e} actor - Actor for which the ability test is being rolled. Used here to retrieve the exhaustion level
* @param {D20RollConfiguration} rollData - Configuration data for the pending roll. Used here to add the additional die
*/
Hooks.on("dnd5e.preRollAbilityTest", (actor, rollData) => {
  addPenaltyDie(actor.system.attributes.exhaustion, rollData);
});

/** 
* Calls hook on an event before an ability saving throw's roll is made
*
* @param {Actor5e} actor - Actor for which the ability test is being rolled. Used here to retrieve the exhaustion level
* @param {D20RollConfiguration} rollData - Configuration data for the pending roll. Used here to add the additional die
*/
Hooks.on("dnd5e.preRollAbilitySave", (actor, rollData) => {
  addPenaltyDie(actor.system.attributes.exhaustion, rollData);
});

/** 
* Calls hook on an event before an attack roll with an item is made
*
* @param {Item5e} item - Item for which the roll is being performed, where the actor can be retrieved to get the exhaustion level.
* @param {D20RollConfiguration} rollData - Configuration data for the pending roll. Used here to add the additional die
*/
Hooks.on("dnd5e.preRollAttack", (item, rollData) => {
  addPenaltyDie(item.actor.system.attributes.exhaustion, rollData);
});