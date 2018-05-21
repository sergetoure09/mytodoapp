import React, { Component } from 'react';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor'



class App extends Component {
  render() {
    return (
      <div className="App">
      <Card label='Sample Label'
            heading='Sample Heading'
            description='Sample description providing more details.'
            video={{"source": "/video/test.mp4", "type": "mp4"}}
            link={<Anchor href=''
            label='Sample anchor' />}
            textSize='medium' />
      </div>
    );
  }
}

export default App;
