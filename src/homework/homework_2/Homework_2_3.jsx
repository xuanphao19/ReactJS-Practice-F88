import { useState, useEffect } from "react";
import Header from "../../layout/Header/Header";
import Loading from "../../components/Loading";

function Profile() {
  const [artist, setArtist] = useState({});
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        const user = data.results[0];
        setArtist({
          name: user.name,
          username: user.login.username,
          email: user.email,
          phone: user.phone,
          website: "https://fullstack.edu.vn/",
          address: `${user.location.street.name}, ${user.location.city}`,
          avatar_url: user.picture.large,
        });
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="exercise-content">
        <h2>Bài tập 2.3: Profile Card ROUTES</h2>
        <a
          href="https://github.com/xuanphao19/ReactJS-Practice-F88/blob/main/src/homework/homework_2/Homework_2_3.jsx"
          className="repositories">
          Repositories GitHub
        </a>
        <div className="answer-content">
          {!artist.avatar_url ? (
            <Loading />
          ) : (
            <div className="profile-card">
              <img src={artist.avatar_url} alt="Profile Picture" />
              <h3>
                <strong>{artist.name.title}: </strong>
                {artist.name.last} {artist.name.first}
              </h3>
              <div className="username">{artist.username}</div>
              <div className="info">
                <p>
                  <strong>Email:</strong>
                  <a href="mailto:contact@fullstack.edu.vn">{artist.email}</a>
                </p>
                <p>
                  <strong>Phone:</strong> {artist.phone}
                </p>
                <p>
                  <strong>Website:</strong>
                  <a href={artist.website} target="_blank">
                    {artist.website}
                  </a>
                </p>
                <p>
                  <strong>Address:</strong>
                  {artist.address}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Profile;
