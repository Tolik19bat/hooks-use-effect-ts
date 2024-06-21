import { useState, useEffect, FC } from 'react';
import './App.css';
import List from './components/List';
import Details from './components/Details';

interface User {
  id: number;
  name: string;
}

const App: FC = () => {
  const [users, setUsers] = useState<User[]>([]); // Состояние для списка пользователей
  const [selectedUser, setSelectedUser] = useState<User | null>(null); // Состояние для выбранного пользователя

  // Загрузка списка пользователей при монтировании компонента
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
    )
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data))
      .catch((error) =>
        console.error('Ошибка загрузки списка пользователей:', error)
      );
  }, []);

  return (
    <>
      <div className="app">
        <List users={users} onUserClick={setSelectedUser} /> {/* Компонент списка пользователей */}
        {selectedUser && <Details info={selectedUser} />} {/* Компонент деталей выбранного пользователя */}
      </div>
    </>
  );
};

export default App;
