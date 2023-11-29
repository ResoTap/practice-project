import ItemList from './itemList';

const Content = ({ items, handleCheck, handleDelete}) => {

  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ margin: '2rem' }}>Your list is empty</p>
      )}
    </>
  )
}

export default Content