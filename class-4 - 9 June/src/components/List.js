function List(props) {
  console.log(props);

  return (
    <p>
      <ul>
        {props.data.map((value, index) => {
          return <li>{index + " - " + value}</li>;
        })}
      </ul>
    </p>
  );
}

export default List;
