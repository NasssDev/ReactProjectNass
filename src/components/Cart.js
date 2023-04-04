import logoreact from "../assets/reactLogo.png";

function Cart () {
    return (<div className="cart-jungle">
        <h2>Informations:</h2>
        <p>
            Développeur web en pleine expension,
            je me lance dans mon premier projet React <img alt="logo-react" style={{ height: '1.5%', width: '1.5%', backgroundColor: 'white', borderRadius: '2px'}}
                 src={logoreact}/> ! <br/>
            Ce projet a pour but de présenter mes autres projets dans différents langages. <strong>(en cours)</strong>
        </p>
    </div>)
}
export default Cart