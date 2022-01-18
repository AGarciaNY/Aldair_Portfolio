import React,{Component} from 'react';
import styled from '@emotion/styled';
import questions from './questionlist';
import questionkeys from './keys';
import './survay';

const Questionholder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
`;
const Row =styled.div`
  display: flex;
  flex-direction: row;`;
const Question = styled.div`
  margin:5px
`;
const Formholder = styled.div`
  margin:5px 0 16px 5px;
`;
const Submit= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const data=[];

export default class Survay extends Component{
  constructor() {
    super();
    this.state = {
      name:'nc',
      gmail:'nc',
      comment:''
    }
  }
  handleInputChange=(event)=> {
    
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(value);
    this.setState({
      [name]: value
    });
    
  }

  Submission=()=>{
    
    data.push(
      <div>{this.state.Gender},</div>,
      <div>{this.state.SexualOrientation},</div>,
      <div>{this.state.EthnicityRace},</div>,
      <div>{this.state.Language},</div>,
      <div>{this.state.DisablityStatus},</div>,
      <div>{this.state.VeteranStatus},</div>,
      <div>{this.state.CaregiverStatus},</div>,
      <div>{this.state.Sector},</div>,
      <div>{this.state.Religion},</div>,
      <div>{this.state.SocioeconomicStatus},</div>,
      <div>{this.state.ImmigtationStatus},</div>,
      <div>{this.state.HourlyWage},</div>,
      <div>{this.state.Hours},</div>,
    );
    this.setState({
      inofrmation: data
    });


    console.log(data)
  }
  render(){

    let questionlist=[];
    for(var i=0; i<questions.length; i++){
      questionlist.push(
          <Questionholder>
            <div>
              <Question>{questions[i]}:</Question>
            </div>
            <Formholder>
              <form action="/action_page.php" method="get">
                  <input list="browsers" name={questionkeys[i]}
                  onChange={this.handleInputChange}/>
                  <datalist id="browsers">
                    <option value="Internet Explorer"/>
                    <option value="male"/>
                    <option value="male"/>
                    <option value="Italian"/>
                    <option value="english"/>
                    <option value="christainity"/>
                    <option value="male"/>
                    <option value="visa"/>

                  </datalist>
              </form>
            </Formholder>
          </Questionholder>
      );
    }
    return(
      <div>
        {questionlist}
        <Submit>
          <button onClick={()=> this.Submission()}>Submit</button>
        </Submit>
        <Row>
        {this.state.inofrmation}
        </Row>
      </div>
    );
  }

}
