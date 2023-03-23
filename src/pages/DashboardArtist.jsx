import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

// Import des composants
import Header from "../components/Header";


const DashboardArtist = () => {
  const [users, setUsers] = useState([]);  
  const [role, setRole] = useState([]);
  const navigate = useNavigate();
  const id = users.id;	
  const token = localStorage.getItem('jwt');	

  
  // Je déclare la fonction qui va envoyer les données du formulaire au serveur
  const handleSubmit = async (event) => {

    event.preventDefault();

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
              "biography"     : bio,
              "img_profil"    : img           
          }),
    });
  
    const data = await response.json();
  
    // Si data vaut 200 alors on affiche un message de succès
    if (!data.status === 200) {
      alert('Une erreur est survenue')
    } else {
      alert('Vos informations ont bien été modifiées')
    }
  }
  
  useEffect(() => {
    const token     = localStorage.getItem('jwt');
    const userrole  = localStorage.getItem('role');
    const id        = localStorage.getItem('id');

    (async () => {

      // Récupération des données de la table users
      const response = await fetch('http://localhost:5000/api/v1/artists/' + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization": 'bearer' + " " + token,
        },});
        
        const users = await response.json();
        setUsers(users);
        setRole(userrole);
        if (userrole !== 'artist') {
          navigate('/');
        }        
      })();
    },[]);
    return (
      <>
        <Header />
        <div className="container">
          <div className="row">
            <article key={users.id} className="col-12 user-dashboard_card_user">
              <form onSubmit={handleSubmit}>
                <h2>Utilisateur: {users.artist_name}</h2>
                <label htmlFor="">
                  <h3>{users.email}</h3>
                  <input type="email" className="form-control" name="email" placeholder="Changez l'email" autoComplete="current-password" />
                </label>
                <label htmlFor="">
                  <h3>Mot de passe</h3>
                  <input type="password" className="form-control" name="password" placeholder="Changez le mot de passe" autoComplete="current-password" />
                </label>
                <label htmlFor="">
                  <h3>{users.artist_name}</h3>                            
                  <input type="Votre nom d'artiste" className="form-control" name="artist_name" placeholder="Changez le nom d'Artiste" autoComplete="current-password" />
                </label>
                <label htmlFor="">
                  <h3>{users.name}</h3>
                  <input type="name" className="form-control" name="name" placeholder="Changez le nom" autoComplete="current-password" />
                </label>
                <label htmlFor="">
                  <h3>{users.first_name}</h3>                             
                  <input type="prénom" className="form-control" name="first_name" placeholder="Changez le prénoms" autoComplete="current-password" />
                </label>
                <label htmlFor="">
                  <p>{users.bio}</p>
                  <input type="bio" className="form-control" name="bio" placeholder="Changez la description" autoComplete="current-password" />
                </label>
                <label htmlFor="">
                  <img src={users.img_profil} alt="#" />
                  <input type="img" className="form-control" name="img" placeholder="Changez votre photo de profil" autoComplete="current-password" />
                </label>
                <button type="submit" className="btn-dashboard">Modifier</button>
              </form>
            </article> 
          </div>
        </div>
      </>
  );
}

export default DashboardArtist;