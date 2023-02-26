export default function(props){
    return (
    <table class="table">
        <tr class="rows">
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>IP Address</th>
            <th>Image</th>
        </tr>
       
            {props.users.map((user)=>(
                <tr class="rows">
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.ip_address}</td>
                    <td><img src={user.image} alt="random_image"/></td>
                </tr>
            ))}
       
    </table>);
}