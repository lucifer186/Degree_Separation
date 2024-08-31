import React from 'react';
import { ListGroup } from 'react-bootstrap';

const FriendList = ({ friends }) => {
  return (
    <div className="friend-list">
      <h5>Friends</h5>
      <ListGroup>
        {friends.map((friend, index) => (
          <ListGroup.Item key={index}>{friend.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default FriendList;