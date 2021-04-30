import { useState, useEffect } from "react";
import Card from "./card";
import Composant from "./composant";

const ContactFunction = (props) => {
  const [contact, setContact] = useState([]);
  const [contactTempo, setContactTempo] = useState(contact);
  const [chargement, setChargement] = useState(true);

  const linkImg = "https://robohash.org/";
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContact(data);
        setContactTempo(data);

        setChargement(false);
      });
  }, []);
  function inputChanged(e) {
    let inputValue = e.target.value.toUpperCase();

    const contactTempoFilter = contact.filter((Element) => {
      return Element.name.toUpperCase().includes(inputValue);
    });
    setContactTempo(contactTempoFilter);
  }
  const clickCard = (e) => {
    const contactClick = contactTempo.filter((contact) => {
      return contact.id === e;
    });
    const contactClickFilter = contactClick.map(
      ({ name, phone, username, website, email }) => {
        return { name, phone, username, website, email };
      }
    );
    console.log("Contact Click : ", contactClick);
    console.log("Contact Click Filter : ", contactClickFilter[0].website);
    <Composant valeur={contactClick.id}
      // name={contactClick[0].name}
      // phone={contactClick[0].phone}
      // website={contactClick[0].website}
      // email={contactClick[0].email}
      // avatar={linkImg+contactClick[0].id}
      // username={contactClick[0].username}
    />;
  };
  function renderContacts(tableau) {
    return tableau.map(function (contact) {
      return (
        <Card
          id={contact.id}
          avatar={linkImg + contact.id}
          key={contact.id}
          nom={contact.name}
          mail={contact.email}
          clickCard={() => clickCard(contact.id)}
        />
      );
    });
  }
  if(chargement){
    return (
      <div className="div--chargement">
        <h2 className="class-chargement">Chargement ...</h2>
      </div>
    )
  }
  return (
    <div>
      <header>
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