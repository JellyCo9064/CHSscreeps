module.exports = {
   
    run: function(creep) {
        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.say("Mining");
            creep.memory.working = false;
        }
       
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.say("Depositing")
            creep.memory.working = true;
        }


         var container = creep.pos.findClosestByRange(FIND_STRUCTURES, 
                        {filter: (s) => (s.structureType == STRUCTURE_CONTAINER)});
       
      
            if (creep.memory.working == true) {
                    if (creep.transfer(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(container);
                    }
               } 
      
      
     /*   if (creep.memory.working == true) {
           if(Game.spawns.Spawn1.energy < Game.spawns.Spawn1.energyCapacity) {
                if (creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(Game.spawns.Spawn1);
                }
           }
           else {
               var emptyExtensions = Game.spawns.Spawn1.room.find(FIND_STRUCTURES, {filter: (struct) => struct.structureType == STRUCTURE_EXTENSION && struct.energy < struct.energyCapacity});
               if (creep.transfer(emptyExtensions[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(emptyExtensions[0]);
               }
            }
        } */
        //remove when switch 2 container
        else {
            var source = Game.getObjectById(creep.memory.miningSpot);
                if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source);
                }
            }
    }
};

