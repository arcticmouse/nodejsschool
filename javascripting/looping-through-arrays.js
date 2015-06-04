var pets = ['cat', 'dog', 'rat'];
/*for(var i = 0; i < pets.length; i++){
	pets[i] = pets[i] + 's';
}*/

function plural(e, i, a){
	a[i] = e + 's';
} //end function

pets.forEach(plural);
console.log(pets);