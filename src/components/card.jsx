import Paragraph from "./paragraph";

const Card = (props) => {
  return (
    <div className="card" onClick={props.onClick} key={props.key}>
      <img className="img--avatar" src={props.avatar} alt={props.name} />
      <Paragraph contenu={props.nom}></Paragraph>
      <Paragraph contenu={props.mail}></Paragraph>
    </div>
  );
};
export default Card;