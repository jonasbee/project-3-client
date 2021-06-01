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
          <span>{item.item.name.charAt(0).toUpperCase() + item.item.name.slice(1)}</span>
          <figure className="image is-32x32">
            <img src={item.item.icon} alt={item.item.name} />
          </figure>
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