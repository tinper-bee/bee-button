import Button from '../src';
import React, { Component } from 'react';


class Demo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>
					<h2>{"默认:"}</h2>
					<Button htmltype="submit" className="xxxx" style={{color: '#f00'}}>default</Button>
				</div>
				<div>
					<h2>{"大小:"}</h2>
					<Button size="sm" colors="primary">小按钮</Button>
					<Button colors="primary">默认</Button>
					<Button size="lg" colors="primary">大按钮</Button>
					<Button size="xg" colors="primary">巨大按钮</Button>
				</div>

				<div>
					<h2>{"颜色:"}</h2>
					<Button colors="primary">主色按钮</Button>
					<Button colors="accent">辅色按钮</Button>
                    <Button disabled>不可点击</Button>
					<Button colors="success">success</Button>
					<Button colors="info">info</Button>
					<Button colors="warning">warning</Button>
					<Button colors="danger">danger</Button>
				</div>
				<div>
					<h2>{"形状:"}</h2>
					<Button shape="block" colors="primary">块状按钮</Button>
					<Button shape="round" colors="primary">圆形边按钮</Button>
					<Button shape="border" colors="primary">边框按钮</Button>
					<Button shape="squared" colors="primary">方形按钮</Button>
					<Button shape="floating" colors="primary">圆形按钮</Button>
					<Button shape="pillRight" colors="primary">右半圆按钮</Button>
					<Button shape="pillLeft" colors="primary">左半圆按钮</Button>
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
