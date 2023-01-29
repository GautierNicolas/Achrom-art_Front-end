import { useState, useEffect } from "react";


const ShowUsers = () => {

  const [users , setUsers] = useState([]);

  // Je récupère les données de la table
  useEffect(() => {
    (async () => {
      
      const response = await fetch('http://localhost:5000/api/v1/users', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authentification": "Bearer " + localStorage.getItem('jwt'),
        },});
        
        const users = await response.json();
        
        setUsers(users);
      
    })();
  }, []);
  // Je retoune les données de la table dans le DOM (la photo, le nom, la description et l'artist)
  return (
    <>
      {users.map((user) => {
          return (
            <div className="col-4">
            <article className="card" key={user.id}>              
                <h2>{user.name}</h2>  
                <div className="card-img">
                  <img src={user.first_name} alt="" />                
                </div>
                <p>{user.bio}</p>
                <h3>{user}</h3>
            </article>
          </div>
          );
      })}
    </>
  );
};


export default ShowUsers;