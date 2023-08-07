function TodoItem(props){
    //We receive the properties and display them in each item
    return (
        <li>
            <span>V</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}

export {TodoItem}