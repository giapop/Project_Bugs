import './Project.css'
function Project (props){
    const {item}=props;
    return(
        <div>
            <div className="item_project">
            {item.id}  {item.name} {item.repository}
            </div>
          
         
        </div>
    )
}

export default Project