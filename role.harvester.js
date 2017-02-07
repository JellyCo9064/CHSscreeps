var roleHarvester = {
	name: 'harvester',
	priority:1, 
	max:2,
	min:1,
	parts: ['WORK', 'MOVE', 'CARRY'],
	loop: function(creep){
		
		for (var name in Game.rooms)
		{
			if (Game.rooms[name].energyAvailable == Game.rooms[name].energyCapacityAvailable && creep.carry.energy == creep.carryCapacity)
			{
				creep.moveTo(Game.spawns['Spawn1']);//or some other thing.	
			}
		}
		
		var droppedResources = creep.room.find(FIND_DROPPED_RESOURCES);
		if (droppedResources.length > 0)
		{
			creep.moveTo(droppedResources[0]);
			creep.harvest(droppedResources[0]);
		}
		else
		{
        		if (creep.carry.energy == 0)
			{
				var sources = creep.room.find(FIND_SOURCES);
				if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE)
				{ 
				    	creep.moveTo(sources[0]);
				}
			}
			if (creep.carry.energy == creep.carryCapacity)
			{
				var targets = creep.room.find(FIND_STRUCTURES, (structure) => {filter: {return (structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;}});
				if (targets.length > 0)								//add some stuff here ^
				{
					if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
					{
					    	creep.moveTo(targets[0]);
					}
				}
			}
		}
	}
};
module.exports = roleHarvester;
