module.exports = {
    run: function(creep)
    {
        switch(creep.memory.state)
        {
            case 'move':
                if(!creep.pos.findInRange(FIND_FLAGS, 1))
                {
                    var goFlag = creep.memory.ore;
                    creep.goTo(Game.flags.goFlag);
                }
                else
                {
                    creep.memory.state = 'mine';
                }
            break;

            case 'mine':
                 var source = creep.pos.findInRange(FIND_SOURCES, 2);
                 if(creep.carry.energy < creep.carryCapacity)
                 {
                 creep.harvest(source);
                 }
                 else
                 {
                     creep.memory.state = 'deposit'
                 }
            break;

            case 'deposit':
                if (creep.transfer(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(container);
                }
                if(creep.carry.energy == 0)
                {
                    creep.memory.state = 'move';
                }
            break;
        }
    }


};