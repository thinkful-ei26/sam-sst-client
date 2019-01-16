import React from 'react';
import {Line} from 'react-chartjs-2';
import {connect} from 'react-redux';
import './chart.css'


class Chart extends React.Component{
  constructor(props){
    super(props);

// let charLabels = []
let charLabels = this.props.noteList.map(note =>note.createdAt);
let chartData = this.props.noteList.map(note =>note.objective)
let goall = this.props.studentGoal

    this.state = {
        chartData:{
            labels: charLabels,
            datasets:[
              {
                label: goall,
                
                fill: false,
                data:chartData,
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                ],
                color: [
            
                  'green'
                  
              ]
              },
            
            ]
          }
    }
  }


  render(){
    return (
      <div className="chart">

        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:false,
              text:'Student.name',
              fontSize:25
            },
            legend:{
              display:false,
              position:'right'
            },
            layout:{
              padding:{
                top:0,
                bottom:0,
                left:0,
                right:0
              }

            },
            width:{

            },
	          height:{

            },
            tooltips: {
              enabled:true
            },
            scales: {
              
              yAxes: [{
                  ticks: {
                      beginAtZero:true,
                      max:100
                  }
              }],
              xAxes: [{
                ticks: {
                    display: false //this will remove only the label
                }
            }]
          }
            // maintainAspectRatio: false
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
    // console.log(state);
    return{
        noteList: state.studentReducer.students.find((students) => students._id.toString() === state.student.currentStudent).notes,
        studentId: state.student.currentStudent,
        studentGoal: state.student.currentStudentGoals,
        userId: state.auth.currentUser.id,
    }
}

export default connect(mapStateToProps)(Chart);