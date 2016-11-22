import Button from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


function demo1() {
    return (
        <div>
                <Button size="sm" type="primary">小按钮</Button>
                <Button type="primary">默认</Button>
                <Button size="lg" type="primary">大按钮</Button>
                <Button size="xg" type="primary">巨大按钮</Button>
        </div>


    );
}

function demo2 () {
    return (
        <div>
            <Button type="primary">default 主色按钮</Button>
            <Button type="accent">辅色按钮</Button>
  <Button disabled>不可点击</Button>
            <Button type="success">辅色按钮</Button>
            <Button type="info">辅色按钮</Button>
            <Button type="warning">辅色按钮</Button>
            <Button type="danger">辅色按钮</Button>
        </div>
    );
}

function demo3 () {
    return (
        <div>
            <Button shape="block" type="primary">块状按钮</Button>
            <Button shape="round" type="primary">圆形边按钮</Button>
            <Button shape="squared" type="primary">方形按钮</Button>
            <Button shape="floating" type="primary">圆形按钮</Button>
            <Button shape="pillRight" type="primary">右半圆按钮</Button>
            <Button shape="pillLeft" type="primary">左半圆按钮</Button>
        </div>
    );
}


ReactDOM.render(demo1(), document.getElementById('neouiReactDemo1'));
ReactDOM.render(demo2(), document.getElementById('neouiReactDemo2'));
ReactDOM.render(demo3(), document.getElementById('neouiReactDemo3'));
