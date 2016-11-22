import Button from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


function demo1() {
    return (
        <div>
                <Button size="sm" colors="primary">小按钮</Button>
                <Button colors="primary">默认</Button>
                <Button size="lg" colors="primary">大按钮</Button>
                <Button size="xg" colors="primary">巨大按钮</Button>
        </div>


    );
}

function demo2 () {
    return (
        <div>
            <Button colors="primary">default 主色按钮</Button>
            <Button colors="accent">辅色按钮</Button>
  <Button disabled>不可点击</Button>
            <Button colors="success">辅色按钮</Button>
            <Button colors="info">辅色按钮</Button>
            <Button colors="warning">辅色按钮</Button>
            <Button colors="danger">辅色按钮</Button>
        </div>
    );
}

function demo3 () {
    return (
        <div>
            <Button shape="block" colors="primary">块状按钮</Button>
            <Button shape="round" colors="primary">圆形边按钮</Button>
            <Button shape="squared" colors="primary">方形按钮</Button>
            <Button shape="floating" colors="primary">圆形按钮</Button>
            <Button shape="pillRight" colors="primary">右半圆按钮</Button>
            <Button shape="pillLeft" colors="primary">左半圆按钮</Button>
        </div>
    );
}


ReactDOM.render(demo1(), document.getElementById('neouiReactDemo1'));
ReactDOM.render(demo2(), document.getElementById('neouiReactDemo2'));
ReactDOM.render(demo3(), document.getElementById('neouiReactDemo3'));
