import { Link } from "react-router-dom";

const ShowArtworks = (props) => {
  const artworks = props.artworks;
 
  // Je retoune les données de la table dans le DOM (la photo, le nom, la description et l'artist)
  return (
    <>
      {artworks.map((artwork) => {
          return (
            <div className="col-lg-6" key={artwork.id}>
              <article className="card">              
                  <h2>{artwork.name}</h2>  
                  <div className="card-img">
                    <img src={artwork.src} alt="" />                
                  </div>
                  <div className="card-text">
                    <p>{artwork.description}</p>
                  </div>
                  <h3>{artwork.artist[1]}</h3>
              </article>
          </div>
          );
      })}
    </>
  );
};


export default ShowArtworks;