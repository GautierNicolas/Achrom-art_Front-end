import { useState, useEffect } from "react";


import Header from '../components/Header'
import Footer from '../components/Footer'
import ShowMessages from '../components/ShowMessages'

const Messages = () => {

    const token                     = localStorage.getItem('jwt');    
    const [messages, setMessages]   = useState([]);
    
    // Je récupère les données de la table
    useEffect(() => {
        (async () => {            
            const response = await fetch('http://localhost:5000/api/v1/contact', {
            method: "GET",
            headers: {
                "Content-Type"  : "application/json",
                "authorization" : 'bearer' + " " + token,
            },});          
            const messages = await response.json();          
            setMessages(messages);        
        })();
    }, []);
    
    return(
        <>
            <Header />
                <main id="message-Page">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <section className='messages-container'>
                                    <div className='messages-title'>
                                        <h1>Messages</h1>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <table>
                                                <tr>
                                                    <th>N°</th>
                                                    <th>Email</th>
                                                    <th>Nom</th>
                                                    <th>Téléphone</th>
                                                    <th>Messages</th>
                                                    <th>Supprimé</th>
                                                </tr>                                                
                                                    <ShowMessages messages = { messages }/>
                                            </table>
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

export default Messages