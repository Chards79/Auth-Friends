import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

export default function FriendList() {
    const [friends, setFriends] = useState([]);
    const fetchFriends = () => {
        axiosWithAuth()
            .get("/api/friends")
            .then(res => {
                console.log(res);
                setFriends(res.data)
            })
            .catch(err => console.log(err.response));
    };
    React.useEffect(() => {
        fetchFriends()
    }, [])

    return (
        <div>
            <button onClick={fetchFriends}>Update!</button>
            {friends.map(friendObj => {
                return <div key={friendObj.id}> {friendObj.name} </div>;
            })}
        </div>
    );
}