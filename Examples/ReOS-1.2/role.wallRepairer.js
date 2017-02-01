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
       creep.say("Repairing Walls");
}   
   
   if(creep.memory.working == true)
   {
       
       
       
       var target = undefined;
       var targetOneHit = undefined;
       
       
            target = _(creep.room.find(FIND_STRUCTURES)).filter((s) => (s.structureType == STRUCTURE_RAMPART) && s.hitsMax > 1 && s.hits < 5000).sortBy(s => s.hits).first();
            if(!target)
            {
                target = _(creep.room.find(FIND_STRUCTURES)).filter((s) => (s.structureType == STRUCTURE_WALL || s.structureType == STRUCTURE_RAMPART) && s.hitsMax > 1 && s.hits < 10000).sortBy(s => s.hits).first();
            }
       
       if(target != undefined)
       {
           if(creep.repair(target) == ERR_NOT_IN_RANGE)
           {
               creep.moveTo(target);
           }
       }
       else
       {
           roleBuilder.run(creep);
       }
       
       
   }
   else{
        var container = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 200});
                   
                   if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(container);
                   }
      } 
    }
};