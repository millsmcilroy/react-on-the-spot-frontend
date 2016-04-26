//i am a container, which is connected to state. this is what will be loaded to the App through the router.
import React, { Component } from 'react';
import { Link } from 'react-router';

class GameAnswers extends Component {
  render() {
    return (
      <div>
                <div className="row" id="teamGameAnswers">
                    <table class="u-full-width">
                    <h1>Answers</h1>
                      <thead>
                        <tr>
                          <th>Team Name</th>
                          <th>Answer Given</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>(team)</td>
                          <td>(answer)</td>
                        </tr>
                        <tr>
                          <td>(team)</td>
                          <td>(answer)</td>
                        </tr>
                      </tbody>    
                    </table>   
                    <button>Add Scores</button>
                    <button id="show" onClick={showModal()}>Select Next Question</button>
                </div>
      </div>
    );
  }
}


export default GameAnswers;

 