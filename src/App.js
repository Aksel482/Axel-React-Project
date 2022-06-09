import React, { useContext, useState } from "react";
import './App.css';
import Orders from './3291ead6-82a2-43fa-ba6e-58328b4e02a1.json'
import ViewOrder from './Components/OrderView.js';
function App() {
  const [OpenOrderView, SetOpenOrderView] = useState(false);
  const [OrderView, setOrderView] = useState();
  const [selectedOrder, setSelectedOrder] = useState();
  const handleOnClick = (PurchaseOrderNo) => {
    setSelectedOrder(Orders.mvPurchaseOrders.find(e => e.PurchaseOrderNo === PurchaseOrderNo))
    SetOpenOrderView(true);
  }
  return (
    <div className="App">
      <u><h2>Order List</h2></u>
      <hr></hr>
      {
        Orders.mvPurchaseOrders.map(order => {
          return (
            <table className="table" key={order.PurchaseOrderId}>
              <thead>
                <tr>
                  <th scope="col">PurchaseOrderTypeAbbreviation</th>
                  <th scope="col">PurchaseOrderNo </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td >{order.PurchaseOrderTypeAbbreviation}</td>
                  <td>{order.PurchaseOrderNo}</td>
                  <button type="button" onClick={() => { handleOnClick(order.PurchaseOrderNo) }} className="btn btn-outline-primary">View Order</button>
                </tr>
              </tbody>
            </table>
          )
        })}

      {OpenOrderView && <ViewOrder order={selectedOrder} SetOpenOrderView={SetOpenOrderView} />}
    </div>
  );
}
export default App;

