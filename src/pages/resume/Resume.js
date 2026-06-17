import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import "./Resume.css";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import TopButton from "../../components/topButton/TopButton";

export default class ResumePage extends Component {
  render() {
    const theme = this.props.theme;

    // Convert Google Drive share link to direct embed URL
    const fileIdMatch = greeting.resumeLink
      ? greeting.resumeLink.match(/\/d\/(.+?)\//)
      : null;
    const fileId = fileIdMatch ? fileIdMatch[1] : null;
    const embedLink = fileId
      ? `https://drive.google.com/file/d/${fileId}/preview`
      : "";

    return (
      <div className="resume-main" style={{ backgroundColor: theme.body }}>
        <Header theme={theme} />
        <div className="resume-view">
          <Fade bottom duration={2000} distance="40px">
            <div className="resume-header-section">
              <h1 className="resume-title" style={{ color: theme.text }}>
                My Resume
              </h1>
              <p
                className="resume-subtitle"
                style={{ color: theme.secondaryText }}
              >
                A summary of my education, work experience, skills, and
                projects.
              </p>

              {/* Action Buttons */}
              <div className="resume-actions">
                <Button
                  text="📄 Download Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
            </div>
          </Fade>

          <Fade bottom duration={1500} distance="30px">
            {embedLink ? (
              <div className="resume-embed-wrapper">
                <div
                  className="resume-embed-card"
                  style={{
                    boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12)`,
                    borderColor: theme.highlight,
                  }}
                >
                  <iframe
                    src={embedLink}
                    className="resume-iframe"
                    title="Soban Ahmed Resume"
                    allow="autoplay"
                  ></iframe>
                </div>
              </div>
            ) : (
              <div
                className="resume-message"
                style={{
                  color: theme.text,
                  textAlign: "center",
                  marginTop: "50px",
                }}
              >
                <p>
                  Add your Google Drive PDF link to <code>resumeLink</code> in{" "}
                  <code>src/portfolio.js</code> to display your resume here.
                </p>
              </div>
            )}
          </Fade>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}
