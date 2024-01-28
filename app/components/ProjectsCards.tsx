export default function ProjectsCards ({imgUrl, title, description}){
    return (
        <>
        <div style={{background: `url(${imgUrl})`, backgroundSize:"cover"}}>
        </div>
        <div>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
        </>
    )
}