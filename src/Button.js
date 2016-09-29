let React = require('react');
let ReactDOM = require('react-dom');
let classnames = require('classnames');

const propTypes = {
  /**
   * @title 尺寸
   */
  size: React.PropTypes.oneOf(['sm', 'xg', 'lg', '']),
  /**
   * @title 样式
   */
  style: React.PropTypes.object,
  /**
   * @title 形状
   */
  shape: React.PropTypes.oneOf(['block', 'round', 'squared', 'floating', 'pillRight', 'pillLeft', '']),
   /**
   * @title 类型
   */
  type: React.PropTypes.oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', '']),
  /**
   * @title 是否禁用
   * @veIgnore
   */
  disabled: React.PropTypes.bool,
  /**
   * @title 类名
   * @veIgnore
   */
  className: React.PropTypes.string,
  /**
   * @title 内容
   */
  children: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.string
  ]),
  /**
   * @title <button> 的 type
   * @veIgnore
   */
  htmlType: React.PropTypes.oneOf(['submit', 'button', 'reset']),
}

const defaultProps = {
  size: '',
  type: '',
  shape: '',
  disabled: false,
  className: '',
  children: 'Button',
  htmlType: 'button'
}

const sizeMap = {
        sm: 'sm',
        xg: 'xg',
        lg: 'lg'
    },
    typeMap = {
        primary: 'primary',
        accent: 'accent',
        success: 'success',
        info: 'info',
        warning: 'warning',
        danger: 'danger'
    },
    shapeMap = {
        block: 'block',
        round: 'round',
        squared: 'squared',
        floating: 'floating',
        pillRight: 'pill-right',
        pillLeft: 'pill-left'
    },
    clsPrefix = 'u-button';


class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let props = this.props;
        let {type, shape, disabled, className, size, children, htmlType, ...others} = props;
        type = disabled ? 'disabled' : type;
        let clsObj = {};
        if (className) {
            clsObj[className] = true;
        }
        if (sizeMap[size]) {
            clsObj[`${clsPrefix}-${sizeMap[size]}`] = true;
        }
        if (shapeMap[shape]) {
            clsObj[`${clsPrefix}-${shapeMap[shape]}`] = true;
        }
        if (typeMap[type]) {
            clsObj[`${clsPrefix}-${typeMap[type]}`] = true;
        }
        let classNames = classnames(clsPrefix, clsObj);
        return (
            <button
                type={htmlType}
                className={classNames}
                disabled={disabled}
                {...others}>
              {props.children}
            </button>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

module.exports = Button;
