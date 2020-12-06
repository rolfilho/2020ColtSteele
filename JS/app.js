function myFunction() {
    let myToDoList = [];
    let userInput;

    while (userInput !== "quit") {
        userInput = prompt("What do you want to do?");

        switch (userInput) {
            case "quit":
                console.log("*********");
                console.log("BYE!");
                break;
            case "new":
                let newItem = prompt("Write your new item");
                myToDoList.push(newItem);
                console.log(`${newItem} has been added to the list`);
                console.log("*********");
                break;
            case "list":
                for (let item of myToDoList){
                    console.log(`${myToDoList.indexOf(item)}: ${item}`);
                }
                console.log("*********");
                break;
            case "delete":
                let itemToBeRemoved = prompt("Which item do you want to remove?");
                myToDoList.splice(myToDoList.indexOf(itemToBeRemoved),1);
                console.log(`${itemToBeRemoved} has been removed from the list`);
                break;
            default:
               console.log("Type an valid option");
               break;
        }

    }

}