fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json => {
    console.log(json)

    const completedCalculator = json.reduce((total, todo) => {
        if (todo["completed"] === true)
        total[todo.userId] = (total[todo.userId] || 0) + 1;
        return total;
    }, {})
    console.log(completedCalculator) })    
S
.catch(function(err) {
    console.log(err);
});
    