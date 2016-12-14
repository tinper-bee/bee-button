import Button from '../src';
import React, { Component } from 'react';

function demo1() {
	return (
		<div className="demoPadding">
			<Button>Default</Button>
			<Button disabled>disabled</Button>
			<Button shape="border">Default</Button>
		</div>
	)
}

const demoCode1 ='<Button>Default</Button>\n<Button disabled>disabled</Button>\n			<Button shape="border">Default</Button>';

function demo2() {
    return (
        <div className="demoPadding">
                <Button size="sm" colors="primary">小按钮</Button>
                <Button colors="primary">默认</Button>
                <Button size="lg" colors="primary">大按钮</Button>
                <Button size="xg" colors="primary">巨大按钮</Button>
        </div>
    );
}
const demoCode2 ='<Button size="sm" colors="primary">小按钮</Button>\n<Button colors="primary">默认</Button>\n<Button size="lg" colors="primary">大按钮</Button>\n<Button size="xg" colors="primary">巨大按钮</Button>';

function demo3 () {
    return (
        <div className="demoPadding">
            <Button colors="primary">主色按钮</Button>
            <Button colors="accent">辅色按钮</Button>
            <Button colors="success">success</Button>
            <Button colors="info">info</Button>
            <Button colors="warning">warning</Button>
            <Button colors="danger">danger</Button>
        </div>
    );
}

const demoCode3 ='<Button colors="primary">主色按钮</Button>\n<Button colors="accent">辅色按钮</Button>\n<Button colors="success">success</Button>\n<Button colors="info">info</Button>\n<Button colors="warning">warning</Button>\n<Button colors="danger">danger</Button>';

function demo4() {
	return (
		<div className="demoPadding">
			<Button shape="border" colors="primary">主色按钮</Button>
			<Button shape="border" colors="accent">辅色按钮</Button>
			<Button shape="border" colors="success">success</Button>
			<Button shape="border" colors="warning">info</Button>
			<Button shape="border" colors="info">warning</Button>
			<Button shape="border" colors="danger">danger</Button>
		</div>
	)
}

const demoCode4 ='<Button shape="border" colors="primary">边框按钮</Button>\n<Button shape="border" colors="accent">边框按钮</Button>\n<Button shape="border" colors="success">边框按钮</Button>\n<Button shape="border" colors="warning">边框按钮</Button>\n<Button shape="border" colors="info">边框按钮</Button>\n<Button shape="border" colors="danger">边框按钮</Button>';

function demo5 () {
    return (
        <div className="demoPadding">
            <Button shape="block" colors="primary">块状按钮</Button>
            <Button shape="round" colors="primary">圆形边按钮</Button>
            <Button shape="squared" colors="primary">方形按钮</Button>
            <Button shape="floating" colors="primary">圆形按钮</Button>
            <Button shape="pillRight" colors="primary">右半圆按钮</Button>
            <Button shape="pillLeft" colors="primary">左半圆按钮</Button>
        </div>
    );
}

const demoCode5 ='<Button shape="block" colors="primary">块状按钮</Button>\n<Button shape="round" colors="primary">圆形边按钮</Button>\n<Button shape="squared" colors="primary">方形按钮</Button>\n<Button shape="floating" colors="primary">圆形按钮</Button>\n<Button shape="pillRight" colors="primary">右半圆按钮</Button>\n<Button shape="pillLeft" colors="primary">左半圆按钮</Button>';

var array = [{
	example: demo1(),
	title: "默认的按钮",
	code: demoCode1
}, {
	example: demo2(),
	title: "不同大小的按钮",
	code: demoCode2
}, {
	example: demo3(),
	title: "不同颜色的按钮",
	code: demoCode3
}, {
	example: demo4(),
	title: "只有边框的按钮",
	code: demoCode4,
	description: "只有边框的按钮"
}, {
	example: demo5(),
	title: "不同形状的按钮",
	code: demoCode5
}];

export default array;
