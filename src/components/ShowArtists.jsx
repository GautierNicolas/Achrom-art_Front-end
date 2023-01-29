const ShowArtists = (props) => {
    const artists = props.artists;
   console.log(artists)
    // Je retoune les données de la table dans le DOM (la photo, le nom, la description et l'artist)
    return (
      <>
        {artists.map((artist) => {
            return (
                <div key={artist[0]} className="col-lg-6">
                    <article className="card" >              
                        <div className="card-img">
                            <img src={artist[4]} alt="" />                
                        </div>
                        <h2>{artist[1]}</h2>  
                        <p>{artist[3]}</p>
                    </article>
                </div>
            );
        })}
      </>
    );
};
  
  
export default ShowArtists;