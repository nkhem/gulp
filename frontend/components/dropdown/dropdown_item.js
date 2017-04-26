import React from 'react';
import { withRouter } from 'react-router';

class DropdownItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

    handleClick(e){
      e.preventDefault();

      let { searchResults: {categoryTitles, businessTitles} } = this.props;

      let searchAlias = this.props.itemTitle.toLowerCase().replace(/[^0-9a-z]/g,'');
      let categoryAliases = categoryTitles
        .map( title => title.toLowerCase().replace(/[^0-9a-z]/g,'')).sort((a,b) => a.length - b.length);

      let businessAliases = businessTitles
        .map( title => title.toLowerCase().replace(/[^0-9a-z]/g,'')).sort((a,b) => a.length - b.length);

      let cat = categoryAliases.find( alias => alias.match(searchAlias));
      let biz = businessAliases.find( alias => alias.match(searchAlias));

      if (cat) {
        this.props.fetchBusinessesByCategory(cat)
          .then( () => this.props.router.replace(`/search?category='${cat}'`));
      } else if (biz) {
        this.props.fetchBusiness(biz)
          .then( res => this.props.router.replace(`/business/${res.business.id}`));
      } else {
        console.log('no matches found');
      }
    }

  render() {
    return (
      <li onClick={this.handleClick}>
        { this.props.itemTitle }
      </li>
    );
  }

}

export default withRouter(DropdownItem);
