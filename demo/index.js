import Button from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


function demo1() {
    return (
        <div>
                <Button size="sm" color="primary">小按钮</Button>
                <Button color="primary">默认</Button>
                <Button size="lg" color="primary">大按钮</Button>
                <Button size="xg" color="primary">巨大按钮</Button>
        </div>


    );
}

function demo2 () {
    return (
        <div>
            <Button>Default</Button>
            <Button color="primary">主色按钮</Button>
            <Button color="accent">辅色按钮</Button>
            <Button disabled>不可点击</Button>
            <Button color="success">success</Button>
            <Button color="info">info</Button>
            <Button color="warning">warning</Button>
            <Button color="danger">danger</Button>
        </div>
    );
}

function demo3 () {
    return (
        <div>
            <Button shape="block" color="primary">块状按钮</Button>
            <Button shape="round" color="primary">圆形边按钮</Button>
            <Button shape="squared" color="primary">方形按钮</Button>
            <Button shape="border" color="primary">边框按钮</Button>
            <Button shape="border" color="accent">边框按钮</Button>
            <Button shape="border" color="success">边框按钮</Button>
            <Button shape="border" color="warning">边框按钮</Button>
            <Button shape="border" color="info">边框按钮</Button>
            <Button shape="border" color="danger">边框按钮</Button>
            <Button shape="floating" color="primary">圆形按钮</Button>
            <Button shape="pillRight" color="primary">右半圆按钮</Button>
            <Button shape="pillLeft" color="primary">左半圆按钮</Button>
        </div>
    );
}


ReactDOM.render(demo1(), document.getElementById('neouiReactDemo1'));
ReactDOM.render(demo2(), document.getElementById('neouiReactDemo2'));
ReactDOM.render(demo3(), document.getElementById('neouiReactDemo3'));
