/**
 *
 * @title 常用按钮
 *
 */

class Demo2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    render () {
        return (
            <div className="demoPadding">
                <Button size="sm" colors="primary">小按钮</Button>
                <Button colors="primary">默认</Button>
                <Button size="lg" colors="primary">大按钮</Button>
                <Button size="xg" colors="primary">巨大按钮</Button>
            </div>
        )
    }
}
