module.exports = {
run: function(creep)
{
switch(creep.memory.state)
{
case 'attack':
var enemie = undefined;

if(creep.room != 'W28N58')
{
    if(creep.memory.speak == '1')
    {
        creep.memory.speak = '2';
        creep.say("You Will", true);
    }
    if(creep.memory.speak == '2')
    {
        creep.memory.speak = '0';
        creep.say("Make Room", true);
    }
    else
    {
        creep.memory.speak = '1';
        creep.say("For Mpos", true);
    }




enemie = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, { filter: (s) => (s.structureType == STRUCTURE_TOWER || s.structureType == STRUCTURE_CONTAINER) && s.owner != 'ACG2000'});

if(enemie == undefined || enemie == null)
{
    
    enemie = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {filter: (s) => s.owner != 'ACG2000'});
    if(enemie == undefined || enemie == null)
    {
        enemie = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, { filter: (s) => s.structureType == STRUCTURE_SPAWN && s.owner != 'ACG2000'});
       
    }
} 

if(creep.attack(enemie) == ERR_NOT_IN_RANGE && enemie != undefined)
{
    creep.moveTo(enemie);
    var nearWalls = undefined;
    nearWalls = creep.pos.findInRange(FIND_STRUCTURES, 1, {filter: (s) => s.structureType != STRUCTURE_KEEPER_LAIR && s.structureType != STRUCTURE_CONTROLLER && s.structureType != STRUCTURE_ROAD && s.structureType != STRUCTURE_CONTAINER});
    if(nearWalls != undefined)
    {
        creep.attack(nearWalls);
    }
}

} else
{
    enemie = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {filter: (s) => s.owner != 'ACG2000'});
    if(enemie == undefined)
{
}
else
if(creep.attack(enemie) == ERR_NOT_IN_RANGE)
{
    creep.moveTo(enemie);
}
}

if(enemie == undefined)
{
    creep.memory.state = 'move';
}



break;

case 'move':
if(Game.flags['attackHere'] != undefined)
{
    creep.moveTo(Game.flags['attackHere']);
}
else
{
    creep.moveTo(Game.flags['rallyHere']);
}
if(creep.room.find(FIND_HOSTILE_CREEPS, {filter: (s) => s.owner != 'ACG2000'}).length > 0)
{
    creep.memory.state = 'attack';
}
break;
}

}
};