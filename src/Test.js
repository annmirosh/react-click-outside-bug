import React, {Component} from 'react';
import enhanceWithClickOutside from 'react-click-outside';

class Test extends Component {

    handleClickOutside() {
        console.info('outside click');
    }

    render() {
        return (
            <div className="test">
                Test
            </div>
        );
    }
}

export default enhanceWithClickOutside(Test);
