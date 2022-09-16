import "./Card.css"

const Card3 = () =>{
    const hallo = ()=>{
        console.log("ik ben kaartje drie")
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>Derde kaart</h2>
            </header>
            <section>
                lorem ipsem ebf hefhbebfehfbebfb efywefwefwvrwfgy uwrgfygrwfgw ygrwgf
            </section>
        </article>
    );
    
}

export default Card3;