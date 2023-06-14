Hooks.on("dnd5e.preRollSkill", (actor, rollData, skillId) => {
  console.log("dnd5e.preRollSkill");
  console.log(rollData);

  //To Do: Clean up this stuff and move it to its own function
  console.log(actor.system.attributes.exhaustion);
  if (actor.system.attributes.exhaustion == 1)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d4";
  }

  if (actor.system.attributes.exhaustion == 2)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d6";
  }

  if (actor.system.attributes.exhaustion == 3)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d8";
  }

  if (actor.system.attributes.exhaustion == 4)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d10";
  }
  
  if (actor.system.attributes.exhaustion == 5)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d12";
  }

  console.log(rollData);
});


Hooks.on("dnd5e.preRollAbilityTest", (actor, rollData, skillId) => {
  //console.log("dnd5e.preRollAbilityTest");
  //console.log(rollData);

  //console.log(actor.system.attributes.exhaustion);
  
    //To Do: Clean up this stuff and move it to its own function
  if (actor.system.attributes.exhaustion == 1)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d4";
  }

  if (actor.system.attributes.exhaustion == 2)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d6";
  }

  if (actor.system.attributes.exhaustion == 3)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d8";
  }

  if (actor.system.attributes.exhaustion == 4)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d10";
  }
  
  if (actor.system.attributes.exhaustion == 5)
  {
    rollData.parts.push("@penalty");
    rollData.data.penalty = "-1d12";
  }

  //console.log(rollData);
});