import React from 'react';

class DownloadResumeButton extends React.Component {
  downloadResume = () => {
    // Replace the placeholder URL with the actual URL of your resume file on Google Drive
    const resumeURL = "https://drive.google.com/file/d/1bD6htbH4HEIxroWMITkTOje4K2OnYFVp/view";
    const link = document.createElement("a");
    link.href = resumeURL;
    link.download = "resume.pdf"; // You can modify the file name and extension as needed
    link.click();
  };
  // <span style={{ '--i': 1 }}>S</span>
  // <span style={{ '--i': 2 }}>h</span>
  render() {
    return (
      <button className='waviy inline' onClick={this.downloadResume}>
        <h1>
        <span style={{ '--i': 1 }}>D</span>
        <span style={{ '--i': 2 }}>o</span>
        <span style={{ '--i': 3 }}> w</span>
        <span style={{ '--i': 4 }}> n</span>
        <span style={{ '--i': 5 }}> l</span>
        <span style={{ '--i': 6 }}> o</span>
        <span style={{ '--i': 7 }}> a</span>
        <span style={{ '--i': 8 }}>d</span>

        <span className='ml-1' style={{ '--i': 9 }}> R</span>
        <span style={{ '--i': 10 }}> e</span>
        <span style={{ '--i': 11 }}> s</span>
        <span style={{ '--i': 12 }}> u</span>
        <span style={{ '--i': 13 }}> m</span>
        <span style={{ '--i': 14 }}> e</span>
        </h1>
       
        </button>
    );
  }
}

export default DownloadResumeButton;
