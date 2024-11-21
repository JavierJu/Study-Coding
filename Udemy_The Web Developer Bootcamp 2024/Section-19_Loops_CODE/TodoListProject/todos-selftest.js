// "new" - Add A Todo
// "list" - List All Todos
// "delete" - Remove Specific Todo
// "quit" - Quit App


const TodoList = ['123', '234', '356'];

let input = prompt("What do you want to do?");
while (!input) {
    input = prompt("Enter a valid value!");
}

while (input !== 'quit') {
    if (input === 'list') {
        console.log(`*********************`)
        for (let i = 0; i < TodoList.length; i++) {
            console.log(`${i}: ${TodoList[i]}`);
        }
        console.log(`*********************`)
    } else if (input === 'delete') {
        const index = parseInt(prompt("Enter index number we want to delete!"));
        const deleteNum = TodoList.splice(index, 1);
        console.log(`Deleted index number ${deleteNum}!`);
    } else if (input === 'new') {
        const newTodoList = prompt("Please add your todo list!");
        TodoList.push(newTodoList);
        console.log(`Added ${newTodoList} in your todo list!`);
    }
    input = prompt("What do you want to do?");
}

console.log("Quited your App");

