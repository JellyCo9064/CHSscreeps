// this hauler goes from storage to feed spawn/extensions

var roleUpgrader = require('role.upgrader');

module.exports = {
    
    run: function(creep) {
        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
            
}
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
                 creep.memory.working = true;
        }


         var container = creep.pos.findClosestByRange(FIND_STRUCTURES, 
                        {filter: (s) => (s.structureType == STRUCTURE_CONTAINER)});
                        var emptyExtensions = Game.spawns.Spawn1.room.find(FIND_STRUCTURES, {filter: (struct) => struct.structureType == STRUCTURE_EXTENSION && struct.energy < struct.energyCapacity});
       
      
            if (creep.memory.working == true) {
                var turret = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_TOWER});
                if(turret != null)
                {
                if(turret.energy < turret.energyCapacity)
                {
                    if (creep.transfer(turret, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(turret);
                      }
                }
                }
                
            
                   if(Game.spawns.Spawn1.energy < Game.spawns.Spawn1.energyCapacity && turret.energy == turret.energyCapacity) {
                        if (creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(Game.spawns.Spawn1);
                        }
               
                   }   
                        else if(emptyExtensions.length > 0){
                       
                       
                       if (creep.transfer(emptyExtensions[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(emptyExtensions[0]);
                       }
                    }
                    else
                    {
                        if(creep.transfer(Game.getObjectById('57c628b9669f5283661eaf71'), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                        {
                            creep.moveTo(Game.getObjectById('57c628b9669f5283661eaf71'));
                        }
                    }
                }
               else {
                 // var emptyExtensions = Game.spawns.Spawn1.room.find(FIND_STRUCTURES, {filter: (struct) => struct.structureType == STRUCTURE_EXTENSION});
                 var container = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 250});
                   
                   if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(container);
                   }
                }

    }
};
// && struct.store[RESOURCE_ENERGY] >= 200
//  && s.structureType != STRUCTURE_LINK