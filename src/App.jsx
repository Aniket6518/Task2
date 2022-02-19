import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Card from "./Card";
import "./App.css";
import LoadingAnime from "./Animation";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const func = () => {
    setLoading(true);
    axios.get("https://reqres.in/api/users?page=1")
    .then((response) => setUserData(response.data.data))
    .then((response) => new Promise((resolve) => setTimeout(() => resolve(response), 2000)))
    .then(() => setLoading(false));
  };

  return (
    <div className="app_container">
      <Header function={func} />

      {loading ? (
        <LoadingAnime loading={loading} />
      ) : userData.length > 0 ? (
        <div className="all_card_container">
          {userData.map((val) => (
            <Card
              key={val.id}
              id={val.id}
              email={val.email}
              first_name={val.first_name}
              last_name={val.last_name}
              avatar={val.avatar}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default App;
