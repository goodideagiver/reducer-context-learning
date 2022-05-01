import { useState } from 'react';

import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';

function App() {
	const [cartVisible, setCartVisible] = useState(true);

	return (
		<>
			{cartVisible && <Cart />}
			<Shop />
		</>
	);
}

export default App;
