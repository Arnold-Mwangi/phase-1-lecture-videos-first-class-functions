function handleStudents(array){
    for(let item of array){
        console.log(item)
    }
}

function capitalizeArray(array){
    let newArray = [];
    for(let item of array){
        newArray.push(item.toUpperCase());
    }
    console.log(newArray);
}

let studentsList = function(func){
    list = ["Arnold", "Kim", "Mashaa"];
    func(list)
}

studentsList(handleStudents)
studentsList(capitalizeArray)