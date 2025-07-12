function createHistoryManager() {
    let undoStack = [];
    let redoStack = [];

    function doAction(action) {
        console.log(`Action performed: ${action}`);
        undoStack.push(action);
        redoStack = [];
    }

    function undo() {
        if (undoStack.length === 0) {
            console.log("Nothing to undo.");
            return;
        }

        const action = undoStack.pop();
        redoStack.push(action);
        console.log(`undo: ${action}`);
    }

    function redo() {
        if (redoStack.length === 0) {
            console.log("Nothing to redo.");
            return;
        }

        const action = redoStack.pop();
        undoStack.push(action);
        console.log(`Redo: ${action}`);
    }

    function showHistory(){
        console.log("Undo Stack:", [...undoStack]);
        console.log("Redo Stack:", [...redoStack]);
    }

    return {
        doAction,
        undo,
        redo,
        showHistory
    };
}

const editor = createHistoryManager();

editor.doAction("Draw a Circle");
editor.doAction("Write a Title");
editor.doAction("Add Image");

editor.undo();
editor.undo();
editor.redo();
editor.showHistory();