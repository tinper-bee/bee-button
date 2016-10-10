import { Button } from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Demo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>
					<h2>{"默认:"}</h2>
					<Button htmlType="submit" className="xxxx" style={{color: '#f00'}}>default</Button>
				</div>
				<div>
					<h2>{"大小:"}</h2>
					<Button size="sm" type="primary">小按钮</Button>
					<Button type="primary">默认</Button>
					<Button size="lg" type="primary">大按钮</Button>
					<Button size="xg" type="primary">巨大按钮</Button>
				</div>

				<div>
					<h2>{"颜色:"}</h2>
					<Button type="primary">default 主色按钮</Button>
					<Button type="accent">辅色按钮</Button>
          <Button disabled>不可点击</Button>
					<Button type="success">辅色按钮</Button>
					<Button type="info">辅色按钮</Button>
					<Button type="warning">辅色按钮</Button>
					<Button type="danger">辅色按钮</Button>
				</div>
				<div>
					<h2>{"形状:"}</h2>
					<Button shape="block" type="primary">块状按钮</Button>
					<Button shape="round" type="primary">圆形边按钮</Button>
					<Button shape="squared" type="primary">方形按钮</Button>
					<Button shape="floating" type="primary">圆形按钮</Button>
					<Button shape="pillRight" type="primary">右半圆按钮</Button>
					<Button shape="pillLeft" type="primary">左半圆按钮</Button>
				</div>
				<div>
					<h2>{"事件:"}</h2>
					<Button onClick={function(){alert('谢谢你点我！')}}>点我</Button>
				</div>
			</div>
		);
	}
}

export default Demo;
