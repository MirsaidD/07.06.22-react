export default function Example3(props) {
    return (
        <div className="Example3">
            {props.number}
            <button onClick={props.onIncrement}>+</button>
        </div>
    );
}