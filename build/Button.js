'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');
var classnames = require('classnames');
var sizeMap = {
    small: 'sm',
    medium: '',
    large: 'lg'
},
    typeMap = {
    primary: 'primary',
    outline: 'outline',
    disabled: 'disabled'
},
    clsPrefix = 'neoui-button';

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, _React$Component.call(this, props));
    }

    Button.prototype.render = function render() {
        var props = this.props;
        var type = props.type;
        var disabled = props.disabled;
        var className = props.className;
        var size = props.size;
        var children = props.children;
        var htmlType = props.htmlType;

        var others = _objectWithoutProperties(props, ['type', 'disabled', 'className', 'size', 'children', 'htmlType']);

        type = disabled ? 'disabled' : type;
        var clsObj = {};
        if (className) {
            clsObj[className] = true;
        }
        if (sizeMap[size]) {
            clsObj[clsPrefix + '-' + sizeMap[size]] = true;
        }
        var classNames = classnames(clsPrefix, clsPrefix + '-' + typeMap[type], clsObj);
        return React.createElement(
            'button',
            _extends({
                type: htmlType,
                className: classNames,
                disabled: disabled
            }, others),
            props.children
        );
    };

    return Button;
}(React.Component);

Button.displayName = 'neoui-react-button';
Button.propTypes = {
    /**
     * @title 尺寸
     */
    size: React.PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * @title 样式
     */
    style: React.PropTypes.object,
    /**
    * @title 类型
    */
    type: React.PropTypes.oneOf(['primary', 'secondary', 'outline', 'disabled']),
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
    children: React.PropTypes.oneOfType([React.PropTypes.element, React.PropTypes.string]),
    /**
     * @title <button> 的 type
     * @veIgnore
     */
    htmlType: React.PropTypes.oneOf(['submit', 'button', 'reset'])
};
Button.defaultProps = {
    size: 'medium',
    type: 'primary',
    disabled: false,
    className: '',
    children: 'Button',
    htmlType: 'button'
};

module.exports = Button;