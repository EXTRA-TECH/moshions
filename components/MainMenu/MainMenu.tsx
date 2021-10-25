import Navbar from '../Navbar'
import { FormattedMessage } from "react-intl";
import { useAuth, useCart } from "@saleor/sdk";

const MainMenu = () => {
  const { user, signOut } = useAuth();
  const { items } = useCart();

  const cartItemsQuantity =
    (items &&
      items.reduce((prevVal, currVal) => prevVal + currVal.quantity, 0)) ||
    0;
  
  console.log(items)

  return (
    <Navbar cartItemsQuantity={cartItemsQuantity} />
  )
}

export default MainMenu