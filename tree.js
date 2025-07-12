const fileTree = {
    home: {
        document: {
            resume: "resume.pdf",
            project: "project.docx"
        },
        music: {
            rock: {
                classic: "bohemian.mp3"
            }
        },
        photos: "image1.jpg"
    },
    downloads: {
        setup: "installer.exe"
    }
};

function printTree(obj, indent = "") {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            console.log(`${indent} ${key}/`);
            printTree(obj[key], indent + "  ");
        } else {
            console.log(`${indent} ${key} - ${obj[key]}`);
        }
    }
}

printTree(fileTree);