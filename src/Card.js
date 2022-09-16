import "./Card.css"

const Card = () =>{
    const hallo = ()=>{
        console.log("ik ben kaartje een")
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>Eerste kaart</h2>
            </header>
            <section>
                lorem ipsem ebfhe fhbebfeh fbebfbefywefw efwvrwfgyu wrgfygrwfgw ygrwgf
            </section>
        </article>
    );
    
}

export default Card;