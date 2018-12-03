
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


ReactDOM.render(template, document.getElementById('app'));