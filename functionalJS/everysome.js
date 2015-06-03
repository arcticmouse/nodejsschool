//The every() method tests whether all elements in the array pass the test implemented by the provided function.
//The some() method tests whether some element in the array passes the test implemented by the provided function.
function checkUsersValid(goodUsers){
  return function allUsersValid(submittedUsers){
    return submittedUsers.every(function (su){
      return goodUsers.some(function (g){
        return su.id == g.id;
      })
    });
  }; //end allUsersValid
} // end checkUsersValid

module.exports = checkUsersValid;