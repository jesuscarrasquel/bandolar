import React, { Component } from 'react';
import '../pages/styles/Home.css';
import '../pages/styles/HomeDesktop.css';

class HomeList extends Component {


    render() {
        return (

            <React.Fragment>
                {this.props.badge.map(badges => {
                    return(
                    <div className="col-12 col-md-5 box-home animado" key={badges.id}>
                    <img src={badges.image} alt={badges.image}/>
                        <h2>{badges.info}</h2>
                        <p>{badges.description}</p>
                    </div>
                    )
                })}

            </React.Fragment>
        
        );
    }
}

export default HomeList;