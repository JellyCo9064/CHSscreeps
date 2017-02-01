require('prototype.spawner')();

var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleWallRepairer = require('role.wallRepairer');
var roleRoamer = require('role.roamer');
var roleTank = require('role.tank');
var roleHealer = require('role.healer');
var roleMiner = require('role.miner');
var roleBrick = require('role.brick');
var roleRBuilder = require('role.remoteBuilder');
var roleRMiner = require('role.remoteMiner');

module.exports.loop = function () {
    
    var minHarvesters = 4;
    var minBuilders = 2;
    var minUpgraders = 6;
    var minRepairer = 2;
    var minWallRepairer = 2;
    var minRoamers = 0;
    var minTanks = 0;
    var minHealers = 0;
    var minBricks = 0;
    var minRBuilders = 0;
    
    

    var maxHarvesters = 6;
    var maxBuilders = 4;
    var maxUpgraders = 8;
    var maxRepairer = 4;
    var maxWallRepairer = 4;
    var maxRoamers = 3;
    var maxTanks = 0;
    var maxHealers = 0;
    var maxBricks = 0;
    var maxRBuilders = 0;

    var harvesterPow = 1;
    var upgraderPow = 1;
    var builderPow = 1;
    var repairerPow = 1;
    var wallRepairePow = 1;
    
    for (let name in Memory.creeps)
    {
        if(Game.creeps[name] == undefined) {
            delete Memory.creeps[name];
        }
    }
    
    
    for (let name in Game.creeps)
    {
        
        
        var creep = Game.creeps[name];
        
        
        
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        else if(creep.memory.role == 'upgrader')
        {
            roleUpgrader.run(creep);
        }
        else if(creep.memory.role == 'builder')
        {
            roleBuilder.run(creep);
        }
        else if(creep.memory.role == 'repairer')
        {
            roleRepairer.run(creep);
        }
        else if(creep.memory.role == 'wallRepairer')
        {
            roleWallRepairer.run(creep);
        }
        else if(creep.memory.role == 'roamer')
        {
            roleRoamer.run(creep);
        }
        else if(creep.memory.role == 'tank')
        {
            roleTank.run(creep);
        }
        else if(creep.memory.role == 'healer')
        {
            roleHealer.run(creep);
        }
        else if(creep.memory.role == 'miner')
        {
            roleMiner.run(creep);
        }
        else if(creep.memory.role == 'brick')
        {
            roleBrick.run(creep);
        }
        else if(creep.memory.role == 'RBuilder')
        {
            roleRBuilder.run(creep);
        }
        else if(creep.memory.role == 'RMiner')
        {
            roleRMiner.run(creep);
        }
        
    }
    
    var towers = Game.spawns.Spawn1.room.find(FIND_STRUCTURES, 
    {
        filter: (s) => s.structureType == STRUCTURE_TOWER
    });
    
    for(let tower of towers) {
        var target = tower.pos.findInRange(FIND_HOSTILE_CREEPS, 30);
        target = tower.pos.findClosestByRange(target);
        if(target != undefined)
        {
            tower.attack(target);
        }
    }

    Game.spawns.Spawn1.spawnCreeps
    (
     minHarvesters, maxHarvesters, harvesterPow,
     minUpgraders, maxUpgraders, upgraderPow,
     minBuilders, maxBuilders, builderPow,
     minRepairer, maxRepairer, repairerPow,
     minWallRepairer, maxWallRepairer, wallRepairePow,
     minTanks, maxTanks,
     minHealers, maxHealers,
     minBricks, maxBricks,
     minRBuilders, maxRBuilders
     );
    

};

