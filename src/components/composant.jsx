import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Paragraph from "./paragraph";

const Composant = (props) => {
  const roboId = parseInt(props.match.params.id);
  const [contact, setContact] = useState([]);
  let linkImg = "https://robohash.org/";
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContact(data);
      });
  }, []);
  console.log("contact contient :", contact);
  const amiFilter = contact.filter((contact) => {
    return contact.id === roboId;
  });

  console.log("Ami contient :", amiFilter);

  const renderAmi = (objetAmi) => {
    return objetAmi.map(function (ami) {
      return (
        <>
          <h2>{ami.name} </h2>

          <img className="img--robot--C" src={linkImg + roboId} alt={ami.name} />
          <Paragraph contenu={ami.name} />
          <Paragraph contenu={ami.username} />
          <Paragraph contenu={ami.email} />
          <Paragraph contenu={ami.phone} />
          <Paragraph contenu={ami.website} />
        </>
      );
    });
  };
  return (
    <div className="div--robot">
      <Link className="link--back" to="/">Retour</Link>
      {renderAmi(amiFilter)}
    </div>
  );
};
export default Composant;
