import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="logo-container">
        <svg
          className="raw_logo"
          width="500"
          height="200"
          viewBox="0 0 500 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* First name */}
          <text
            className="logo-text-first"
            x="250"
            y="90"
            textAnchor="middle"
            fill="none"
            stroke={theme.body}
            strokeWidth="2"
            fontSize="72"
            fontFamily="Agustina Regular"
            fontWeight="bold"
          >
            Soban
          </text>
          {/* Last name */}
          <text
            className="logo-text-last"
            x="250"
            y="160"
            textAnchor="middle"
            fill="none"
            stroke={theme.body}
            strokeWidth="2"
            fontSize="72"
            fontFamily="Agustina Regular"
            fontWeight="bold"
          >
            Ahmed
          </text>
        </svg>
      </div>
    );
  }
}

export default LogoLoader;
