class Task {

    constructor(name) {
        this.name = name;
    }

    describe() {
        return `${this.name}`;
        }

}

class List {

    constructor(title) {
        this.title = title;
        this.tasks = [];
    }

    addTask(task) {
        if (task instanceof Task) {
            this.tasks.push(task)
        } else {
            throw new Error(`You can only add an instance of Task. Argument is not a task: ${task}`)
        }
    }

}

class Menu {
    constructor() {
        this.lists = [];
        this.selectedList = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createList();
                    break;
                case '2':
                    this.viewList();
                    break;
                case '3':
                    this.deleteList();
                    break;
                case '4':
                    this.displayAllLists();
                    break;
                default:
                    selection = 0
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!')
    }

    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create a list
        2) View a list
        3) Delete a list
        4) Display all lists
        `);
    }

    showListMenuOptions(listInfo) {
        return prompt(`
        0) Back
        1) Create a task
        2) Delete a task
        ----------------------
        ${listInfo}
        `);
    }

    displayAllLists() {
        let listString = '';
        for (let i = 0; i < this.lists.length; i++) {
            listString += i + ') ' + this.lists[i].title + '\n';
        }
        alert(listString);
    }

    createList() {
        let title = prompt('Enter title for new list:');
        this.lists.push(new List(title))
    }

    viewList() {

        let index = prompt('Enter the index of the list you want to view:');
        if (index > -1 && index < this.lists.length) {
            this.selectedList = this.lists[index];
            let description = 'Team Name: ' + this.selectedList.title + '\n';
        

            for (let i = 0; i < this.selectedList.tasks.length; i++) {
            description += i + ') ' + this.selectedList.tasks[i].describe() + '\n';
            }

            let selection1 = this.showListMenuOptions(description);
            switch (selection1) {
                case '1':
                    this.createTask();
                    break;
                case '2':
                    this.deleteTask();
            }
        }

    }

    deleteList() {
        let index = prompt('Enter the index of the list you want to remove:');
        if (index > -1 && index < this.lists.length) {
            this.lists.splice(index, 1);
        }
    }

    createTask() {
        let name = prompt('Enter name or description of new task:');
        this.selectedList.addTask(new Task(name));
    }

    deleteTask() {
        let index = prompt('Enter the index of the task you want to remove:')
        if (index > -1 && index < this.selectedList.tasks.length) {
            this.selectedList.tasks.splice(index, 1);
        }
    }

}

let menu = new Menu()
menu.start()
