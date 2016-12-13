/**
 *
 * @title 默认按钮
 *
 */

class Demo1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    render () {
        return (
            <div className="demoPadding">
                <Button>Default</Button>
                <Button disabled>disabled</Button>
            </div>
        )
    }
}
