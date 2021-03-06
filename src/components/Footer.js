import GithubIcon from "./images/github.svg"

const Footer = () => {
    //todo: insert github folder 
    return(
        <div className="row">
                <footer className="text-center bg-secondary text-lg-start">
                    {/* Icons space */}
                    <div className="container d-flex justify-content-center py-5">

                        <button type="button" 
                        className="btn btn-dark btn-lg btn-floating mx-2"
                        style={{backgroundColor: "#54456b"}}
                        href="#"
                        target="_blank" rel="noreferer">
                            <img src={GithubIcon} alt="github icon"></img>
                        </button>
                    </div>

                    {/* Bottom space*/}
                    <div className="text-center text-white p-3"
                    style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}>
                        A proyect created by: 
                        <a className="text-white"
                        href="https://github.com/Matevito"
                        target="_blank" rel="noreferrer"
                        style={{textDecoration:"none", color:"inherit"}}> Mateo Diaz</a>
                    </div>
                </footer>
            
        </div>
    )
}

export default Footer