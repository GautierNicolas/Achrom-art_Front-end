import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

// Import des composants
import Header from "../components/Header";
import DeleteUser from "../components/DeleteUser";


const UsersManager = () => {
  const [users, setUsers] = useState([]);  
  const [role, setRole] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('jwt');	
  
  
  // Je déclare la fonction qui va envoyer les données du formulaire au serveur
  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = event.target.parentNode.parentNode.firstChild.id;    

    // Récupération des données du formulaire
    const email         = event.target.email.value;
    const password      = event.target.password.value;
    const artist_name   = event.target.artist_name.value;
    const name          = event.target.name.value;
    const first_name    = event.target.first_name.value;
    const bio           = event.target.bio.value;
    const img           = event.target.img.value;
  
  
     //  Envoie les données du formulaire au serveur
    const response = await fetch("http://localhost:5000/api/v1/artists/" + id, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          "authorization": 'bearer' + " " + token,
      },
          body: JSON.stringify({
              "email"         : email,
              "password"      : password,
              "artist_name"   : artist_name,
              "name"          : name,
              "first_name"    : first_name,
              "bio"           : bio,
              "img_profil"    : img           
          }),
    });
  
    const data = await response.json();
  
    // Si data vaut 200 alors on affiche un message de succès
    if (!data === 200) {
      alert('Une erreur est survenue')
    } else {
      alert('Vos informations ont bien été modifiées')
    }
  }; 
    
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    const userRole = localStorage.getItem('role');

    (async () => {
      // Récupération des données de la table users
      const response = await fetch('http://localhost:5000/api/v1/artists', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization": 'bearer' + " " + token,
        },});
        
        const users = await response.json();
        setUsers(users);
        setRole(userRole);
        if (userRole !== 'admin') {
          navigate('/');
        }        
      })();
    },[]);

    return (
      <>
        <Header />
        <section id="admin-Page">
          <div className="container">
            <h2>Panneau de gestion des utilisateurs</h2>
            {users.map((user) => {
            return (
              console.log(user),
              <>
                  <article key={user.id} id={user.id} className="admin-dashboard_card_user">
                    <form onSubmit={handleSubmit}>
                      <h2>Utilisateur: {user.artist_name}</h2>
                      <img src={user.img_profil} alt="" />
                      <label htmlFor="">
                        <h3>{user.email}</h3>
                        <input type="email" className="form-control" name="email" placeholder="Changez l'email" autoComplete="current-password" />
                      </label>
                      <label htmlFor="">
                        <h3>Mot de passe</h3>
                        <input type="password" className="form-control" name="password" placeholder="Changez le mot de passe" autoComplete="current-password" />
                      </label>
                      <label htmlFor="">
                        <h3>{user.artist_name}</h3>                            
                        <input type="Votre nom d'artiste" className="form-control" name="artist_name" placeholder="Changez le nom d'Artiste" autoComplete="current-password" />
                      </label>
                      <label htmlFor="">
                        <h3>{user.name}</h3>
                        <input type="name" className="form-control" name="name" placeholder="Changez le nom" autoComplete="current-password" />
                      </label>
                      <label htmlFor="">
                        <h3>{user.first_name}</h3>                             
                        <input type="prénom" className="form-control" name="first_name" placeholder="Changez le prénoms" autoComplete="current-password" />
                      </label>
                      <label htmlFor="">
                        <p>{user.bio}</p>
                        <input type="bio" className="form-control" name="bio" placeholder="Changez la description" autoComplete="current-password" />
                      </label>
                      <label htmlFor="">
                        <h3>{user.img_profil}</h3>
                        <input type="img" className="form-control" name="img" placeholder="Changez votre photo de profil" autoComplete="current-password" />
                      </label>
                      <button type="submit" className="btn-dashboard">Modifier</button>
                      <DeleteUser id={user.id} />
                    </form>
                  </article>
              </>                        
            );
          })
        }      
        </div>

        </section>
    </>
  )
}

export default UsersManager;