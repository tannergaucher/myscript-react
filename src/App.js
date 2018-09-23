import React, { Component } from 'react'
import './App.css'
import * as MyScriptJS from 'myscript'
import 'myscript/dist/myscript.min.css'

const editorStyle = {
  minWidth: '100vw',
  minHeight: '100vh'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={editorStyle} ref="editor" />
      </div>
    )
  }
  componentDidMount() {
    this.editor = MyScriptJS.register(this.refs.editor, {
      recognitionParams: {
        type: 'TEXT',
        protocol: 'WEBSOCKET',
        apiVersion: 'V4',
        server: {
          scheme: 'https',
          host: 'webdemoapi.myscript.com',
          applicationKey: '0872b69d-55f4-406c-9675-cccf91ddc38c',
          hmacKey: 'be057397-5b0f-44a0-8df3-d9fc8ce9a1f3'
        }
      }
    })
    window.addEventListener('resize', () => {
      this.editor.resize()
    })
  }
}

export default App
