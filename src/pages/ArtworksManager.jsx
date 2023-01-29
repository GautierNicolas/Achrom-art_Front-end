import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

// Import des composants
import Header from "../components/Header";
// import Deleteartwork from "../components/Deleteartwork";


const ArtworksManager = () => {
  const [artworks, setartworks] = useState([]);  
  const [role, setRole] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('jwt');	
  
  
  // Je déclare la fonction qui va envoyer les données du formulaire au serveur
  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = event.target.parentNode.id;    

    // Récupération des données du formulaire
    const name          = event.target.name.value;
    const style        = event.target.style.value;
    const description   = event.target.description.value;
    const img           = event.target.img.value;
  
  
     //  Envoie les données du formulaire au serveur
    const response = await fetch("http://localhost:5000/api/v1/artworks/" + id, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          "authorization": 'bearer' + " " + token,
      },
          body: JSON.stringify({
              "name"          : name,
              "style"         : style,
              "description"   : description,
              "year"          : "2021",
              "src"           : img           
          }),
    });
    const data = await response.json();
  
    // Si data vaut 200 alors on affiche un message de succès
    if (!data === 200) {
      alert('Une erreur est survenue')
    } else {
      alert('Les informations ont bien été modifiées')
    }
  }; 
  
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    const userRoles = localStorage.getItem('roles');

    (async () => {
      // Récupération des données de la table artworks
      const response = await fetch('http://localhost:5000/api/v1/artworks', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization": 'bearer' + " " + token,
        },});
        
        const artworks = await response.json();
        setartworks(artworks);
        setRole(userRoles);
        if (userRoles !== 'admin') {
          navigate('/');
        }        
      })();
    },[]);

    console.log(artworks)
    return (
      <>
        <Header />
        <section id="artworks-manager_Page">
            <div className="container">
                <div className="row">                    
                <h2>Panneau de gestion des Oeuvress</h2>
                {artworks.map((artwork) => {
                    return (
                        console.log(artwork),
                        <>
                            <article key={artwork.id} id={artwork.id} className="col-lg-5 admin-dashboard_card_artwork">
                                <form onSubmit={handleSubmit}>
                                    <h2>Oeuvres: {artwork.name}</h2>
                                    <img src={artwork.src} alt="" />
                                    
                                    <label htmlFor="">
                                        <h3>{artwork.name}</h3>                            
                                        <input type="Nom de l'oeuvre" className="form-control" name="name" placeholder="Changez le nom d'Artiste" autoComplete="current-password" />
                                    </label>
                                    
                                    <label htmlFor="">
                                        <h3>{artwork.style}</h3>                             
                                        <input type="style" className="form-control" name="style" placeholder="Changez le style" autoComplete="current-password" />
                                    </label>
                                    <label htmlFor="">
                                        <p>{artwork.description}</p>
                                        <input type="description" className="form-control" name="description" placeholder="Changez la description" autoComplete="current-password" />
                                    </label>
                                    <label htmlFor="">
                                        <h3>{artwork.src}</h3>
                                        <input type="img" className="form-control" name="img" placeholder="Changez votre photo de profil" autoComplete="current-password" />
                                    </label>
                                    <button type="submit" className="btn-dashboard">Modifier</button>
                                    {/* <Deleteartwork id={artwork.id} /> */}
                                </form>
                            </article>
                        </>                        
                    );
                })}      
                </div>
            </div>
        </section>
    </>
  )
}

export default ArtworksManager;