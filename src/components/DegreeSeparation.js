import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';

const DegreeSeparation = ({ currentUser, selectedFriend }) => {

  const [relationshipPath, setRelationshipPath] = useState('');

  useEffect(() => {
    const calculateDegreeSeparation = () => {
      const usersList = JSON.parse(localStorage.getItem('users')) || [];
      
      const userGraph = {};
      usersList.forEach(user => {
        userGraph[user.email] = user.friends || [];
      });

      const bfs = (start, end) => {
        const queue = [[start]];
        const visited = new Set();
        visited.add(start);

        while (queue.length > 0) {
          const path = queue.shift();
          const node = path[path.length - 1];

          if (node === end) {
            return path;
          }

          for (const neighbor of userGraph[node] || []) {
            if (!visited.has(neighbor)) {
              visited.add(neighbor);
              queue.push([...path, neighbor]);
            }
          }
        }
        return null;
      };

      const end = currentUser.email;
      const start = selectedFriend.email;
      const path = bfs(start, end);

      if (path) {
        const pathNames = path.map(email => usersList.find(user => user.email === email)?.name || email);
        setRelationshipPath(pathNames.join(' > '));
      } else {
        setRelationshipPath('No connection found');
      }
    };

    if (currentUser && selectedFriend) {
      calculateDegreeSeparation();
    }
  }, [currentUser, selectedFriend]);

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>Degree of Separation</Card.Title>
          <Card.Text>
            {relationshipPath}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DegreeSeparation;
