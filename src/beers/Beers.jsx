import { useState } from 'react';
import BeersList from './BeersList';
import AvailableBeers from './AvailableBeers';
import BeerStyleCount from './BeerStyleCount';
import BeerStyles from './BeersStyles';
import ChangeDollar from "./ChangeDollar";
import beers from './data';

const Beers = () => {
	const [usdToArs, setUsdToArs] = useState(1000); // ahora es dinámico
	const [showDollar, setShowDollar] = useState(true);

	return (
		<div>
			<h1>Proyecto Cervezas</h1>

			<button onClick={() => setShowDollar(!showDollar)}>
				{showDollar ? "Ocultar" : "Mostrar"} USD a ARS
			</button>
			{showDollar && (<ChangeDollar usdToArs={usdToArs} setUsdToArs={setUsdToArs} />)}
			
			<h2>Todas las cervezas</h2>
			<BeersList beers={beers} usdToArs={usdToArs} />

			<h2>Solo disponibles</h2>
			<AvailableBeers beers={beers} usdToArs={usdToArs} />

			<h2>Cantidad de Red e IPA</h2>
			<BeerStyleCount beers={beers} />

			<h2>Estilos disponibles</h2>
			<BeerStyles beers={beers} />
		</div>
	);
};

export default Beers;