import Button from '../src';
import React, { Component } from 'react';


class Demo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
					<Button size="sm" type="primary">小按钮</Button>
					<Button type="primary">默认</Button>
					<Button size="lg" type="primary">大按钮</Button>
					<Button size="xg" type="primary">巨大按钮</Button>
			</div>
		);
	}
}

export default Demo;
