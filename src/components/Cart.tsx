

function Cart () {
    let fleur1 = 8, fleur2 = 10, fleur3 = 15;
    return (<div className="cart-jungle">
        <h2>Panier:</h2>
        <ul>
            <li>UN : {fleur1} euros</li>
            <li>DEUX : {fleur2} euros</li>
            <li>TROIS : {fleur3} euros</li>
        </ul>
        Total = {fleur1 + fleur2 + fleur3} euros !
    </div>)
}

export default Cart