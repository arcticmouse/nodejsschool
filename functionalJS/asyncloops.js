function loadUsers(userIds, load, done) {
	var users = [];

	userIds.forEach(function(){
		load(i, function(u){
			users[i] = u;
		}); //end load
	}); //end foreach
} //end function

module.exports = loadUsers;