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
    // contactTempo.map(({ id, name, email }) => {
    //   contactFilter.push({ id, name, email });
    // });

    const contactTempoFilter = contact.filter((Element) => {
      return Element.name.toUpperCase().includes(inputValue);
    });
    setContactTempo(contactTempoFilter);
  }
  function renderContacts(tableau) {
    return tableau.map(function (contact) {
      return (
        <Card
          avatar={linkImg + contact.id}
          key={contact.id}
          nom={contact.name}
          mail={contact.email}
        />
      );
    });
  }

  return (
    <div>
      <header>
        <h1>Mes amis robots</h1>
        <input
          type="text"
          placeholder="Rechercher par nom"
          onChange={inputChanged}
        />
      </header>
      <div className="container--card">{renderContacts(contactTempo)}</div>
    </div>
  );
};
export default ContactFunction;
