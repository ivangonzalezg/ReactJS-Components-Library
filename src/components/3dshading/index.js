import React, { Component } from "react";
import "./index.css";

class DShading extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <ul className="stage clearfix">
            <li className="scene">
              <div className="movie">
                <div className="poster" />
                <div className="info">
                  <header>
                    <h1>It's a Wonderful Life</h1>
                    <span className="year">1946</span>
                    <span className="rating">PG</span>
                    <span className="duration">130 minutes</span>
                  </header>
                  <p>
                    In Bedford Falls, New York on Christmas Eve, George Bailey
                    is deeply troubled. Prayers for his well-being from friends
                    and family reach Heaven. Clarence Odbody, Angel Second
                    Class, is assigned to visit Earth to save George, thereby
                    earning his wings. Franklin and Joseph, the head angels,
                    review George's life with Clarence.
                  </p>
                </div>
              </div>
            </li>

            <li className="scene">
              <div className="movie">
                <div className="poster" />
                <div className="info">
                  <header>
                    <h1>Vengeance Valley</h1>
                    <span className="year">1951</span>
                    <span className="rating">NR</span>
                    <span className="duration">83 minutes</span>
                  </header>
                  <p>
                    A cattle baron takes in an orphaned boy and raises him,
                    causing his own son to resent the boy. As they get older the
                    resentment festers into hatred, and eventually the real son
                    frames his stepbrother for fathering an illegitimate child
                    that is actually his, seeing it as an opportunity to get his
                    half-brother out of the way so he can have his father's
                    empire all to himself.
                  </p>
                </div>
              </div>
            </li>

            <li className="scene">
              <div className="movie">
                <div className="poster" />
                <div className="info">
                  <header>
                    <h1>The Gold Rush</h1>
                    <span className="year">1925</span>
                    <span className="rating">NR</span>
                    <span className="duration">95 minutes</span>
                  </header>
                  <p>
                    The Tramp travels to the Yukon to take part in the Klondike
                    Gold Rush. He gets mixed up with some burly characters and
                    falls in love with the beautiful Georgia. He tries to win
                    her heart with his singular charm.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DShading;
