import { useState, useEffect } from "react";

import Header from '../components/Header'
import Footer from '../components/Footer'
import ShowArtworks from '../components/ShowArtworks'

const Collections = () => {
    const [artworks, setArtworks] = useState([]);

    // Je récupère les données de la table
    useEffect(() => {
      (async () => {
        
        const response = await fetch('http://localhost:5000/api/v1/artworks', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer " + localStorage.getItem('jwt'),
          },});
          
          const artworks = await response.json();
          
          setArtworks(artworks);
        
      })();
    }, []);
    
    console.log(artworks)

    return(
        <>
            <Header />
                <main className="collections-Page">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <section className='categories-container'>
                                    <h2>Catégories</h2>                            
                                    <ul>
                                        <li><a href="Dessin">Dessin</a></li>
                                        <li><a href="Peinture">Peinture</a></li>
                                        <li><a href="Estampe">Estampe</a></li>
                                        <li><a href="Numérique">Numérique </a></li>
                                        <li><a href="Street art">Street art</a></li>                            
                                    </ul>
                                </section>
                            </div>
                            <div className="col-md-10">
                                <section className='collections-container'>
                                    <h1>Artistes</h1>
                                    <p>Découvrez la selection des artistes que nous avons selectionné.</p>
                                    <div className="container">
                                        <div className="row">
                                            <ShowArtworks artworks = {artworks}/>
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

export default Collections