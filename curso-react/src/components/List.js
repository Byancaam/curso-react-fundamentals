const List = () => {
  const items = [
    {
      id: 1,
      name: 'André'
    },
    {
      id: 2,
      name: 'Daniela'
    },
    {
      id: 3,
      name: 'Eliezer'
    }
  ];
  return (
    <div>
      {items.map(item => (
        <p key={item.id}>
          {item.id} - {item.name}
        </p>
      ))}
    </div>
  );
};
export default List;
