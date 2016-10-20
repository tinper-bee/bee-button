# button

[![npm version](https://img.shields.io/npm/v/bee-button.svg)](https://www.npmjs.com/package/bee-button)
[![Build Status](https://img.shields.io/travis/tinper-bee/button/master.svg)](https://travis-ci.org/tinper-bee/button)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/button.svg)](https://david-dm.org/tinper-bee/button#info=devDependencies)

react button component for tinper-bee

可定制的按钮组件

## 使用

### 使用单独的button包
#### 组件引入
先进行下载bee-button包
```
npm install --save bee-button
```
组件调用
```js
import Button from 'bee-button';
React.render(
        <Button type="primary" size="lg" style={{color: '#000'}}>Button</Button>
        , document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入build目录下button.css
```
<link rel="stylesheet" href="./node_modules/build/bee-button.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/Button.scss"
//或是
import "./node_modules/build/bee-button.css"
```

### 使用tinper-bee组件库
(tinper-bee组件库使用方法)[]




## API

|参数|说明|类型|默认值|
|:---|:----:|:---:|------:|
|size|按钮大小(`large` `medium` `small`)|string|medium|
|type|类型(`primary` `success`)|string|''|
|shape|形状(`round` `squared`)|string|''|
|disabled|是否禁用(`disabled` 或 `true` `false`)|string|false|
|className|增加额外的class|string|''|
|htmlType|html dom 的 type 属性(`submit` `button` `reset`)|string|button|
|style|style 属性|object|''|


#### setup develop environment

```sh
$ git clone https://github.com/tinper-bee/bee-button
$ cd bee-button
$ npm install -g bee-tools
$ npm install
$ npm run dev
```
