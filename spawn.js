module.exports.spawnLoop = function(roomnum){
	var releSpawn = Game.spawns['Spawn'+roomnum];
	var counts= {};
	for(let name in Memory.creeps){
		counts[Memory.creeps[name].role]++;
	}
	for(let i = 0; i< Memory.rolesPrior;i++){
		if(counts[Memory.rolesPrior[i]] < Memory.roles[Memory.rolesPrior[i]].min){
			if(releSpawn.canCreateCreep(Memory.roles[Memory.rolesPrior[i]].parts)){
				releSpawn.createCreep(Memory.roles[Memory.rolesPrior[i]].parts,Memory.rolesPrior[i]+(counts[Memory.creeps[name].role]+1, {role:Memory.rolesPrior[i]}));
				console.log('made a creep');
				counts[Memory.rolesPrior[i]]++;
				return true;
			} else {
				console.log('need more energy');
				return false;
			}
		}
	}
	for(let i = 0; i< Memory.rolesPrior;i++){
		if(counts[Memory.rolesPrior[i]] < Memory.roles[Memory.rolesPrior[i]].max){
			if(releSpawn.canCreateCreep(Memory.roles[Memory.rolesPrior[i]].parts)){
				releSpawn.createCreep(Memory.roles[Memory.rolesPrior[i]].parts,Memory.rolesPrior[i]+(counts[Memory.creeps[name].role]+1, {role:Memory.rolesPrior[i]}));
				console.log('made an extra creep');\
				counts[Memory.rolesPrior[i]]++;
				return true;
			} else {
				console.log('need more energy for extra creeps');
				return false;
			}
		}
	}
}