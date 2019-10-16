import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import FriendForm from './FriendForm';

export default function FriendList() {
    const [friends, setFriends] = React.useState([]);
    const [editingFriend, setEditingFriend] = React.useState();

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
        fetchFriends();
    }, []);

    const deleteFriend = id => {
        axiosWithAuth()
            .delete(`/api/friends/${id}`)
            .then(res => {
                console.log(res);
                setFriends(res.data);
            })
            .catch(err => console.log(err.response));
    };

    const editFriend = friendObj => {
        setEditingFriend(friendObj);
    };

    return (
        <div className="whole-form">
            <FriendForm
                editingFriend={editingFriend}
                setFriends={setFriends}
                setEditingFriend={setEditingFriend}
            />
            {friends.map(friendObj => {
                return (
                    <div className="friend-card" key={friendObj.id}>
                        {" "}
                        <p>Name: {friendObj.name}</p>
                        <p>Age: {friendObj.age}</p>
                        <p>Email: {friendObj.email}</p>
                        <div className="button-group">
                            <button onClick={() => editFriend(friendObj)} >EDIT</button>{" "}
                            <button onClick={() => deleteFriend(friendObj.id)}>DELETE</button>{" "}
                        </div>
                    </div>
                );
            })}

            <button className="update-button" onClick={fetchFriends}>Update!</button>
        </div>
    );
}