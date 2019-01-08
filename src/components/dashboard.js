import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requiresLogin';
import {fetchProtectedData} from '../actions/protectedData';
import HeaderBar from './headerBar';
import Students from './students';
import Notes from './notes';
import Chart from './chart';
import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        // if (this.props.studnet) {
        //     return (
        //         <div >
        //     <HeaderBar />
        //     <Students />
        //     <Notes />
        //     <Chart />
        //     </div>
        //     );
        // }
    
        
        return (
            <div className='everything'>
            <div className="heaad">
            <HeaderBar />
            </div>
            <div className="dash">
            <div  className="students ib">
            <Students />
            </div>
            <div  className="notes ib">
            
            <Notes />
            </div>
            <div className="">
            {/* <Chart /> */}
            </div>
            </div>
            {/* <Notes /> */}
            
            
            </div>

            
            // <div className="dashboard">
            //     <div className="dashboard-name">Name: {this.props.name}</div>
            //     <div className="dashboard-protected-data">
            //         Protected data: {this.props.protectedData}
            //     </div>
            // </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('>><>>',state)
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        studnet: state.student.currentStudent 
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
