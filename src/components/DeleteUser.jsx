import { useNavigate } from "react-router";


const DeleteUser = (props) => {
    const navigate = useNavigate();
    const id = props.id;

    // fonction qui permet de supprimer un utilisateur
    const handleDelete = async (event) => {
        const token = localStorage.getItem('jwt');


        const response = await fetch("http://localhost:5000/api/v1/artists/" + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "authorization": 'bearer' + " " + token,
        },});   
        const data = await response.json();

        // Si data vaut 200 alors on affiche un message de succès
        if (!data === 201) {
            alert('Une erreur est survenue')
        } else {
            alert('L\'utilisateur a bien été supprimé');
        }
        navigate('/manage_users')
    };
    return(
        <button onClick={handleDelete}>Supprimé</button>
    )
}

export default DeleteUser;