import React from 'react';
import { render } from 'react-dom';

import Tags from '../src/tag/Tags';
import NavBar from '../src/nav/NavBar';
import FloatingActionButton from '../src/button/FloatingActionButton';
import RaisedButton from '../src/button/RaisedButton';
import Badge from '../src/badge/Badge';

export default class Examples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleTags: ['aTag'],
      emailTags: ['example@gmail.com'],
      formTags: ['aFormTag']
    };
  }

  handleSimpleTagChange(simpleTags) {
    this.setState({simpleTags})
  }

  handleEmailTagChange(emailTags) {
    this.setState({emailTags})
  }

  handleFormTagChange(formTags) {
    this.setState({formTags})
  }

  render() {

    let EMAIL_VALIDATION_REGEX = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i

    return (
        <div>
            <article>
              <h4>NavBar</h4>
            </article>
            <NavBar
              brand='Tango UI'
              links={[
                { url: '/members', label: 'Members' },
                { url: '/projects', label: 'Projects' },
                { url: '/users', label: 'Users' },
                { url: '/login', label: 'Login' }
              ]} />


            <article>
              <h4>RaisedButton</h4>
            </article>
            <div style={{marginLeft: '50px'}}>
              <RaisedButton style={{margin: '12px'}}> Default </RaisedButton>
              <br/>
              <br/>
              <RaisedButton style={{margin: '12px'}} primary='true'> Primary </RaisedButton>
              <br/>
              <br/>
              <RaisedButton style={{margin: '12px'}} secondary='true'> Secondary </RaisedButton>
              <br/>
              <br/>
              <RaisedButton style={{margin: '12px'}} disabled='true'> Disabled </RaisedButton>
              <br/>
              <br/>
            </div>
            <RaisedButton style={{margin: '12px'}} primary='true' fullWidth='true'> Primary + Full Width </RaisedButton>


            <article>
              <h4>FloatingActionButton</h4>
            </article>
            <div style={{marginLeft: '50px'}}>

              <FloatingActionButton> <i className='fa fa-plus'></i> </FloatingActionButton>
              <br/>
              <br/>
              <FloatingActionButton primary='true'> <i className='fa fa-plus'></i> </FloatingActionButton>
              <br/>
              <br/>
              <FloatingActionButton secondary='true'> <i className='fa fa-minus'></i> </FloatingActionButton>
              <br/>
              <br/>
              <FloatingActionButton disabled='true'> <i className='fa fa-plus'></i> </FloatingActionButton>
            </div>

            <article>
              <h4>Badge</h4>
            </article>
            <div style={{marginLeft: '50px'}}>
              <Badge>{'Default'}</Badge>
              <Badge primary='true'> {'Primary'} </Badge>
              <Badge secondary='true'> {'Secondary'} </Badge>
            </div>

            <article>
              <h4>Simple Tags</h4>
            </article>
            <div style={{marginLeft: '50px'}}>
              <Tags value={this.state.simpleTags} onChange={::this.handleSimpleTagChange} />
            </div>

            <article>
              <h4>Email Tags</h4>
            </article>
            <div style={{marginLeft: '50px'}}>
              <Tags
                value={this.state.emailTags}
                addKeys={[9, 13, 32, 186, 188]} // tab, enter, space, semicolon, comma
                onlyUnique={true}
                addOnPaste={true}
                placeholder={'Email'}
                validationRegex={EMAIL_VALIDATION_REGEX}
                pasteSplit={data => {
                  return data.replace(/[\r\n,;]/g, ' ').split(' ').map(d => d.trim())
                }}
                onChange={::this.handleEmailTagChange} />
            </div>

            <article>
              <h4>Tags inside Form</h4>
            </article>
            <div style={{marginLeft: '50px'}}>
              <form>
                <Tags name='form' onlyUnique={true} value={this.state.formTags} onChange={::this.handleFormTagChange} />
              </form>
            </div>
        </div>
    );
  }
}

render(<Examples />, document.getElementById('app'))
