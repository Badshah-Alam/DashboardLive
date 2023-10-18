



import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
// import { RiSearchLine } from "react-icons/ri";


const recentOrderData = [
  {
    id: "1",
    product_id: "4324",
    customer_id: "23143",
    customer_name: "Shirley A. Lape",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "PLACED",
    shipment_address: "Cottage Grove, OR 97424",
  },
];

const RecentOrders = () => {
  return (
    <div className="recent-orders-container">
      <div className="search-bar">
        <strong className="text-gray-700 font-medium">Product Name</strong>
        {/* <RiSearchLine className=" float-right " /> */}
        <input
          type="text"
          className="font-black border-r-amber-200 border-spacing-4  float-right"
          placeholder=" 🔍Search...... "
        />
      </div>
      <div className="orders-table">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Order Total</th>
              <th>Shipping Address</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => (
              <tr key={order.id}>
                <td>
                  <Link to={`/order/${order.id}`}>#{order.id}</Link>
                </td>
                <td>
                  <Link to={`/product/${order.product_id}`}>
                    #{order.product_id}
                  </Link>
                </td>
                <td>
                  <Link to={`/customer/${order.customer_id}`}>
                    {order.customer_name}
                  </Link>
                </td>
                <td>{format(new Date(order.order_date), "dd MMM yyyy")}</td>
                <td>{order.order_total}</td>
                <td>{order.shipment_address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
