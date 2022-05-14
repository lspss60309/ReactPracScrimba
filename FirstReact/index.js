ReactDOM.render(
    <ul>
        <li>hello</li>
        <li>haha</li>
    </ul>,
    document.getElementById("root")
)

ReactDOM.render(
    <h1>hello</h1>,
    document.getElementById("root")
)

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using。 innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root

sol:
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)
*/