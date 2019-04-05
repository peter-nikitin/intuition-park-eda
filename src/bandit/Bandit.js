import React, {Component} from 'react'
import './bandit.scss';

class Bandit extends Component {
    render() {
        return (
          <div className="bandit">
            <div className="bandit__spinner">Здесь будет бандит</div>
            <div className="bandit__spinner">Здесь будет бандит</div>
            <div className="bandit__spinner">Здесь будет бандит</div>
          </div>
        );
    }
}

export default Bandit;