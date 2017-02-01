module.exports = {
run: function(creep)
{
switch(creep.memory.state)
{
case 'brick':
if(Game.flags['brickHere'] != undefined)
{
    creep.moveTo(Game.flags['brickHere']);
}
else
{
    creep.moveTo(Game.flags['rallyHere']);
}
if(creep.hits < creep.hitsMax * .5)
{
    creep.memory.state = 'heal';
}
break;

case 'heal':
if(Game.flags['healHere'] != undefined)
{
    creep.moveTo(Game.flags['healHere']);
}
else
{
    creep.moveTo(Game.flags['rallyHere']);
}
if(creep.hits == creep.hitsMax)
{
    creep.memory.state = 'brick';
}
break;
default:
creep.memory.state = 'brick';
break;
}


}
};