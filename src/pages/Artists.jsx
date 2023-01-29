import { useState, useEffect } from "react";


import Header from '../components/Header'
import Footer from '../components/Footer'
import ShowArtists from '../components/ShowArtists'

const Artists = () => {
    const [artists, setArtists] = useState([]);

    // Je récupère les données de la table
    useEffect(() => {
      (async () => {
        
        const response = await fetch('http://localhost:5000/api/v1/artists', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authentification": "Bearer " + localStorage.getItem('jwt'),
          },});
          
          const artists = await response.json();
          
          setArtists(artists);
        
      })();
    }, []);
    
    return(
        <>
            <Header />
                <main className="artists-Page">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <section className='artists-container'>
                                    <div className='artists-title'>
                                        <h1>Artistes</h1>
                                        <p>Découvrez la selection des artistes que nous avons selectionné.</p>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <ShowArtists artists = { artists }/>
                                        </div>
                                    </div>                                    
                                </section>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer />        
        </>
    )
}

export default Artists