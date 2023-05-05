class Task {

    constructor(name) {
        this.name = name
    }

}

class List {

    constructor(title) {
        this.title = title
        this.tasks = [ ]
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
        this.lists = [ ]
        this.selectedList = null
    }

    start() {
        let selection = this.showMainMenuOptions()

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createList()
                    break;
                case '2':
                    this.viewList()
                    break;
                case '3':
                    this.deleteList()
                    break;
                case '4':
                    this.displayAllLists()
                    break;
                default:
                    selection = 0
            }
            selection = this.showMainMenuOptions()
        }
        alert('Goodbye!')
    }
}
