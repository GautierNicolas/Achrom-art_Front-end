import { useNavigate } from "react-router-dom";


import Header from "./Header"
import Footer from "./Footer"


const Register = () => {

    const navigateTo = useNavigate()


    const handleSubmit = async (event) => {

        event.preventDefault();
    
        const email = event.target.email.value;
        const password = event.target.password.value;
        const repassword = event.target.repassword.value;
        const artist_name = event.target.artist_name.value;
    
        //  Envoie les données au serveur
        const jwtResponse = await fetch("http://localhost:5000/api/v1/login/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
                body: JSON.stringify({
                    "email" : email,
                    "password" : password,
                    "repassword" : repassword,
                    "artist_name" : artist_name
                }),
        });

        // Récupère les données du serveur
        const loginData = await jwtResponse.json();
        console.log(loginData);
        
        // si le status est 202 et que le role est artist alors on redirige vers la page d'accueil
        if (jwtResponse.status === 202 && loginData.role === 'artist') {
            localStorage.setItem ('jwt', JSON.stringify(loginData.jwt))
            localStorage.setItem ('id', JSON.stringify(loginData.id))
            localStorage.setItem ('role', JSON.stringify(loginData.role))
            navigateTo('/');
            
        } else {
            alert('Combinaison email et mot de pass incorrecte 2')
            // navigateTo('/login')
        }         
    };

    
    
    return (
        <>
            <Header />
            <main id="page-login_container">
                <div className="container">
                    <div className="row">
                        <div>
                            <div id="login-container">
                                <img src="./img/login/hand.png" alt="" />
                                <div className="col-8" id="register-content">
                                    <form onSubmit={handleSubmit}>
                                        <h2>S'enregistrer</h2>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Adresse e-mail</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Votre adresse e-mail" autoComplete="email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Mot de passe</label>
                                            <input type="password" className="form-control" name="password" placeholder="Votre mot de passe" autoComplete="current-password" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Mot de passe</label>
                                            <input type="password" className="form-control" name="repassword" placeholder="Votre mot de passe" autoComplete="" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="artist-name">Identifiant</label>
                                            <input type="text" className="form-control" id="exampleNameArtist" name="artist_name" placeholder="Votre nom d'artiste" />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className="btn-register">S'enregistrer</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                            <div id="img-container">
                                <img src="./img/login/Lazzy-v.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Register;