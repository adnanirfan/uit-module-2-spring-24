function List(props) {
  console.log(props);

  return (
    <p>
      <ul>
        {props.data.map((value, index) => {
          return (
            <li>
              {index + " - " + value}{" "}
              <button onClick={() => props.onDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </p>
  );
}

export default List;
