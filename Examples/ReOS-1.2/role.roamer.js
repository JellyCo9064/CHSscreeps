

module.exports = {
    run: function(creep)
    {
        var newRoom = creep.memory.newroom;
        if(creep.memory.state == 'roam' && creep.pos.roomName == newRoom)
        {
            creep.memory.state = 'working';
            creep.say("Working");
        }
        if(creep.pos.roomName != newRoom)
        {
            creep.memory.state = 'roam';
        }
        
        switch(creep.memory.state)
        {
        
            case 'roam':
                var roomExit = creep.pos.findClosestByPath(Game.map.findExit(creep.room, newRoom));
                
                creep.moveTo(roomExit);
                
                break;
    
            case 'working':
                
                if(creep.memory.job == 'upgrader')
                {
                    
                    if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE)
                    {
                        creep.moveTo(creep.room.controller);
                    }
                }
                else 
                if(creep.memory.job == 'claimer')    
                {
                    if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE)
                    {
                        creep.moveTo(creep.room.controller);
                    }
                }
                
                break;
        }
    }
    

};