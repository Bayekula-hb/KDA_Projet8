import { useState, useEffect } from "react";
import Card from "./card";

const ContactFunction = (props) => {
  const [contact, setContact] = useState([]);
  const [contactTempo, setContactTempo] = useState(contact);

  let link = "https://jsonplaceholder.typicode.com/users",
    linkImg = "https://robohash.org/";
  useEffect(() => {
    fetch(link)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContact(data);
        setContactTempo(data);
      });
  }, []);
  function inputChanged(e) {
    
    let inputValue = e.target.value.toUpperCase();

    const contactTempoFilter = contact.filter((Element) => {
      return Element.name.toUpperCase().includes(inputValue);
    });
    setContactTempo(contactTempoFilter);
  }
  const clickCard= (e)=>{
    const contactClick = contactTempo.filter((contact)=>{
      return contact.id === e;
    })
    const contactClickFilter = contactClick.map(({name, phone, username, website, email})=>{
      return {name, phone, username, website, email}
    });
    console.log("Contact Click : ",contactClick);
    console.log("Contact Click Filter : ",contactClickFilter[0].website);
    return(
      <Card 
      key={contactClick[0].id}
      avatar={linkImg + contactClick[0].website}
      key={contactClick[0].id}
      nom={contactClick[0].name}
      mail={contactClick[0].email}
    />
    );
  }
  function renderContacts(tableau) {
    return tableau.map(function (contact) {
      return (
        <Card
          key={contact.id}
          avatar={linkImg + contact.id}
          key={contact.id}
          nom={contact.name}
          mail={contact.email}
          onClick={()=>clickCard(contact.id)}
        />
      );
    });
  }

  return (
    <div>
      <header>
        <h1>Mes amis robots</h1>
        <input
          type="search"
          placeholder="Rechercher par nom"
          onChange={inputChanged}
        />
      </header>
      <div className="container--card">{renderContacts(contactTempo)}</div>
    </div>
  );
};
export default ContactFunction;
