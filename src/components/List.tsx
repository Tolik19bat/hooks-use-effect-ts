import { FC } from 'react';

interface User {
  id: number;
  name: string;
}

interface Props {
  users: User[];
  onUserClick: (user: User) => void;
}

const List: FC<Props> = ({ users, onUserClick }) => {
  return (
    <div className="list">
      {users.map(user => (
        <div key={user.id} onClick={() => onUserClick(user)} className="list-item">
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default List;
