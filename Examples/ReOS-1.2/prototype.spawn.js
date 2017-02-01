module.exports = function() 
{
    StructureSpawn.prototype.createCustomeCreep = 
        function(energy, roleName) {
            var numParts = Math.floor(energy / 200);
            numExtraWork = 0;
            var numExtraMove = 0;
            for(let i = 0; i * 100 <= energy - (numParts * 200); i++)
                        {
                            numExtraWork = i;
                        }
            for(let i = 0; i * 50 <= energy - (numParts * 200) - (numExtraWork * 100); i++)
            {
                numExtraMove = i;
            }
            var body = [];
            for (let i = 0; i < numParts + numExtraWork; i++)
            {
                body.push(WORK);
            }
            for (let i = 0; i < numParts; i++)
            {
                body.push(CARRY);
            }
            for (let i = 0; i < numParts + numExtraMove; i++)
            {
                body.push(MOVE);
            }
            
            return this.createCreep(body, undefined, { role: roleName, working: false});
        };
};