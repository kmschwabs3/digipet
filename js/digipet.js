function createPet(){

	var animalName = document.getElementById('petName').value;
	var typeAnimal = document.getElementsByName('gridRadios');
	var type = '';

		// loops through radio buttons
	for (var i = 0; i < typeAnimal.length; i++) {
		if(typeAnimal[i].checked){
			type = typeAnimal[i].value;
			break;
		}
	}
	// create object
	var digiPet = {
		digiPetName: animalName,
		digiPetType: type,
		health: 100,
		feeding: 100,
		pets: 100,
		sleep:100,
		playTime: 100
	}
	alert(digiPet);
}