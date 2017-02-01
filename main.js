//Main File--where we'll outsource everything.
var config = require('config');
function initRoles(names){
	var roles = {};
	var rolesPrior = [];
	for (let i = names.length - 1; i >= 0; i--) {
		var curRole = require('role.'+names[i]);
		roles[names[i]] = curRole;
		rolesPrior[curRole.priority] = curRole.name;
	}
	return [roles, rolesPrior];
}
var roleArr = initRoles(config.roles);
var roles = roleArr[0];
var rolesPrior = roleArr[1];
Memory.roles = roles;
Memory.rolesPrior = rolesPrior;
function loop (){
	this.config = config;
	for (let name in Memory.creeps)
    {
        if(Game.creeps[name] == undefined) {
            delete Memory.creeps[name];
        }
    }
};