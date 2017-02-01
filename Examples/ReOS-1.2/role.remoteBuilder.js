module.exports = {
    run: function(creep)
    {
        switch(creep.memory.state)
        {
            case 'move':
                if(creep.room.find(FIND_CONSTRUCTION_SITES) && creep.pos.roomName != 'W28N58')
                {
                    
                    creep.memory.state = 'build';
                }
                
                else
                {
                    creep.moveTo(Game.flags['RBuild']);
                }
                    
            break;

            case 'build':
                
                 var construct = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
                 if(construct && creep.pos.roomName != 'W28N58')
                 {
var struct = creep.pos.findClosestByPath(FIND_STRUCTURES, 
       {
           filter: (s) => s.hits < s.hitsMax * .75 && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART
       });
       
       if(struct != undefined)
       {
           if(creep.repair(struct) == ERR_NOT_IN_RANGE)
           {
               creep.moveTo(struct);
           }
       } else                     
                 if(creep.build(construct) == ERR_NOT_IN_RANGE)
                 {
                     creep.moveTo(construct);
                 }
                 }
                 
                 if(creep.pos.roomName != 'W28N58')
                 {
                     creep.memory.state = 'move';
                 }
                 
                 if(creep.carry.energy == 0)
                 {
                     creep.memory.state = 'refill';
                 }
            break;

            case 'refill':
                var container = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 250});
                if(creep.pos.roomName != 'W28N58')
                {
                    creep.moveTo(Game.flags.rallyHere);
                }
                else
                if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(container);
                   }
                if(creep.carry.energy == creep.carryCapacity)
                {
                    creep.memory.state = 'move';
                }
            break;
        }
    }


};