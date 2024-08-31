import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Dropdown, ListGroup } from 'react-bootstrap';
import DegreeSeparation from './DegreeSeparation';
import './Sidebar.css';
const Sidebar = ({ currentUser }) => {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const [suggestedFriends, setSuggestedFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);

  useEffect(() => {
    const usersList = JSON.parse(localStorage.getItem('users')) || [];
    const filteredUsers = usersList.filter(user => user.email !== currentUser.email);

    const currentUserData = usersList.find(user => user.email === currentUser.email);
    const friendsList = currentUserData ? currentUserData.friends || [] : [];
    
    const friendsDetails = filteredUsers.filter(user => friendsList.includes(user.email));

    const suggestedFriendsList = filteredUsers.filter(user => {
      const isMutualFriend = friendsList.some(friendEmail => {
        const friend = usersList.find(u => u.email === friendEmail);
        return friend && friend.friends.includes(user.email);
      });
      return !friendsList.includes(user.email) && isMutualFriend;
    });

    setUsers(filteredUsers);
    setFriends(friendsDetails);
    setSuggestedFriends(suggestedFriendsList);
  }, [currentUser]);

  const handleAddFriend = (friendEmail) => {
    const usersList = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsersList = usersList.map(user => {
      if (user.email === currentUser.email) {
        return { ...user, friends: [...(user.friends || []), friendEmail] };
      }
      if (user.email === friendEmail) {
        return { ...user, friends: [...(user.friends || []), currentUser.email] };
      }
      return user;
    });

    localStorage.setItem('users', JSON.stringify(updatedUsersList));
    
    setFriends(friends => [...friends, usersList.find(user => user.email === friendEmail)]);
    setUsers(users => users.filter(user => user.email !== friendEmail));
    setSuggestedFriends(suggestedFriends => suggestedFriends.filter(user => user.email !== friendEmail));
  };

  const availableDropdownUsers = users.filter(user => !friends.find(friend => friend.email === user.email));

  return (
    <Container fluid className="mt-4 sidebar-container">
      <Row>
      <Col md={3} className="left-panel">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Select a User
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {availableDropdownUsers.map((user, index) => (
                <Dropdown.Item key={index} onClick={() => handleAddFriend(user.email)}>
                  {user.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>


            <h5 className="mt-4">Friends</h5>
            <ListGroup>
              {friends.map((user, index) => (
                <ListGroup.Item key={index}>{user.name}</ListGroup.Item>
              ))}
            </ListGroup>
      

            <h5 className="mt-4">Suggested Friends</h5>
            <ListGroup>
              {suggestedFriends.map((user, index) => (
                <ListGroup.Item
                 style={{cursor:'pointer'}}
                  key={index}
                  onClick={() => setSelectedFriend(user)}
                >
                  {user.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
        </Col>
        <Col md={9} className="right-panel">
          <div className="sidebar">
            <h5>Other Logged-In Users</h5>
            <ListGroup>
              {users.map((user, index) => (
                <ListGroup.Item key={index}>{user.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>
        </Row>

        <Row className="degree-separation-row">
        <Col>
          <DegreeSeparation
            currentUser={currentUser}
            selectedFriend={selectedFriend}
          />
        </Col>
        </Row>
    
    </Container>
  );
};

export default Sidebar;
