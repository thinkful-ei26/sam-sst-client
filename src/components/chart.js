import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import {connect} from 'react-redux';
import './chart.css'


class Chart extends React.Component{
  constructor(props){
    super(props);

// let charLabels = []
let charLabels = this.props.noteList.map(note =>note.createdAt);
let chartData = this.props.noteList.map(note =>note.objective)
let goall = this.props.studentGoal
// console.log('char',chartData);

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
            //   {
            //     label:'Goal.name.1',
            //     fill: false,
            //     data:[
            //       5,
            //       10,
            //       30,
            //       60,
            //       80,
            //       90
            //     ],
            //     backgroundColor:[
            //     //   'rgba(255, 99, 132, 0.6)',
            //       'rgba(54, 162, 235, 0.6)',
            //       'rgba(255, 206, 86, 0.6)',
            //       'rgba(75, 192, 192, 0.6)',
            //       'rgba(153, 102, 255, 0.6)',
            //       'rgba(255, 159, 64, 0.6)',
            //       'rgba(255, 99, 132, 0.6)'
            //     ]
            //   }
            ]
          }
    }
  }

//   static defaultProps = {
//     displayTitle:true,
//     displayLegend: true,
//     legendPosition:'right',
//     location:'City'
//   }

  render(){
    return (
      <div className="chart">
        {/* <Bar
          data={this.state.chartData}
          options={{}}
        /> */}

        <Line
          data={this.state.chartData}
          // width={100}
	        // height={50}
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