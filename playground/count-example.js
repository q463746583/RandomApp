// const name = 'AAA';

const app = {
    title: "This is title",
    // subtitle : "This is ",
    option: ['One', 'Two']
};



const template = (
    <div>
        <p> Title : {app.title} </p>
        {app.subtitle && <p> Sub : {app.subtitle} </p>}
        <p>{( app.option && app.option.length) > 0  ? 'Here are your option' : 'No option' }</p>
    </div>
);


const challenge = (
    <div>  
        <h1>  {(name && name.toUpperCase()) ? name : "Anonymous"}   </h1>
        <p> 20 </p>
        <p> Location : Boston </p>
    </div>
);

let count = 0;

const addOne = () => console.log("Add One");
const minOne = () => console.log("Minus One");
const reset = () => console.log("reset");

const countTemplate = (
    <div> 
        <p>Count : {count}</p>
        <button onClick = {addOne}> Add One</button>
        <button onClick = {minOne}> Minus One</button>
        <button onClick = {reset}> Rest </button>
    </div>
);