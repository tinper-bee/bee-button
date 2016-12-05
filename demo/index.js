import DemoArray from './ButtonDemo';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../src';

const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;

class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, description  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
              { caret }
              { text }
            </Button>
        );

        return (
            <Col md={8}>
                <h3>{ title }</h3>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <Row>
                    <Col md={ description ? 9 : 12}>
                            <pre>
                            <code>{ code }</code>
                            </pre>
                    </Col>
                    { description && <Col md={3}> description </Col>}
                    </Row>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (

                <Row>
                {DemoArray.map((child,index) => {

                    return (
                        <Demo example= {child.example} title= {child.title} code= {child.code} description= {child.description} key= {index}/>
                    )

                })}
                </Row>
        )
    }
}



ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
