const Card = ({beers}) => {
    return(
<ul>
    {beers.map(beer => (
        <li key={beer.id}> 
           {beer.id} {beer.beerName} - {beer.beerStyle} - ${beer.price} - {beer.available ? "Disponible" : "No disponible"}
        </li>
    ))}
</ul>
)};
export default Card;