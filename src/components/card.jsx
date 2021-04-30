import { Link } from "react-router-dom";
import Paragraph from "./paragraph";

const Card = (props) => {
  return (
    <div className="card" onClick={props.onClick} key={props.id}>
      <img className="img--avatar" src={props.avatar} alt={props.name} />
      <Paragraph contenu={props.nom}></Paragraph>
      <Paragraph contenu={props.mail}></Paragraph>
      <Link onClick={props.clickCard} className="lien--card" to={`/composant/${props.id}`} > voir plus</Link>
    </div>
  );
};
export default Card;