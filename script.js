const input = document.getElementById('input');
const todoBtn = document.getElementById('submit');
const todoList = document.getElementById('todolist');
//addevent lsteners
todoBtn.addEventListener('click', addTodo);
//functions
function addTodo(event) {
	event.preventDefault();
	//creating todo div

	const div = document.createElement('div');
	div.classList.add('tododiv');

	//creating li
	const todoItem = document.createElement('li');
	todoItem.classList.add('todoitem');
	todoItem.innerText = input.value;
	div.appendChild(todoItem);

	//completed btn
	const completedBtn = document.createElement('button');
	completedBtn.innerText = '_/';
	completedBtn.classList.add('completedbtn');
	div.appendChild(completedBtn);

	//completed btn
	const trashBtn = document.createElement('button');
	trashBtn.innerText = 'X';
	trashBtn.classList.add('trashbtn');
	div.appendChild(trashBtn);

	//append to the ul
	todoList.appendChild(div);
	input.value = '';
	div.addEventListener('click', delcheck);
}

function delcheck(e) {
	const item = e.target;
	if (item.classList[0] === 'trashbtn') {
		const todo = item.parentElement;
		todo.classList.add('fall');
		todo.addEventListener('transitionend', function () {
			todo.remove();
		})
	} else if (item.classList[0] === 'completedbtn') {
		const todo = item.parentElement;
		todo.classList.toggle('completed');
	}
}