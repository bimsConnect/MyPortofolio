import React, {useContext} from "react";
import "./Podcast.scss";
import {podcastSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Podcast() {
  const {isDark} = useContext(StyleContext);

  if (!podcastSection)
    console.error("podcastSection object for Podcast section is missing");

  if (!podcastSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode podcast-header-subtitle"
                : "subTitle podcast-header-subtitle"
            }
          >
            {podcastSection.subtitle}
          </p>
        </div>
        <div className="podcast-main-div">
          {podcastSection.podcast.map((podcastItem, i) => {
            if (!podcastItem.link) {
              console.log(
                `Podcast link for ${podcastSection.title} is missing`
              );
            }
            return (
              <div key={i} className="podcast-item">
                <iframe
                  style={{borderRadius: "12px"}}
                  src="https://open.spotify.com/embed/playlist/7mkkg6Lj5KfywFIdfK0Z4p?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title={podcastItem.title}
                ></iframe>
                <p className="podcast-title">{podcastItem.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
