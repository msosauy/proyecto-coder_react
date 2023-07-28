import { Link } from "react-router-dom";

const CheckoutOrder = ({ order }) => {
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>Cant.</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Precio</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {order.items.map((item) => (
          <tr key={Math.floor(Math.random() * 1000)}>
            <td>{item.quantity}</td>
            <td>{item.brand}</td>
            <td>{item.model}</td>
            <td>{`$${item.price}`}</td>
            <td style={{fontWeight: "bold"}}>{`$${item.price * item.quantity}`}</td>
          </tr>
        ))}
        <tr>
            <td className="transparent"></td>
            <td className="transparent"></td>
            <td className="transparent"></td>
            <td className="transparent"></td>
          <td className="total" style={{fontWeight: "bold"}}>{`TOTAL: $${order.total}`}</td>
        </tr>
      </tbody>
    </table>
    <div className="contact">
        <h2>Datos de contacto: </h2>
        <h3>{order.buyer.email}</h3>
        <h3>{order.buyer.phone}</h3>
        <h3>{order.buyer.name}</h3>
    </div>
    <Link to={"/"}><button className="orderBtn">Continuar comprando</button></Link>
    </>
  );
};

export default CheckoutOrder;
