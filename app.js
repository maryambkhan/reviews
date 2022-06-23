const reviews = [
	{
		id: 1,
		name: "Maryam",
		job: "web developer",
		img: "https://images.pexels.com/photos/12447940/pexels-photo-12447940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem atque natus culpa, quibusdam sunt	quis voluptates, iure dolores iste qui numquam quaerat nemo beatae saepe, officiis delectus vero officia in."
	},
	{
		id: 2,
		name: "Saklain",
		job: "QA",
		img: "https://images.pexels.com/photos/12447940/pexels-photo-12447940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem atque natus culpa, quibusdam sunt	quis voluptates, iure dolores iste qui numquam quaerat nemo beatae saepe, officiis delectus vero officia in."
	},
	{
		id: 3,
		name: "Khan",
		job: "IT",
		img: "https://images.pexels.com/photos/12447940/pexels-photo-12447940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem atque natus culpa, quibusdam sunt	quis voluptates, iure dolores iste qui numquam quaerat nemo beatae saepe, officiis delectus vero officia in."
	}
];

const img = document.getElementById("cat-img"); 
const author = document.getElementById("author");  
const job = document.getElementById("job"); 
const info = document.getElementById("info");   

const backBtn = document.querySelector(".back-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function (){
	showPerson[currentItem];
});

function showPerson (person) {
	const item = reviews[person];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}

nextBtn.addEventListener("click", function(){
	currentItem++;
	if (currentItem > reviews.length-1){
		currentItem = 0;

	}
	showPerson(currentItem);
});

backBtn.addEventListener("click", function(){
	currentItem--;
	if (currentItem < 0){
		currentItem = reviews.length-1;

	}
	showPerson(currentItem);
});
