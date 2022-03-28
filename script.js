// Peter cần quản lý danh sách động vật trong sở thú, đôi khi cần thêm 1 loài vật mới vào danh sách, đôi khi cần kiểm tra xem loài vật mới đã có trong danh sách chưa, có lúc thì cần xóa một loài động vật khỏi danh sách quản lý của sở thú. Ngoài ra khi có đoàn kiểm tra tới, Peter cần in ra danh sách các loài động vật hiện đang có trong sở thú.

let animals = new Set();

function addAnimal(animal) {
	animals.add(animal);
}

function removeAnimal(animal) {
	animals.delete(animal);
}

function printAnimals() {
	console.log(animals);
}

function checkAnimal(animal) {
	return animals.has(animal);
}

addAnimal('dog');
addAnimal('cat');
addAnimal('dog');
addAnimal('cat');
addAnimal('crocodile');
addAnimal('lion');

console.log('list', printAnimals());
checkAnimal('dog');

removeAnimal('cat')
console.log('list', printAnimals());
