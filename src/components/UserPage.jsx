import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../api";
import QualitiesList from "./QualitiesList";

const UserPage = ({ userId }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  });

  const history = useHistory();

  const handleRedirectToAllUsers = () => {
    history.push("/users");
  };
  if (user) {
    return (
      <div>
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <QualitiesList qualities={user.qualities} />
        <p>Завершено встреч: {user.completedMeetings}</p>
        <h2>Оценка: {user.rate}</h2>
        <button onClick={handleRedirectToAllUsers}>Все пользователи</button>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

UserPage.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserPage;
