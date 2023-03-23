import { Link, useNavigate } from "react-router-dom";

import Header from "../components/Header"
import Footer from "../components/Footer"
import GoogleAuth from "../services/GoogleAuth"

const Login = () => {

    const navigateTo = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Récupère les données du formulaire
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        // Envoie les données au serveur
        const jwtResponse = await fetch("http://localhost:5000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email" : email,
                "password" : password
            }),
        });
        
        const loginData = await jwtResponse.json();
        if (jwtResponse.status === 202 && loginData.role === 'artist') {
          localStorage.setItem ('jwt', loginData.jwt)
          localStorage.setItem ('id', loginData.id)
          localStorage.setItem ('role', loginData.role)
          navigateTo('/');

        } else if (jwtResponse.status === 202 && loginData.role === 'admin') {
            localStorage.setItem ('jwt', loginData.jwt)
            localStorage.setItem ('id', loginData.id)
          localStorage.setItem ('role', loginData.role)
          navigateTo('/manage_users');
        } else {
            alert('Combinaison email et mot de pass incorrecte')
            navigateTo('/login')
        }   
    }
   
    return (
        <>
            <Header />
            <main id="page-login_container">
                <div className="container">
                    <div className="row">
                        <div>
                            <div id="login-container">
                                <img src="./img/login/hand.png" alt="" />
                                <div className="col-8" id="login-content">
                                    <form onSubmit={handleSubmit}  method="POST">
                                        <h2>Se connecter</h2>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Adresse e-mail</label>
                                            <input type="email" className="form-control" aria-describedby="emailHelp" name="email" placeholder="Votre adresse e-mail" autoComplete="email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Mot de passe</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Votre mot de passe" autoComplete="current-password" />
                                        </div>
                                        <div className="text-center">                                               
                                            <button type="submit" className="btn-login">Connexion</button>
                                            <p>ou <Link  to="/register">S'enregistrer</Link></p>
                                        </div>
                                        <div className="text-center">                                               
                                            <button type="submit" className="btn-login2"><GoogleAuth /></button>
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

export default Login;