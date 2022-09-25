fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json => {
    console.log(json)

    const completedCalculator = json.reduce((total, todo) => {
        return total + (todo["completed"] === true ? 1 : 0)
    }, 0);
    console.log(completedCalculator) })

.catch(function(err) {
    console.log(err);
});
    