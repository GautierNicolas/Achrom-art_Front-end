import { useNavigate } from "react-router";

const ShowMessages = (props) => {  
  const navigate = useNavigate();
  

    // fonction qui permet de supprimer un message
    const handleDelete = async (event) => {
        const token = localStorage.getItem('jwt');

        console.log(localStorage)
        const id = event.target.parentNode.parentNode.firstChild.id;

        const response = await fetch("http://localhost:5000/api/v1/messages/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "authorization": 'bearer' + " " + token,
      },});   
      const data = await response.json();
  
        // Si data vaut 201 alors on affiche un message de succès
        if (!data === 201) {
            alert('Une erreur est survenue')
        } else {
            alert('Le message a bien été supprimé');
        }
        navigate('/messages')
    };
    
    
    return (
      <>
        {props.messages.map((message) => {
            return (
                    <>
                        <tr key={message.id}>
                            <td id={message.id}>{message.id}</td>
                            <td>{message.email}</td>
                            <td>{message.name}</td>
                            <td>{message.phone}</td>
                            <td>{message.question}</td>
                            <td><button onClick={handleDelete}>Supprimé</button></td>
                        </tr>
                    </>    
                    
            );
        })}
      </>
    );
};
  
  
export default ShowMessages;