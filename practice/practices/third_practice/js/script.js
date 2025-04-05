function onCheck() {
    let first = document.getElementById("first");
    let second = document.getElementById("second");
    let third = document.getElementById("third");
    let fourth = document.getElementById("fourth");
    let fifth = document.getElementById("fifth");
    let sixth = document.getElementById("sixth");
    let seventh = document.getElementById("seventh");
    let eighth = document.getElementById("eighth");
    let nineth = document.getElementById("nineth");
    let tenth = document.getElementById("tenth");

    let something = document.getElementById("practice-opisanie");

    if(first.value == "a = 5") {
        if(second.value == "if a == 5:") {
            if(third.value == '    print("Hello World!")' || third.value == "    print('Hello World!')") {
                if(fourth.value == 'else:') {
                    if(fifth.value == '    print("Why?")' || fifth.value == "    print('Why?')") {
                        something.innerHTML = "Правильно!!!";
                    } else {something.innerHTML = "Неправильно!"}
                } else {something.innerHTML = "Неправильно!"}
            } else {something.innerHTML = "Неправильно!"}
        } else {something.innerHTML = "Неправильно!"}
    } else {something.innerHTML = "Неправильно!"}
}

// Володя, это обращение к самому себе завтра, СДЕЛАЙ 8 ЗАДАНИЙ, потом СДЕЛАЙ ПОДСВЕТКУ если не лень