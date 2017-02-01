var roleBuilder = require('role.builder');

module.exports = {
    run: function(creep) {
        if(creep.memory.working == true && creep.carry.energy == 0)
   {
       creep.memory.working = false;
       creep.say("Mining");
   }
   else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity)
   {
       creep.memory.working = true;
       creep.say("Repairing");
}   
   
   if(creep.memory.working == true)
   {
       var struct = creep.pos.findClosestByPath(FIND_STRUCTURES, 
       {
           filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART
       });
       
       if(struct != undefined)
       {
           if(creep.repair(struct) == ERR_NOT_IN_RANGE)
           {
               creep.moveTo(struct);
           }
       }
       else
       {
           roleBuilder.run(creep);
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