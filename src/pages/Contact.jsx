import { useNavigate } from "react-router";
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Récupère les données du formulaire
        const nameContact   = event.target.nameContact.value;
        const email         = event.target.email.value;
        const phone         = event.target.phone.value;
        const question      = event.target.question.value;
        
        // Envoie les données au serveur
        const response = await fetch("http://localhost:5000/api/v1/contact/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name"      : nameContact,
                "email"     : email,
                "phone"     : phone,
                "question"  : question
            }),
        });
        const data = await response;
        
        // Si data vaut 201 alors on affiche un message de succès
        if (!data.status === 201) {
            alert('Une erreur est survenue')
        } else {
            alert('Votre messages a bien été envoyé');
        }
        navigate('/')
    }
        
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div id="contact-container">
                    <h1>Contact</h1>
                        <div className="row">
                            <div className="col-4">
                                <div id="img-container">
                                    <img src="./img/contact/contact.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='col-md-7'>
                                <div id="contact-form">
                                    <form action='contact'  onSubmit={handleSubmit}>
                                        <div className='form-group'>
                                            <input type="text" name="nameContact" placeholder="Nom & Prénom"></input>
                                        </div>
                                        <div className='form-group'>
                                            <input type="email" name="email" placeholder="Email"></input>
                                        </div>    
                                        <div className='form-group'>
                                            <input name="phone" placeholder="Téléphone" maxlength="10"></input>
                                        </div> 
                                        <div className='button-container'>
                                            <textarea name="question" rows="5" cols="30" placeholder="Dites nous en plus"></textarea>
                                            <button type="submit" className="btn-login">Envoyer</button>
                                        </div>
                                        <div className='text-content'>
                                            <p>Vous souhaitez en apprendre plus sur Achrom'art et nous contacter ? Vous êtes au bon endroit !</p>
                                            <p>Téléphone: 06 00 00 00 </p>
                                            <p>E-mail: contact@achromart.fr.</p>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact


// {/* <p>Vous souhaitez en apprendre plus sur Achrom'art et nous contacter ? Vous êtes au bon endroit !</p>

// <p>Téléphone: 06 15 97 63 54</p>

// <p>E-mail: contact@achromart.fr.</p>

// <h3>Par formulaire de contact</h3>
// <p>Vous pouvez également nous contacter en remplissant le formulaire ci-dessous :</p> */}