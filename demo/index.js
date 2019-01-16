import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" 默认按钮","code":"/**\r\n *\r\n * @title 默认按钮\r\n * @description 主按钮、次按钮用于按钮组合中的寓意[eg: 弹框中 确定，取消]\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Button } from 'tinper-bee';\r\n\r\n class Demo1 extends Component {\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Button colors=\"primary\">主按钮</Button>\r\n                <Button colors=\"secondary\">次按钮</Button>\r\n                <Button>default</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":" 主按钮、次按钮用于按钮组合中的寓意[eg: 弹框中 确定，取消]","scss_code":".demoPadding{\r\n  button{\r\n    margin: auto 5px;\r\n  }\r\n  .divider{\r\n    margin: 6px 0;\r\n    height: 1px;\r\n    overflow: hidden;\r\n    background-color: #e0e0e0;\r\n  }\r\n}"},{"example":<Demo2 />,"title":" 按钮属性、状态","code":"/**\r\n *\r\n * @title 按钮属性、状态\r\n * @description 按钮属性、状态 [isSubmit 是否作为form的提交按钮]\r\n * \r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Button } from 'tinper-bee';\r\n\r\n class Demo5 extends Component {\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Button colors=\"primary\" isSubmit={true}>Default</Button>\r\n                <Button colors=\"primary\" disabled>disabled</Button>\r\n                <Button shape=\"border\">border</Button>\r\n                <Button colors=\"primary\" shape=\"round\">round</Button> \r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":" 按钮属性、状态 [isSubmit 是否作为form的提交按钮]"},{"example":<Demo3 />,"title":" 事件按钮","code":"/**\r\n *\r\n * @title 事件按钮\r\n * @description 点击按钮触发事件\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Button } from 'tinper-bee';\r\n\r\n class Demo2 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n    }\r\n\r\n    handleClick() {\r\n        alert(\"谢谢你点我\")\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <Button colors=\"primary\" onClick={ this.handleClick }>事件按钮</Button>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 点击按钮触发事件","scss_code":".demoPadding{\r\n  button{\r\n    margin: auto 5px;\r\n  }\r\n  .divider{\r\n    margin: 6px 0;\r\n    height: 1px;\r\n    overflow: hidden;\r\n    background-color: #e0e0e0;\r\n  }\r\n}"},{"example":<Demo4 />,"title":" 不同颜色的按钮","code":"/**\r\n *\r\n * @title 不同颜色的按钮\r\n * @description 通过`colors`属性控制按钮颜色\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Button } from 'tinper-bee';\r\n\r\n class Demo3 extends Component {\r\n\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                    <Button colors=\"success\">success</Button>\r\n                    <Button colors=\"info\">info</Button>\r\n                    <Button colors=\"warning\">warning</Button>\r\n                    <Button colors=\"danger\">danger</Button>\r\n                <div className=\"divider\"></div>\r\n                    <Button shape=\"border\" colors=\"success\">success</Button>\r\n                    <Button shape=\"border\" colors=\"info\">info</Button>\r\n                    <Button shape=\"border\" colors=\"warning\">warning</Button>\r\n                    <Button shape=\"border\" colors=\"danger\">danger</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 通过`colors`属性控制按钮颜色","scss_code":".demoPadding{\r\n  button{\r\n    margin: auto 5px;\r\n  }\r\n  .divider{\r\n    margin: 6px 0;\r\n    height: 1px;\r\n    overflow: hidden;\r\n    background-color: #e0e0e0;\r\n  }\r\n}"},{"example":<Demo5 />,"title":" 不同大小的按钮","code":"/**\r\n *\r\n * @title 不同大小的按钮\r\n * @description 通过`size`属性控制按钮大小\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Button } from 'tinper-bee';\r\n\r\nclass Demo4 extends Component {\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Button size=\"sm\" colors=\"primary\">小按钮</Button>\r\n                <Button colors=\"primary\">默认</Button>\r\n                <Button size=\"lg\" colors=\"primary\">大按钮</Button>\r\n                <Button size=\"xg\" colors=\"primary\">巨大按钮</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 通过`size`属性控制按钮大小","scss_code":".demoPadding{\r\n  button{\r\n    margin: auto 5px;\r\n  }\r\n  .divider{\r\n    margin: 6px 0;\r\n    height: 1px;\r\n    overflow: hidden;\r\n    background-color: #e0e0e0;\r\n  }\r\n}"}]


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
        const { title, example, code, desc, scss_code  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
            {example}
            <Button style={{"marginTop": "10px"}} shape="block" onClick={ this.handleClick }>
        { caret }
        { text }
    </Button>
        </div>
    );
        return (
            <Col md={12} >
            <h3>{ title }</h3>
            <p>{ desc }</p>
            <Panel copyable collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
    <pre><code className="hljs javascript">{ code }</code></pre>
        { !!scss_code ? <pre><code className="hljs css">{ scss_code }</code></pre> : null }
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
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
