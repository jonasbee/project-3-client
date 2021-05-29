function ItemInfo(items) {
  console.log(items)
  return (
    items.map(item => {
      console.log(item)
      return (
        <div
          key={`${item._id}`}
        >
          <small>{item.item.icon} <span>{item.item.name}</span></small>
          <br />
          <small>Expiry Date: {item.expiryDate}</small>
          <br />
          <small>Quantity: {item.quantity}</small>
        </div>
      )
    })
  )
}

export default ItemInfo