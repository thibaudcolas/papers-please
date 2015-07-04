'use strict';

import React from 'react';
import styleReport from '../util/style-report';

export default React.createClass({
    displayName: 'PaperStyleReport',

    componentDidMount() {
        console.log(this.props.report);
        styleReport.init();
    },

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-md-offset-3' id='alert-container'> </div>
                </div>
                <div className='row'>
                    <div className='col-md-8 column-left'>
                        <div className='text-large' id='tutorial-text'>
                            {this.props.report ? this.props.report.text : ''}
                        </div>
                    </div>
                    <div className='col-md-4 column-right'>
                        <button type='button' className='btn btn-primary btn-lg btn-block' data-loading-text='Analyzing...'
                                data-complete-text='Analysis complete' id='analyze-text'><span className='glyphicon glyphicon-search'></span> Analyze text</button>
                        <div id='spinner-container'> </div>
                        <div id='metrics-tables'>
                            <button type='button' className='btn btn-default btn-lg btn-block' id='clean-text'><span className='glyphicon glyphicon-download'></span> Clean text formatting</button>
                            <p className='text-large'>Metrics for editing <a href='/metrics#editing-metrics' target='_blank' className='metrics-info-link' id='editing-metrics-link'><span className='glyphicon glyphicon-info-sign'></span></a></p>
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
                            <p className='text-large'>General metrics <a href='/metrics#general-metrics' target='_blank' className='metrics-info-link' id='general-metrics-link'><span className='glyphicon glyphicon-info-sign'></span></a></p>
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
        );
    }
});
