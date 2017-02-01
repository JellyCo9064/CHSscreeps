var roleUpgrader = require('role.upgrader');

module.exports = {
    run: function(creep) {
        if(creep.memory.working == true && creep.carry.energy == 0)
   {
       creep.memory.working = false;
       creep.say("Getting Energy");
   }
   else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity)
   {
       creep.memory.working = true;
       creep.say("Building");
}   
   
   if(creep.memory.working == true)
   {
        var construct = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
        if(construct != undefined)
        {
             if(creep.build(construct) == ERR_NOT_IN_RANGE)
            {
                creep.moveTo(construct);
            }
        }
        else
        {
            roleUpgrader.run(creep);
        }
        
   }
   else{
         var container = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 250});
                   
                   if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(container);
                   }
      } 
    }
};