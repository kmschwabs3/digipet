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
		feeding: 100,
		pets: 100,
		sleep:100,
		playTime: 100
	}

	var isAlive = true; 

	function countDown() {
		digiPet.feeding -= 5;
		digiPet.pets -= 10;
		digiPet.sleep -= 4;
		digiPet.playTime -= 2;

		if (isAlive === true){

			//warning code block
			if (digiPet.feeding < 30) {
				console.log('Better feed ' + digiPet.digiPetName + " before he dies!");
			}
			if (digiPet.pets < 10) {
				console.log('Better pet ' + digiPet.digiPetName + " before he dies!");
			}
			if (digiPet.sleep < 30) {
				console.log('Better put ' + digiPet.digiPetName + " to rest before he dies!");
			}
			if (digiPet.playTime < 15) {
				console.log('Better play with ' + digiPet.digiPetName + " before he dies!");
			}

			//pet dying code			
			if (digiPet.feeding <= 0) {
				console.log(digiPet.digiPetName + ' has died from starvation.');
				clearInterval(countDownTimer); 
			} else if (digiPet.pets == 0) {
				console.log(digiPet.digiPetName + ' has dies from lack of love.');
				clearInterval(countDownTimer);
			} else if (digiPet.sleep == 0) {
				console.log(digiPet.digiPetName + ' has dies from lack of sleep.');
				clearInterval(countDownTimer);
			} else if (digiPet.playTime == 0) {
				console.log(digiPet.digiPetName + ' has dies from lack of excersise.');
				clearInterval(countDownTimer);
			}
		}
	}

	var countDownTimer = setInterval(function() {
		countDown()
	}, 500);

	event.preventDefault();
}