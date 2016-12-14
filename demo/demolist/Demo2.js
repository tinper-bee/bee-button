/**
 *
 * @title 不同形状的按钮
 * @description 通过`shape`属性控制按钮大小
 *
 */

class Demo2 extends Component {
    render () {
        return (
            <div className="demoPadding">
            <Col md={6} xs={12}>
                <Button shape="block" colors="primary">块状按钮</Button>
            </Col>
            <Col md={6} xs={12}>
            <Button shape="round" colors="primary">圆形边按钮</Button>
            <Button shape="squared" colors="warning">方形按钮</Button>
            <Button shape="floating" colors="primary">圆形按钮</Button>
            </Col>
            </div>
        )
    }
}
