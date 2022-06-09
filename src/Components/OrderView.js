import React from "react";
import "./OrderView.css";
function OrderView({ order, SetOpenOrderView }) {
  return (
    <div className="orderview">
      <div className="orderview">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>{order.PurchaseOrderAddress}</h5>
            </div>
            <div className="col">
              <h5>{order.PurchaseOrderContactPerson}</h5>
            </div>
            <div className="col">
              <h5>{order.PurchaseOrderStatus}</h5>
            </div>
          </div>
        </div>
        <hr></hr>
        <u><h2 className="orderview">Purchase Order Details</h2></u>
        {order.PurchaseOrderDetails.map(orderdetail => {
          return (
            <div>

              <table className="table" key={orderdetail.PurchaseOrderRowDetailID}>
                <thead>
                  <tr>
                    <th scope="col">Product SKU</th>
                    <th scope="col">Quantity Ordered </th>
                    <th scope="col">Unit Price </th>
                    <th scope="col">Total Amount </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td >{orderdetail.PurchaseOrderRowProductSKU}</td>
                    <td>{orderdetail.PurchaseOrderRowQuantity}</td>
                    <td>{orderdetail.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}</td>
                    <td>{orderdetail.PurchaseOrderRowTotalAmount}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
        })}
        <div className="footer">
          <button
            onClick={() => {
              SetOpenOrderView(false);
            }}
            id="btncancel">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
export default OrderView;
