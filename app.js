

import React from 'react'
import ReactDOM from 'react-dom'

class items extends React.Component {
    state = {
        items: [],
      };
    
      componentDidMount() {
        this.setState({ items: Seed.items });
      }

      likeitems = (productId) => {
        const newitems = this.state.items.map((product) => {
          if (product.id === productId) {
            return Object.assign({}, product, {
              votes: product.votes + 1,
            });
          } else {
            return product;
          }
        });
        this.setState({
          items: newitems,
        });
      }


    render() {

        const items = this.state.items.sort((a, b) => (
            b.votes - a.votes
        ));

        const productComponents = items.map((product) => (
            <Product
              key={'product-' + product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              url={product.url}
              votes={product.votes}
              submitterAvatarUrl={product.submitterAvatarUrl}
              productImageUrl={product.productImageUrl}
              onVote={this.likeitems}
            />
          ));

        return (
            <div className="container">
                <h1>Popular items</h1>
                <hr />
                {productComponents}
            </div>
        );
    }
}

class Product extends React.Component {
    constructor() {
        super();
        this.itemlike = this.itemlike.bind(this);
    }

    itemlike() {
        this.props.onVote(this.props.id);
    }
    render() {
        return (
          <div className='container'>
            <div className="row">
            <div className='col-md-12'>
                <div className="main">
                <div className="image">  
                    <img src={this.props.productImageUrl} />
                </div> 

                <div className='header'>
                    <a onClick={this.itemlike}>
                        <i className='fa fa-2x fa-caret-up' />
                    </a>
                    {this.props.votes}
                </div>
                <div className='description'>
                    <a href={this.props.url}>
                        {this.props.title}
                    </a>
                    <p>
                        {this.props.description}
                    </p>
                </div>
              <div className='extra'>
                <span>Submitted by:</span>
                <img
                  className='avatar'
                  src={this.props.submitterAvatarUrl}
                />
              </div>
              </div>
            </div>
            </div>
          </div>
        );
      }
}


ReactDOM.render(<items />, document.getElementById('content'));