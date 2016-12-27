/**
 *
 * @title 默认按钮
 * @description 基础按钮
 *
 */

class Demo1 extends Component {
    render () {
        return (
            <div className="demoPadding">
                <Button>Default</Button>
                <Button disabled>disabled</Button>
                <Button shape="border">border</Button>
            </div>
        )
    }
}