// this hauler goes from containers to room controler




module.exports = {
    run: function(creep) {
        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
                 creep.memory.working = true;
        }
        else
        {
            creep.memory.working = true;
        }


         var container = creep.pos.findClosestByRange(FIND_STRUCTURES, 
                        {filter: (s) => (s.structureType == STRUCTURE_CONTAINER)});
         var roomStorage = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_STORAGE});
       
      
            if (creep.memory.working == true) {
                if(creep.pos.roomName != Game.spawns.Spawn1.pos.roomName)
                {
                    creep.moveTo(Game.flags['rallyHere'])
                }
                else
                {
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(creep.room.controller);
                }
                }
            }
                 
                   
                   
                   
               else {
                   if(creep.pos.roomName != Game.spawns.Spawn1.pos.roomName)
                {
                    moveTo(Game.flags['rallyHere'])
                }
                else
                {
                 // var emptyExtensions = Game.spawns.Spawn1.room.find(FIND_STRUCTURES, {filter: (struct) => struct.structureType == STRUCTURE_EXTENSION});
                 var container = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 250});
                    var roomStorage = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_STORAGE && s.store[RESOURCE_ENERGY] > 250 });
                   
                   if(roomStorage)
                   {
                       if (creep.withdraw(roomStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(roomStorage);
                   }
                   }
                   else
                   if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(container);
                   }
                }
               }

    }
};
// && struct.store[RESOURCE_ENERGY] >= 200
//  && s.structureType != STRUCTURE_LINK