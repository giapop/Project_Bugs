function User (props){
    const {item}=props;
    return(
        <div>
            <div>
            {item.id} {item.email} {item.password} {item.firstName}
            </div>
          
         
        </div>
    )
}

export default User