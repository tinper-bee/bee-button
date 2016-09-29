# neoui-react-button


react button component for tinper-bee

#### setup develop environment

```sh
$ git clone https://github.com/tinper-bee/button
$ cd button
$ npm install
$ npm run dev
```

## Usage

```js
import Button from 'bee-button';
React.render(<div>
    <div>
        <Button type="primary" size="lg" style={{color: '#000'}}>Button</Button>
    </div>
</div>, document.getElementById('target'));
```



## API
|参数|说明|类型|默认值|
|---|----|---|------|
|size|按钮大小(`large` `medium` `small`)|string|medium|
|type|类型(`primary` `success`)|string|''|
|shape|形状(`round` `squared`)|string|''|
|disabled|是否禁用(`disabled` 或 `true` `false`)|string|false|
|className|增加额外的class|string|''|
|htmlType|html dom 的 type 属性(`submit` `button` `reset`)|string|button|
|style|style 属性|object|''|
