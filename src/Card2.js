import "./Card.css"
const Card2 = () =>{
    const hallo = ()=>{
        console.log("ik ben kaartje twee")
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>Tweede kaart</h2>
            </header>
            <section>
                lorem ipsem ebfh efhbebfehfbebf befywefwefwvrwfg yuwrgfygrwfgwygrw gf
            </section>
        </article>
    );
    
}

export default Card2;