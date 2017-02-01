module.exports = {
run: function(creep)
{
switch(creep.memory.state)
{
case 'heal':
var target = creep.pos.findClosestByPath(FIND_CREEPS, {filter: (c) => c.hits < c.hitsMax});
if(target) {
    if(creep.heal(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}

if(creep.room.find(FIND_CREEPS, {filter: (c) => !(c.hits < c.hitsMax)}))
{
   creep.memory.state = 'move';
}
break;

case 'move':
if(Game.flags['healHere'] != undefined)
{
    creep.moveTo(Game.flags['healHere']);
}
else
{
    creep.moveTo(Game.flags['rallyHere']);
}
if(creep.room.find(FIND_CREEPS, {filter: (c) => c.hits < c.hitsMax}))
{
    creep.memory.state = 'heal';
}
//creep.memory.state = 'heal';
break;
}

}
};