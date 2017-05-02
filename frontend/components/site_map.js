import React from 'react';

class SiteMap extends React.Component {

  render() {
    return (
      <div id='sitemap'>
        <a href="https://github.com/nkhem/gulp">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/nkhem/" target="_blank">
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
      </div>
    );
  }

}

export default SiteMap;
