import { useState, useEffect } from "react";

import Headers from "../../hw_components/Headers/Headers";
import { Navigation } from "../../hw_components/index";
import Loading from "../../../components/Loading";

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
      <Headers>
        <p className="desc">
          Chinh phục ReactJS cùng F8 -
          <a
            href="https://fullstack.edu.vn/"
            target="_blank"
            rel="noopener noreferrer">
            fullstack.edu.vn
          </a>
          Học lập trình để đi làm!
        </p>
      </Headers>
      <Navigation>
        <h2>Bài tập 2.1.4: Profile Card</h2>
        <a
          href="https://github.com/xuanphao19/ReactJS-Practice-F88/blob/main/src/homework/homework_2/Homework_2_3/Homework_2_3.jsx"
          className="repositories"
          target="_blank"
          rel="noopener noreferrer">
          <span>⭐</span> Repositories GitHub
        </a>
      </Navigation>
      <div className="exercise-content">
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
