
import { Outlet } from "react-router-dom";

export default function ProductsLayout() {
  return (
    <div>
      <h1>Products</h1>
      <p>Browse our available products below.</p>

      
      <Outlet />
    </div>
  );
}
