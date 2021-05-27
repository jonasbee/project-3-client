function ItemInfo({ item }) {
  return (
    <div>
      <p>{item.item.icon} <span>{item.item.name}</span></p>
      <br/>
      <small>Expiry Date: {item.expiryDate}</small>
      <br/>
      <small>Quantity: {item.quantity}</small>
    </div>
  )
}

export default ItemInfo