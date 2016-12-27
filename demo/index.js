
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../src';
import ReactZeroClipboard from 'react-zeroclipboard';


var zclipProps = {
    swfPath: 'http://bee.tinper.org/clipboard/ZeroClipboard.swf'
};

const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 *
 * @title 默认按钮
 * @description 基础按钮
 *
 */

class Demo1 extends Component {
    render () {
        return (
            <div className="demoPadding">
                <Button>Default</Button>
                <Button disabled>disabled</Button>
                <Button shape="border">border</Button>
            </div>
        )
    }
}
/**
 *
 * @title 不同形状的按钮
 * @description 通过`shape`属性控制按钮大小
 *
 */

class Demo2 extends Component {
    render() {
        return (
            <div className="demoPadding">
                <Col md={6} xs={12}>
                    <Button shape="block" colors="primary">块状按钮</Button>
                </Col>
                <Col md={6} xs={12}>
                    <Button shape="round" colors="primary">圆形边按钮</Button>
                    <Button shape="squared" colors="warning">方形按钮</Button>
                    <Button shape="floating" colors="primary">圆形按钮</Button>
                </Col>
            </div>
        )
    }
}
/**
 *
 * @title 不同颜色的按钮
 * @description 通过`colors`属性控制按钮颜色
 *
 */

class Demo3 extends Component {

    render () {
        return (
            <div className="demoPadding">
                    <Button colors="success">success</Button>
                    <Button colors="info">info</Button>
                    <Button colors="warning">warning</Button>
                    <Button colors="danger">danger</Button>
                <div className="divider"></div>
                    <Button shape="border" colors="success">success</Button>
                    <Button shape="border" colors="warning">info</Button>
                    <Button shape="border" colors="info">warning</Button>
                    <Button shape="border" colors="danger">danger</Button>
            </div>
        )
    }
}
/**
 *
 * @title 不同大小的按钮
 * @description 通过`size`属性控制按钮大小
 *
 */

class Demo4 extends Component {
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
 * @title 事件按钮
 * @description 点击按钮触发事件
 *
 */

class Demo5 extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        alert("谢谢你点我")
    }

    render() {
        return (
            <Button colors="primary" onClick={ this.handleClick }>事件按钮</Button>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 默认按钮","code":"/**\n *\n * @title 默认按钮\n * @description 基础按钮\n *\n */\n\nclass Demo1 extends Component {\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <Button>Default</Button>\n                <Button disabled>disabled</Button>\n                <Button shape=\"border\">border</Button>\n            </div>\n        )\n    }\n}\n","desc":" 基础按钮"},{"example":<Demo2 />,"title":" 不同形状的按钮","code":"/**\n *\n * @title 不同形状的按钮\n * @description 通过`shape`属性控制按钮大小\n *\n */\n\nclass Demo2 extends Component {\n    render() {\n        return (\n            <div className=\"demoPadding\">\n                <Col md={6} xs={12}>\n                    <Button shape=\"block\" colors=\"primary\">块状按钮</Button>\n                </Col>\n                <Col md={6} xs={12}>\n                    <Button shape=\"round\" colors=\"primary\">圆形边按钮</Button>\n                    <Button shape=\"squared\" colors=\"warning\">方形按钮</Button>\n                    <Button shape=\"floating\" colors=\"primary\">圆形按钮</Button>\n                </Col>\n            </div>\n        )\n    }\n}\n","desc":" 通过`shape`属性控制按钮大小"},{"example":<Demo3 />,"title":" 不同颜色的按钮","code":"/**\n *\n * @title 不同颜色的按钮\n * @description 通过`colors`属性控制按钮颜色\n *\n */\n\nclass Demo3 extends Component {\n\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                    <Button colors=\"success\">success</Button>\n                    <Button colors=\"info\">info</Button>\n                    <Button colors=\"warning\">warning</Button>\n                    <Button colors=\"danger\">danger</Button>\n                <div className=\"divider\"></div>\n                    <Button shape=\"border\" colors=\"success\">success</Button>\n                    <Button shape=\"border\" colors=\"warning\">info</Button>\n                    <Button shape=\"border\" colors=\"info\">warning</Button>\n                    <Button shape=\"border\" colors=\"danger\">danger</Button>\n            </div>\n        )\n    }\n}\n","desc":" 通过`colors`属性控制按钮颜色"},{"example":<Demo4 />,"title":" 不同大小的按钮","code":"/**\n *\n * @title 不同大小的按钮\n * @description 通过`size`属性控制按钮大小\n *\n */\n\nclass Demo4 extends Component {\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <Button size=\"sm\" colors=\"primary\">小按钮</Button>\n                <Button colors=\"primary\">默认</Button>\n                <Button size=\"lg\" colors=\"primary\">大按钮</Button>\n                <Button size=\"xg\" colors=\"primary\">巨大按钮</Button>\n            </div>\n        )\n    }\n}\n","desc":" 通过`size`属性控制按钮大小"},{"example":<Demo5 />,"title":" 事件按钮","code":"/**\n *\n * @title 事件按钮\n * @description 点击按钮触发事件\n *\n */\n\nclass Demo5 extends Component {\n    constructor(props) {\n        super(props);\n    }\n\n    handleClick() {\n        alert(\"谢谢你点我\")\n    }\n\n    render() {\n        return (\n            <Button colors=\"primary\" onClick={ this.handleClick }>事件按钮</Button>\n        )\n    }\n}\n","desc":" 点击按钮触发事件"}]


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
        const { title, example, code, desc  } = this.props;
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
                { example }
                </Col>
                <Col md={1}>
                <Button shape="icon" onClick={ this.handleClick }>
                    { caret }
                </Button>
                </Col>
            </Row>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ header } footer={footer} footerStyle = {{padding: 0}}>
                    <ReactZeroClipboard text={code} {...zclipProps}>
                        <Button colors="primary" className="input-group-addon" style={{cursor: 'pointer'}}>Copy</Button>
                    </ReactZeroClipboard>
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
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
