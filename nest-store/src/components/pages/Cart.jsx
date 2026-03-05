import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { removeItems } from "../../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.cart.items)
  const total = useSelector((state)=>state.cart.total)

  const removeItem = (id, title) => {
    dispatch(removeItems(id))
    toast.warn(`Removed ${title} From Cart`);
  };

  return (
    <div className="px-2 py-3 w-50 mx-auto">
      <h2>Cart Items ({data.length})</h2>
      {data.map((val, idx) => {
        return (
          <div
            key={idx}
            className="d-flex flex-column flex-md-row gap-3 p-3 border border-1 mb-3 rounded-4 shadow-sm bg-white align-items-start align-items-md-center"
          >
            <div
              className="cart-image flex-shrink-0"
              style={{ width: "100px" }}
            >
              <img
                src={val.thumbnail}
                alt={val.title}
                className="img-fluid rounded-3"
                style={{ objectFit: "cover", height: "100px", width: "100px" }}
              />
            </div>
            <div className="flex-grow-1">
              <h5 className="fw-semibold text-dark mb-1">{val.title}</h5>
              <p className="mb-1 text-muted">
                <small>Price</small>:{" "}
                <span style={{ color: "var(--primary)", fontWeight: 600 }}>
                  ${val.itemTotal.toFixed(2)}
                </span>
              </p>
              <div className="d-flex align-items-center justify-content-between mt-2">
                <span className="fw-medium">Quantity: {val.count}</span>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => removeItem(idx, val.title)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div>
        <p>Total : $ {total}</p>
      </div>
    </div>
  );
};

export default Cart;
