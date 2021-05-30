function ItemInfo({ items }) {
  console.log(items)
  return (
    items.map(item => {
      console.log(item)
      return (
        <div
          key={`${item._id}`}
          className="content"
        >
          <small>{item.item.icon} <span>{item.item.name}</span></small>
          <ul>
            <li><small>Expiry Date: {new Date(item.expiryDate).toLocaleDateString()}</small></li>
            <li><small>Quantity: {item.quantity}</small></li>
          </ul>
        </div>
      )
    })
  )
}

export default ItemInfo

// Date.prototype.toLocaleDateString()