const Cart = ({ products }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
