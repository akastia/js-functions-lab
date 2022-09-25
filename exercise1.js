fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json => {
    const trueCompleted = json.filter((todo, index) => {
        console.log(`${todo.title} - ${todo.completed} `);
        return todo.completed === "true";
    });
    console.log(trueCompleted);
})
.catch(function(err) {
    console.log(err);
});
    