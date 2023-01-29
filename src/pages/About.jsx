import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {

    return (
        <>
        < Header />
            <section id='About-page'>
                <div className="container">
                    <div className="row">
                        <div id="text-container" className='col-9'>
                        <h1>A propos</h1>
                            <p>Bienvenue sur ACHROM'ART, le site qui vous invite à découvrir les chefs-d'oeuvre de l'art monochrome.</p>
                            <p>Vous trouverez ici des oeuvres réalisées par des artistes qui ont choisi de ne pas se limiter aux couleurs vives et variées. Ils ont opté pour la créativité monochrome, avec des nuances et des contrastes qui révèlent des détails subtils et remarquables.</p>
                            <p>Vous pourrez découvrir des oeuvres d'artistes talentueux à travers des galeries présentant leurs travaux les plus récents. Vous pourrez également lire des interviews avec des artistes qui partagent leurs histoires et leurs techniques.</p>
                            <p>Nous proposons un modèle économique innovant pour soutenir les artistes en leur offrant une plus grande visibilité sur internet. Vous pouvez souscrire à un abonnement pour être mis en avant et pour que votre travail soit vu et apprécié.</p>
                            <p>Alors, n'attendez plus! Venez découvrir l'art en noir et blanc et l'émerveillement qu'il peut produire. Découvrez des oeuvres d'artistes talentueux et explorez le monde des contrastes subtils et des nuances incroyables.</p>
                        </div>
                    </div>
                </div>
            </section>
        <Footer />
        </>
    )
}

export default About;