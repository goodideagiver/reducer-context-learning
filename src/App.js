import { useState } from 'react';

import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Nav from './components/Nav/Nav';
import { CartProvider } from './store/cart-provider';

function App() {
	const [cartVisible, setCartVisible] = useState(true);

	const modalToggle = () => {
		setCartVisible((prev) => !prev);
	};

	return (
		<CartProvider>
			<Nav onClick={modalToggle} />
			{cartVisible && <Cart onClose={modalToggle} />}
			<Shop />
		</CartProvider>
	);
}

export default App;
