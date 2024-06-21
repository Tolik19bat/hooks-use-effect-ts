import { useState, useEffect, FC } from "react";

interface Info {
  id: number;
  name: string;
}

interface Details {
  avatar: string;
  name: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
}

interface Props {
  info: Info;
}

const Details: FC<Props> = ({ info }) => {
  const [details, setDetails] = useState<Details | null>(null); // Состояние для деталей пользователя

  // Загрузка данных пользователя при изменении info.id
  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
    )
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) =>
        console.error("Ошибка загрузки данных пользователя:", error)
      );
  }, [info.id]);

  // Отображение данных или сообщение о загрузке
  return (
    <div className="details">
      {details ? (
        <>
          <img
            src={`${details.avatar}?${Date.now()}`}
            alt={details.name}
            className="avatar"
          />
          <h2>{details.name}</h2>
          <p>City: {details.details.city}</p>
          <p>Company: {details.details.company}</p>
          <p>Position: {details.details.position}</p>
        </>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default Details;
