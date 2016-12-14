/**
 *
 * @title 不同颜色的按钮
 *
 */

class Demo3 extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className="demoPadding">
                <Button colors="primary">主色按钮</Button>
                <Button colors="accent">辅色按钮</Button>
                <Button colors="success">success</Button>
                <Button colors="info">info</Button>
                <Button colors="warning">warning</Button>
                <Button colors="danger">danger</Button>
            </div>
        )
    }
}
