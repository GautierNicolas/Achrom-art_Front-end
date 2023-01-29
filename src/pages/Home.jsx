import Header from "../components/Header"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
        <Header />
            <main id="page-home_container">
                <div className="container-fluid" >                    
                    <div className="container">
                        <div className="row flex-md-wrap">                    
                            <div className="col-lg-8" id="caroussel-container">
                                <img src="./img/artworks/Phaeton.png" alt="La chute de Phaëton" className="carroussel-item"/>                        
                                <img src="./img/artworks/carhartt.jpg" alt="Shohei" className="carroussel-item"/>                     
                                <img src="./img/artworks/terre.jpg" alt="planète terre" className="carroussel-item"/>                     
                            </div>
                            <div className="col-lg-3 " id="text-container">
                                <div className="text-item">
                                    <h1>Bienvenue</h1>
                                    <p>Bienvenue sur Achrom'art, le site qui célèbre la beauté de l'absence de couleur.</p>
                                    <p>Découvrez des oeuvres d'artistes uniques et passionnants qui n'utilisent que le noir et le blanc pour exprimer leur créativité.</p> 
                                    <p>Laissez-vous transporter par la puissance de leurs pièces et laissez votre imagination vagabonder.</p>
                                </div>
                            </div>                    
                        </div>
                    </div>                    
                </div>
            </main>
        <Footer />
    </>
  );
};

export default Home;