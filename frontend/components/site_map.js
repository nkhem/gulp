import React from 'react';

class SiteMap extends React.Component {

  render() {
    return (
      <div id='sitemap'>
        <a href="https://github.com/nkhem/gulp">
          <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/nkhem/" target="_blank">LinkedIn</a>
      </div>
    );
  }

}

export default SiteMap;
