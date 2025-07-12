//@ts-ignore
const prompt = require("prompt-sync")();

let students = [];

function showMenu() {
    console.log("\n=====STUDENTS GRADE MANAGEMENT=====");
    console.log("1. Add a Student");
    console.log("2. View All Students");
    console.log("3. Search students by Name");
    console.log("4. Delete a Student");
    console.log("5. Show Statistics (Highest, Lowest, Average)");
    console.log("6. Exit");
}

let keepRunning = true;
while (keepRunning) {
    showMenu()
    
    const choice = prompt("Select option (1-6): ");
    
    if (choice === "1") {
        addStudent();
    } else if (choice === "2") {
        viewStudents();
    } else if (choice === "3") {
        searchStudent();
    } else if (choice === "4") {
        deleteStudent()
    } else if (choice === "5") {
        showStatistics()
    } else if (choice === "6") {
        console.log("Goodbye!");
        keepRunning = false;
    } else {
        console.log("Invalid choice. Please select 1 to 6")
    }
}

function addStudent() {

    const name = prompt("Enter student name: ").trim();
    
    const scoreInput = prompt("Enter student score (1-100): ");
    const score = parseFloat(scoreInput);

    if (name === "") {
        console.log("Name cannot be empty.");
        return;
    }
    if (isNaN(score) || score < 0 || score > 100 ) {
        console.log("Invalid score. Please enter score between 0 and 100.");
        return;
    }
    const student = {
        name: name,
        score: score
    }
    students.push(student);
    console.log(`Student "${name}" with score ${score} has been added successfully.`);
}

function viewStudents() {
    console.log("\n=====STUDENT LIST=====");
    
    if (students.length === 0) {
        console.log("No student records found.");
        return;
    }

    students.forEach((student, index) => {
        console.log(`${index + 1}. ${student.name} - score: ${student.score}`)
    });
}

function searchStudent() {

    const keyword = prompt("Enter student name to search: ").trim().toLowerCase();

    const result = students.filter(student =>
        student.name.toLowerCase().includes(keyword)
    );

    console.log("\n=====SEARCH RESULTS=====");

    if (result.length === 0) {
        console.log("No matching student found.")
    } else {
        result.forEach((student, index) => {
            console.log(`${index + 1}. ${student.name} - score: ${student.score}`)
        });
    }
}

function deleteStudent() {
    if (students.lenght === 0) {
        console.log("No student records to delete.");
        return;
    }

    console.log("\n=====DELETE STUDENT=====");

    students.forEach((student, index) => {
        console.log(`${index + 1}. ${student.name} - with score: ${student.score}`)
    });

    const input = prompt("Enter the number of student to delete: ");
    const index = parseFloat(input);

    if (isNaN(index) || index < 1 || index > students.lenght) {
        console.log("Invalid input. No student deleted.");
        return;
    }
    const removed = students.splice(index - 1, 1);
    console.log(`Student "${removed[0].name}" has been deleted successfully.`);
}

function showStatistics() {
    if (students.length === 0) {
        console.log("No student records found.");
        return;
    }

    const scores = students.map(student => student.score);
    
    const highest = Math.max(...scores);
    const lowest = Math.min(...scores);
    const sum = scores.reduce((total, score) => total + score, 0);
    const average = sum / scores.length;

    console.log("\n=====STATISTICS=====");
    console.log(`Highest score: ${highest}`);
    console.log(`Lowest score: ${lowest}`);
    console.log(`Average score: ${average.toFixed(2)}`);

}