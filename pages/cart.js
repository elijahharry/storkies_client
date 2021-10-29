import Main from "@components/Main/Main";
import Cart from "@components/Cart/Cart";

const CartPage = () => {
  return (
    <Main
      title="Cart"
      desc="Edit products or quantities, or checkout."
      dark={true}
    >
      <Cart />
    </Main>
  );
};

export default CartPage;
