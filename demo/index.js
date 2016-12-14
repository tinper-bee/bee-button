
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../src';


const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 *
 * @title 默认按钮
 *
 */

class Demo1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    render () {
        return (
            <div className="demoPadding">
                <Button>Default</Button>
                <Button disabled>disabled</Button>
            </div>
        )
    }
}
/**
 *
 * @title 不同大小的按钮
 *
 */

class Demo2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    render () {
        return (
            <div className="demoPadding">
                <Button size="sm" colors="primary">小按钮</Button>
                <Button colors="primary">默认</Button>
                <Button size="lg" colors="primary">大按钮</Button>
                <Button size="xg" colors="primary">巨大按钮</Button>
            </div>
        )
    }
}
/**
 *
 * @title 不同颜色的按钮
 *
 */

class Demo3 extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className="demoPadding">
                <Button colors="primary">主色按钮</Button>
                <Button colors="accent">辅色按钮</Button>
                <Button colors="success">success</Button>
                <Button colors="info">info</Button>
                <Button colors="warning">warning</Button>
                <Button colors="danger">danger</Button>
            </div>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 默认按钮","code":"/**\r\n *\r\n * @title 默认按钮\r\n *\r\n */\r\n\r\nclass Demo1 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n        this.state = {\r\n            open: false\r\n        }\r\n    }\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Button>Default</Button>\r\n                <Button disabled>disabled</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n"},{"example":<Demo2 />,"title":" 不同大小的按钮","code":"/**\r\n *\r\n * @title 不同大小的按钮\r\n *\r\n */\r\n\r\nclass Demo2 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n        this.state = {\r\n            open: false\r\n        }\r\n    }\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Button size=\"sm\" colors=\"primary\">小按钮</Button>\r\n                <Button colors=\"primary\">默认</Button>\r\n                <Button size=\"lg\" colors=\"primary\">大按钮</Button>\r\n                <Button size=\"xg\" colors=\"primary\">巨大按钮</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n"},{"example":<Demo3 />,"title":" 不同颜色的按钮","code":"/**\r\n *\r\n * @title 不同颜色的按钮\r\n *\r\n */\r\n\r\nclass Demo3 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n    }\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Button colors=\"primary\">主色按钮</Button>\r\n                <Button colors=\"accent\">辅色按钮</Button>\r\n                <Button colors=\"success\">success</Button>\r\n                <Button colors=\"info\">info</Button>\r\n                <Button colors=\"warning\">warning</Button>\r\n                <Button colors=\"danger\">danger</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n"}]


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
        const { title, example, code  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        const header = (
            <Row>
                <Col md={11}>
                {example}
                </Col>
                <Col md={1}>
                <Button shape="icon" onClick={ this.handleClick }>{caret}</Button>
                </Col>
            </Row>
        );
        return (
            <Col md={10} mdOffset={1} xs={12} xsOffset={0}>
                <h4>{ title }</h4>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ header } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
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
                            <Demo example= {child.example} title= {child.title} code= {child.code} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
