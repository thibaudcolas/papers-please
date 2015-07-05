'use strict';

import React from 'react';
import styleReport from '../util/style-report';

export default React.createClass({
    displayName: 'PaperStyleReport',

    componentDidMount() {
        console.log(this.props.report);
        if (this.props.report) {
            styleReport.init(this.props.report);
        }
    },
    
    toggletable() {
      jQuery('#articletable').toggle();
    },

    render() {
        return (<div>          

                     


            <div className='container-fluid'>

              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation"><a href="#overview" aria-controls="overview" role="tab" data-toggle="tab">Overview</a></li>
                <li role="presentation" className="active"><a href="#grammar" aria-controls="grammar" role="tab" data-toggle="tab">Grammar</a></li>
                <li role="presentation"><a href="#plagiarism" aria-controls="plagiarism" role="tab" data-toggle="tab">Plagiarism</a></li>
                <li role="presentation"><a href="#usability" aria-controls="usability" role="tab" data-toggle="tab">Usability</a></li>
                <li role="presentation"><a href="#style" aria-controls="style" role="tab" data-toggle="tab">Style Guide Compliance</a></li>
                <li role="presentation"><a href="#reference" aria-controls="reference" role="tab" data-toggle="tab">Reference Check</a></li>
              </ul>


              <div className="tab-content">


                <div role="tabpanel" className="tab-pane" id="overview">
                  <div className="panel panel-success">
                    <div className="panel-heading text-center">
                      <h3 className="panel-title">Great Work! You score 82/100</h3>
                    </div>

                    <div className="panel-body">
                      <img src="public/img/visualisations1.png" />
                    </div>

                  </div> 
                </div>

                <div role="tabpanel" className="tab-pane active" id="grammar">
                      <div className='row-fluid'>
                          <div className='col-md-6 col-md-offset-3' id='alert-container'> </div>
                      </div>
                      <div className='row-fluid'>
                          <div className='col-md-8 column-left'>
                              <div className='text-large' id='tutorial-text'>
                                  {this.props.report ? this.props.report.text : ''}
                              </div>
                          </div>
                          <div className='col-md-4 column-right'>
                              <div id='metrics-tables'>
                                  <p className='text-large'>Grammar and Spelling</p>

                                  <table className='table table-bordered table-hover text-medium'>
                                      <tr> <td><span className='metric' data-metric='synonyms'>synonyms</span></td> <td><span className='glyphicon glyphicon-ok-circle' id='synonyms-button'></span>
                                               <span> </span><span id='synonyms-hover-text'>hover mouse over words in text to see synonyms</span></td> </tr>
                                      <tr> <td><span className='metric' data-metric='weak-verbs'>weak verbs</span></td> <td id='weak-verb-ratio'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='filler-words'>filler words</span></td> <td id='filler-ratio'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='nominalizations'>nominalizations</span></td> <td id='nominalization-ratio'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='entity-substitutions'>entity substitutions</span></td> <td id='entity-substitution-ratio'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='negations'>negations per sentence</span></td> <td id='negation-ratio'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='noun-clusters'>clustered nouns</span></td> <td id='noun-cluster-ratio'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='passive-voice'>passive voice per sentence</span></td> <td id='passive-voice-ratio'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='modals'>modals</span></td> <td id='modal-ratio'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='rare-words'>rare words</span></td> <td id='rare-word-ratio'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='long-sents'>extra long sentences</span></td> <td id='long-sentences-ratio'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='short-sents'>extra short sentences</span></td> <td id='short-sentences-ratio'></td> </tr>
                                      <tr> <td>frequent words (stems)</td> <td id='word-freq'></td> </tr>
                                      <tr> <td>frequent bigrams (stems)</td> <td id='bigram-freq'></td> </tr>
                                      <tr> <td>frequent trigrams (stems)</td> <td id='trigram-freq'></td> </tr>
                                  </table>
                                  <p className='text-large'>General metrics</p>
                                  <table className='table table-bordered table-hover text-medium'>
                                      <tr> <td>characters</td> <td id='character-count'></td> </tr>
                                      <tr> <td>words</td> <td id='word-count'></td> </tr>
                                      <tr> <td><span data-metric='vocabulary-size'>vocabulary size</span></td> <td id='vocabulary-size'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='sents'>sentences</span></td> <td id='sentence-count'></td> </tr>
                                      <tr> <td>words per sentence</td> <td><span id='words-per-sentence'></span><span id='std-of-words-per-sentence'></span></td> </tr>
                                      <tr> <td>syllables per word</td> <td id='syllables-per-word'></td> </tr>
                                      <tr> <td>characters per word</td> <td id='characters-per-word'></td> </tr>
                                      <tr> <td><span data-metric='readability'>readability grade</span></td> <td id='readability'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='nouns'>nouns</span></td> <td id='noun-ratio'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='pronouns'>pronouns</span></td> <td id='pronoun-ratio'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='verbs'>verbs</span></td> <td id='verb-ratio'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='adjectives'>adjectives</span></td> <td id='adjective-ratio'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='adverbs'>adverbs</span></td> <td id='adverb-ratio'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='other-pos'>other parts of speech</span></td> <td id='other-pos-ratio'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='declar-sents'>declarative sentences</span></td> <td id='declarative-ratio'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='inter-sents'>interrogative sentences</span></td> <td id='interrogative-ratio'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='exclam-sents'>exclamative sentences</span></td> <td id='exclamative-ratio'></td> </tr>
                                      <tr> <td><span className='metric' data-metric='stopwords'>stopwords</span></td> <td id='stopword-ratio'></td> </tr>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>

                <div role="tabpanel" className="tab-pane" id="plagiarism">
                    <img src="public/img/visualisations2.png" />
                </div>
                
                <div role="tabpanel" className="tab-pane" id="usability">
                    <img src="public/img/visualisations3.png" />
                </div>
                
                <div role="tabpanel" className="tab-pane" id="style">
                  <table className="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Column heading</th>
                            <th>Column heading</th>
                            <th>Column heading</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="active">
                            <th scope="row">1</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr className="success">
                            <th scope="row">3</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr className="info">
                            <th scope="row">5</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr className="warning">
                            <th scope="row">7</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr>
                            <th scope="row">8</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr className="danger">
                            <th scope="row">9</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                        </tbody>
                      </table>
                </div>
                
                <div role="tabpanel" className="tab-pane" id="reference">
                    <h1>Choose the standard you would like to comply with.</h1>
                    <div className="form-group">
                      <select className="form-control" onChange={ this.toggletable }>
                        <option></option>
                        <option>Nature</option>
                        <option>Journal Of American Chemical Society</option>
                        <option>Lorem ipsum</option>
                        <option>Great Journal</option>
                      </select>
                    </div>

                    
                    <table className="table" id="articletable" style={{'display':'none'}}>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Column heading</th>
                            <th>Column heading</th>
                            <th>Column heading</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="active">
                            <th scope="row">1</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr className="success">
                            <th scope="row">3</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr className="info">
                            <th scope="row">5</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr className="warning">
                            <th scope="row">7</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr>
                            <th scope="row">8</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr className="danger">
                            <th scope="row">9</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                        </tbody>
                      </table>
                </div>
              </div>
            </div>

        </div>);
    }
});
