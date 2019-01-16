import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requiresLogin';
import HeaderBar from './headerBar';
import Students from './students';
import Notes from './notes';
import './dashboard.css';

export class Dashboard extends React.Component {

    render() {
        return (
            <div className='everything'>
            {/* <div className="heaad"> */}
            <HeaderBar />
            {/* </div> */}
            <div className="dash">
            <div  className="students ib">
            <Students />
            </div>
            <div  className="notes ib">
            
            <Notes />
            </div>
            <div className="">
            </div>
            </div>
           
            
            
            </div>   
       );
    }
}

const mapStateToProps = state => {
    console.log('>><>>',state)
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
       
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
