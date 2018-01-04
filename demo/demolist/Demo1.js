/**
 *
 * @title 默认按钮
 * @description 基础按钮
 *
 */

import React, { Component } from 'react';
import Button from '../../src';

 class Demo1 extends Component {
    render () {
        return (
            <div className="demoPadding">
                <Button isSubmit={true}>Default</Button>
                <Button disabled>disabled</Button>
                <Button shape="border">border</Button>
                <Button shape="round">round</Button>
            </div>
        )
    }
}

export default Demo1;
