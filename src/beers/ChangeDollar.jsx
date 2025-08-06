const ChangeDollar = ({ usdToArs, setUsdToArs }) => {
	const handleChange = (e) => {
		setUsdToArs(Number(e.target.value));
	};

	return (
		<div>
			<h3>Valor del dólar</h3>
			<input
				type="number"
				value={usdToArs}
				onChange={handleChange}
				placeholder="Ingrese el valor del dólar"
			/>
			<p>Valor actual: ${usdToArs} ARS</p>
		</div>
	);
};

export default ChangeDollar;