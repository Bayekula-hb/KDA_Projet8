import Paragraph from "./paragraph"

const Robot = ({name, phone, username, website, email, avatar})=>{

    return(
        <div className="div--robot">
            <img src={avatar} alt="avatar"/>
            <Paragraph contenu={name}/>
            <Paragraph contenu={username}/>
            <Paragraph contenu={email}/>
            <Paragraph contenu={phone}/>
            <Paragraph contenu={website}/>
        </div>
    )
}
export default Robot;