import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


// Composant bouton profil
const ProfilButton = () => {
    const [users, setUsers] = useState([]);  
    const [role, setRole] = useState();
    
    // Boutton profil
    const [isButtonClicked, setButtonClicked] = useState(false);
    const registerClick = (event) => {
        if(isButtonClicked === true) {
            setButtonClicked(false);
        } else {
            setButtonClicked(true);
        }
    };
    console.log(isButtonClicked)

    // Boutton déconnexion
    const handleDelete = () => {        
        localStorage.removeItem('jwt')
        localStorage.removeItem('role')
        localStorage.removeItem('id')
    };
    
    // Identification lier à l'utilisateur
    useEffect(() => {
        const token = localStorage.getItem('jwt');
        const role = localStorage.getItem('role');
        
        (async () => {

            // Récupération des données de la table users
          const response = await fetch('http://localhost:5000/api/v1/artists/' + localStorage.getItem('id'), {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "authorization": 'bearer' + " " + token,
            },});
            
            const users = await response.json();
            setUsers(users);
            setRole(role);
            
        })();
    },[role]);

    return(
        <>
            <div className="profil-button-user">
                {isButtonClicked ? (
                    <> 
                        <button onClick={registerClick}><img src={users.img_profil} alt="img-profil" /></button>
                        <ul>
                            <li>{role === "admin" ? (
                                <Link to="/manage_users">Gestion des utilisateur</Link>
                            ) : (<Link to="/dashboard_artist">Mon Dashboard</Link>)}</li>
                            <li>{role === "admin" ? (
                                    <Link to="/manage_artworks">Gestion des oeuvres</Link>
                                ) : (null)} 
                            </li>
                            <li>{role === "admin" ? (
                                    <Link to="/messages">Messages</Link>
                                ) : (null)} 
                            </li>
                            <li><a onClick={handleDelete} href=" ">Logout</a></li>
                        </ul>
                    </>
                ) : (
                    <button onClick={registerClick}><img src={users.img_profil} alt="img-profil" /></button>
                )}
            </div>
        </>
    )
}

export default ProfilButton;