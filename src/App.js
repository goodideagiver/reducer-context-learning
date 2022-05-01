import { useState } from 'react';

import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Nav from './components/Nav/Nav';

function App() {
	const [cartVisible, setCartVisible] = useState(true);

	const modalToggle = () => {
		setCartVisible((prev) => !prev);
	};

	return (
		<>
			<Nav />
			{cartVisible && <Cart onClose={modalToggle} />}
			<Shop />
		</>
	);
}

export default App;
