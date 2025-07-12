// @ts-ignore
const prompt = require("prompt-sync")();

let tasks = [];

function showMenu() {
    console.log("\n===== TO-DO LIST MENU =====");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Delete Task");
    console.log("4. Mark Task as Completed");
    console.log("5. Exit");
}

function main() {
    while (true) {
        showMenu();
        const choice = prompt("Choose an option (1-5): ");

        if (choice === "1") {
            const task = prompt("Enter the task: ");
            tasks.push({ name: task, completed: false });
            console.log("Task added!");

        } else if (choice === "2") {
            console.log("\nYour Tasks:");
            if (tasks.length === 0) {
                console.log("No tasks yet.");
            } else {
                tasks.forEach((task, index) => {
                    const status = task.completed ? "Yes" : "No";
                    console.log(`${index + 1}. ${task.name} [Completed: ${status}]`);
                });
            }

        } else if (choice === "3") {
            if (tasks.length === 0) {
                console.log("No tasks to delete.");
            } else {
                tasks.forEach((task, index) => {
                    const status = task.completed ? "Yes" : "No";
                    console.log(`${index + 1}. ${task.name} [Completed: ${status}]`);
                });
                const delIndex = parseInt(prompt("Enter the task number to delete: "));
                if (isNaN(delIndex) || delIndex < 1 || delIndex > tasks.length) {
                    console.log("Invalid task number.");
                } else {
                    tasks.splice(delIndex - 1, 1);
                    console.log("Task deleted!");
                }
            }

        } else if (choice === "4") {
            if (tasks.length === 0) {
                console.log("No tasks to mark.");
            } else {
                tasks.forEach((task, index) => {
                    const status = task.completed ? "Yes" : "No";
                    console.log(`${index + 1}. ${task.name} [Completed: ${status}]`);
                });
                const compIndex = parseInt(prompt("Enter the task number to mark as completed: "));
                if (isNaN(compIndex) || compIndex < 1 || compIndex > tasks.length) {
                    console.log("Invalid task number.");
                } else {
                    tasks[compIndex - 1].completed = true;
                    console.log("Task marked as completed!");
                }
            }

        } else if (choice === "5") {
            console.log("Goodbye!");
            break;

        } else {
            console.log("Invalid choice. Please select between 1 and 5.");
        }
    }
}

main();
