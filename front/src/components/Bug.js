import './Bug.css'
function Bug (props){
    const {item}=props;
    return(
        <div className="item_bug">
            <div>
            {item.id} {item.severity} {item.commit} {item.description} {item.status} {item.priority}
            </div>
        
        </div>
    )
}

export default Bug