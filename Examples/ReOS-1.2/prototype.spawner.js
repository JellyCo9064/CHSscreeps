require('prototype.spawn')();

module.exports = function(){
    StructureSpawn.prototype.spawnCreeps = 
        function(minHarvesters, maxHarvesters, harvesterPow, minUpgraders, maxUpgraders, upgraderPow, minBuilders, maxBuilders, builderPow, minRepairers, maxRepairers, repairerPow, minWallRepairers, maxWallRepairers, wallRepairerPow, minTanks, maxTanks, minHealers, maxHealers, minBricks, maxBricks, minRBuilders, maxRBuilders)
    {
         var resRooms = [];//'W57N21'];
         var rmCount = [_.sum(Game.creeps, (c) => c.memory.ore == 'RM-00'), _.sum(Game.creeps, (c) => c.memory.ore == 'RM-01'), _.sum(Game.creeps, (c) => c.memory.ore == 'RM-02'), _.sum(Game.creeps, (c) => c.memory.ore == 'RM-03')];
         var minRMiners = 0;//rmCount.length;
         var numOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
         var numOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
         var numOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
         var numOfRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'repairer');
         var numOfWallRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer');
         var numOfRoamers = _.sum(Game.creeps, (c) => c.memory.role == 'roamer');
         var numOfTanks = _.sum(Game.creeps, (c) => c.memory.role == 'tank');
         var numOfHealers = _.sum(Game.creeps, (c) => c.memory.role == 'healer');
         var numOfBricks = _.sum(Game.creeps, (c) => c.memory.role == 'brick');
         var numOfRBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'RBuilder');
         var numOfRMiners = _.sum(Game.creeps, (c) => c.memory.role == 'RMiner');
         var numOfMinersE1 = _.sum(Game.creeps, (c) => c.memory.miningSpot == '579fa8860700be0674d2dc40');
         var numOfMinersE2 = _.sum(Game.creeps, (c) => c.memory.miningSpot == '579fa8860700be0674d2dc3f');
         var minRoamers = resRooms.length;
         var maxRoamers = resRooms.length * 2;


         var harvesterRatio = numOfHarvesters / minHarvesters;
         var upgraderRatio = numOfUpgraders / minUpgraders;
         var builderRatio = numOfBuilders / minBuilders;
         var repairerRatio = numOfRepairers / minRepairers;
         var wallRepairerRatio = numOfWallRepairers / minWallRepairers;
         var roamerRatio = numOfRoamers / minRoamers;
         var tankRatio = numOfTanks / minTanks;
         var healerRatio = numOfHealers / minHealers;
         var brickRatio = numOfBricks / minBricks;
         var RBuilderRatio = numOfRBuilders / minRBuilders;
         var RMinerRatio = numOfRMiners / minRMiners;


         var numRoles = 11;

         var energy = 300;
         var name = undefined;

         var newCreep = undefined;
         var smallRatio = 1.0;

         var energy1 = 3;
         var energy2 = 3;
         
         

         
         if(harvesterRatio < smallRatio && harvesterRatio < 1 && minHarvesters != 0)
         {
              smallRatio = harvesterRatio;
              newCreep = 'harvester';
         }
         if(upgraderRatio < smallRatio && upgraderRatio < 1 && minHarvesters != 0)
         {
              smallRatio = upgraderRatio;
              newCreep = 'upgrader';
         }
         if(builderRatio < smallRatio && builderRatio < 1 && minBuilders != 0)
         {
              smallRatio = builderRatio;
              newCreep = 'builder';
         }
         if(repairerRatio < smallRatio && repairerRatio < 1 && minRepairers != 0)
         {
             smallRatio = repairerRatio;
             newCreep = 'repairer';
         }
         if(wallRepairerRatio < smallRatio && wallRepairerRatio < 1 && minWallRepairers != 0)
         {
             smallRatio = wallRepairerRatio;
             newCreep = 'wallRepairer';
         }
         if(RBuilderRatio < smallRatio && RBuilderRatio < 1 && minRBuilders != 0)
         {
             smallRatio = RBuilderRatio;
             newCreep = 'RBuilder';
         }
         if(RMinerRatio < smallRatio && RMinerRatio < 1 && minRMiners != 0)
         {
             smallRatio = RMinerRatio;
             newCreep = 'RMiner';
         }
         if(healerRatio < smallRatio && healerRatio < 1 && minHealers != 0)
                  {
                      smallRatio = healerRatio;
                      newCreep = 'healer';
                  }
         if(tankRatio < smallRatio && tankRatio < 1 && minTanks != 0)
                  {
                      smallRatio = tankRatio;
                      newCreep = 'tank';
                  }
                  if(brickRatio < smallRatio && brickRatio < 1 && minBricks != 0)
                  {
                      smallRatio = brickRatio;
                      newCreep = 'brick';
                  }
         if(0.67 < smallRatio && roamerRatio < 1 && minRoamers != 0)
         {
             smallRatio = .9;
             newCreep = 'roamer';
         }


         if(smallRatio == 1.0)
         {
         smallRatio == 999.0;
         if(harvesterRatio < smallRatio && numOfHarvesters < maxHarvesters && minHarvesters != 0)
         {
              smallRatio = harvesterRatio;
              newCreep = 'harvester';
              console.log("seting Newcreep");
         }
         if(upgraderRatio < smallRatio && numOfUpgraders < maxUpgraders && minUpgraders != 0)
         {
              smallRatio = upgraderRatio;
              newCreep = 'upgrader';
              console.log("seting Newcreep");
         }
         if(builderRatio < smallRatio && numOfBuilders < maxBuilders && minBuilders != 0)
         {
              smallRatio = builderRatio;
              newCreep = 'builder';
              console.log("seting Newcreep");
         }
         if(repairerRatio < smallRatio && numOfRepairers < maxRepairers && minRepairers != 0)
         {
             smallRatio = repairerRatio;
             newCreep = 'repairer';
             console.log("seting Newcreep");
         }
         if(wallRepairerRatio < smallRatio && numOfWallRepairers < maxWallRepairers && numOfWallRepairers != 0)
         {
             smallRatio = wallRepairerRatio;
             newCreep = 'wallRepairer';
             console.log("seting Newcreep");
         }
         if(healerRatio < smallRatio && numOfHealers < maxHealers && minHealers != 0)
                  {
                      smallRatio = healerRatio;
                      newCreep = 'healer';
                  }
         if(tankRatio < smallRatio && numOfTanks < maxTanks && minTanks != 0)
                  {
                      smallRatio = tankRatio;
                      newCreep = 'tank';
                  }
         if(roamerRatio < smallRatio && numOfRoamers < maxRoamers && numOfRoamers != 0)
         {
             smallRatio = roamerRatio;
             newCreep = 'roamer';
             console.log("seting Newcreep");
         }
         }
         
         if(numOfHarvesters < 1 && this.room.energyAvailable >= 200)
         {
             this.createCreep([WORK, CARRY, MOVE], undefined, {role: 'harvester', working: false});
             console.log("Spawned new Harvester");
         }
        else
         if(numOfMinersE2 < energy2)
         {
             if( this.room.energyAvailable >= 300)
             {
            this.createCreep([WORK, WORK, CARRY,  MOVE], undefined,
                                        { role: 'miner', working: false, miningSpot: '579fa8860700be0674d2dc3f'});
                                        console.log("Spawned new Miner");
             }
         }
         else
         if(numOfMinersE1 < energy1)
         {
             if(this.room.energyAvailable >= 300)
             {
            this.createCreep([WORK, WORK, CARRY,  MOVE], undefined,
                                        { role: 'miner', working: false, miningSpot: '579fa8860700be0674d2dc40'});
                                        console.log("Spawned new Miner");
             }
         }
         else if(numOfMinersE1 == 0 && this.room.energyAvailable >= 300)
         {
            this.createCreep([WORK, CARRY, CARRY, CARRY,  MOVE], undefined,
                                        { role: 'miner', working: false, miningSpot: '579fa91e0700be0674d2ec93'});
                                        console.log("Spawned new Miner");
         }
         else
         if(numOfMinersE2 == 0 && this.room.energyAvailable >= 300)
         {
            this.createCreep([WORK, CARRY, CARRY, CARRY,  MOVE], undefined,
                                        { role: 'miner', working: false, miningSpot: '579fa91e0700be0674d2ec94'});
                                        console.log("Spawned new Miner");
         }
         else
         if(numOfHarvesters < 2 && this.room.energyAvailable >= 300)
         {
             this.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'harvester', working: false});
             console.log("Spawned new Harvester");
         }
         else
         if(newCreep != undefined)
         {
            if(newCreep != 'upgrader' && newCreep != 'roamer' && newCreep != 'tank' && newCreep != 'healer' && newCreep != 'harvester' && newCreep != 'brick' && newCreep != 'RMiner' && newCreep != 'RBuilder' && this.room.energyAvailable >= energy)
            {
            switch(newCreep)
            {
            case 'upgrader':
            energy = energy * upgraderPow;
            break;
            case 'builder':
            energy = energy * builderPow;
            break;
            case 'repairer':
            energy = energy * repairerPow;
            break;
            case 'wallRepairer':
            energy = energy * wallRepairerPow;
            break;
            }
            this.createCustomeCreep(energy, newCreep);
            console.log("Spawned new " + newCreep + ".");
            }
            else if(newCreep == 'upgrader' && this.room.energyAvailable >= 700)
            {
                this.createCreep([WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], undefined, {role: 'upgrader', working: false});
                console.log("Spawned new " + newCreep + ".");
            }
            else if(newCreep == 'roamer' && this.room.energyAvailable >= 1300)
            {
                for(i = 0; i < resRooms.length; i++)
                {
                    if(_.sum(Game.creeps, (c) => c.memory.newroom == resRooms[i]) < 1)
                    {
                    this.createCreep([CLAIM, CLAIM, MOVE, MOVE], undefined, {role: 'roamer', state: 'roam', job: 'claimer', newroom: resRooms[i]});
                    console.log("Spawned new " + newCreep + ".");
                    break;
                    }
                }
            }
            else if(newCreep == 'tank' && this.room.energyAvailable >= 430)
            {
            this.createCreep([ TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK], undefined, {role: 'tank', state: 'move'});
            console.log("Spawned new " + newCreep + ".");
            }
            else if(newCreep == 'healer' && this.room.energyAvailable >= 400)
            {
            this.createCreep([ TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, HEAL], undefined, {role: 'healer', state: 'move'});
            console.log("Spawned new " + newCreep + ".");
            }
            else if(newCreep == 'harvester' && this.room.energyAvailable >= 300)
            {
                this.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'harvester', working: false});
             console.log("Spawned new Harvester");
            }
            else if(newCreep == 'brick' && this.room.energyAvailable >= 450)
            {
                this.createCreep([TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], undefined, {role: 'brick'});
            console.log("Spawned new " + newCreep + ".");
            }
            else if(newCreep == 'RMiner' && this.room.energyAvailable >= 900)
            {
                var oreSite;
                for(i = 0; i < rmCount.length; i++)
                {
                    if(rmCount[i] < 1)
                    {
                        oreSite = i;
                        break;
                    }
                }
                this.createCreep([WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], undefined, {role: 'RMiner', state: 'move', ore: 'RM-0' + oreSite});
            console.log("Spawned new " + newCreep + ".");
            }
            else if(newCreep == 'RBuilder' && this.room.energyAvailable >= 800)
            {
                this.createCreep([WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], undefined, {role: 'RBuilder', state: 'move'});
            console.log("Spawned new " + newCreep + ".");
            }
         
         
         }






         console.log("Miners: " + _.sum(Game.creeps, (c) => c.memory.role == 'miner')
         + "    Harvesters: " + numOfHarvesters + "/" + minHarvesters + "-" + maxHarvesters
         + "    Upgraders: " + numOfUpgraders + "/" + minUpgraders + "-" + maxUpgraders
         + "    Builders: " + numOfBuilders + "/" + minBuilders + "-" + maxBuilders
         + "    Repairers: " + numOfRepairers + "/" + minRepairers + "-" + maxRepairers
         + "    WallRepairers: " + numOfWallRepairers + "/" + minWallRepairers + "-" + maxWallRepairers
         + "    Roamers: " + numOfRoamers + "/" + minRoamers + "-" + maxRoamers
         + "    Healers: " + numOfHealers + "/" + minHealers + "-" + maxHealers
         + "    Tanks: " + numOfTanks + "/" + minTanks + "-" + maxTanks
         + "    Bricks: " + numOfBricks + "/" + minBricks + "-" + maxBricks
         + "    Energy: " + Game.spawns.Spawn1.room.energyAvailable + "/" +  Game.spawns.Spawn1.room.energyCapacityAvailable
         + "    Smallest Ratio: " + smallRatio);


    }
    

};