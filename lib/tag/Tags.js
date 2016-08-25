'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TagStyle = require('./TagStyle');

var _TagStyle2 = _interopRequireDefault(_TagStyle);

var _helpers = require('../helpers/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function defaultPasteSplit(data) {
  return data.split(' ').map(function (d) {
    return d.trim();
  });
}

var Tags = function (_React$Component) {
  _inherits(Tags, _React$Component);

  function Tags() {
    _classCallCheck(this, Tags);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tags).call(this));

    _this.state = { tag: '', isFocused: false };
    _this.focus = _this.focus.bind(_this);
    _this.blur = _this.blur.bind(_this);
    return _this;
  }

  _createClass(Tags, [{
    key: '_getTagDisplayValue',
    value: function _getTagDisplayValue(tag) {
      var tagDisplayProp = this.props.tagDisplayProp;


      if (tagDisplayProp) {
        return tag[tagDisplayProp];
      }

      return tag;
    }
  }, {
    key: '_makeTag',
    value: function _makeTag(tag) {
      var tagDisplayProp = this.props.tagDisplayProp;


      if (tagDisplayProp) {
        return _defineProperty({}, tagDisplayProp, tag);
      }

      return tag;
    }
  }, {
    key: '_removeTag',
    value: function _removeTag(index) {
      var value = this.props.value.concat([]);
      if (index > -1 && index < value.length) {
        var changed = value.splice(index, 1);
        this.props.onChange(value, changed, [index]);
      }
    }
  }, {
    key: '_clearInput',
    value: function _clearInput() {
      this.setState({ tag: '' });
    }
  }, {
    key: '_addTags',
    value: function _addTags(tags) {
      var _this2 = this;

      var _props = this.props;
      var validationRegex = _props.validationRegex;
      var onChange = _props.onChange;
      var onlyUnique = _props.onlyUnique;
      var maxTags = _props.maxTags;
      var value = _props.value;


      if (onlyUnique) {
        tags = _helpers2.default.removeDuplicates(tags);
        tags = tags.filter(function (tag) {
          return value.every(function (currentTag) {
            return _this2._getTagDisplayValue(currentTag) !== _this2._getTagDisplayValue(tag);
          });
        });
      }

      tags = tags.filter(function (tag) {
        return validationRegex.test(_this2._getTagDisplayValue(tag));
      });
      tags = tags.filter(function (tag) {
        return _this2._getTagDisplayValue(tag).trim().length > 0;
      });

      if (maxTags >= 0) {
        var remainingLimit = Math.max(maxTags - value.length, 0);
        tags = tags.slice(0, remainingLimit);
      }

      if (tags.length > 0) {
        var newValue = value.concat(tags);
        var indexes = [];
        for (var i = 0; i < tags.length; i++) {
          indexes.push(value.length + i);
        }
        onChange(newValue, tags, indexes);
        this._clearInput();
        return true;
      }

      return false;
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (typeof this.refs.input.focus === 'function') {
        this.refs.input.focus();
      }

      this.handleOnFocus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      if (typeof this.refs.input.blur === 'function') {
        this.refs.input.blur();
      }

      this.handleOnBlur();
    }
  }, {
    key: 'accept',
    value: function accept() {
      var tag = this.state.tag;


      if (tag !== '') {
        tag = this._makeTag(tag);
        return this._addTags([tag]);
      }

      return false;
    }
  }, {
    key: 'addTag',
    value: function addTag(tag) {
      return this._addTags([tag]);
    }
  }, {
    key: 'clearInput',
    value: function clearInput() {
      this._clearInput();
    }
  }, {
    key: 'handlePaste',
    value: function handlePaste(e) {
      var _this3 = this;

      var _props2 = this.props;
      var addOnPaste = _props2.addOnPaste;
      var pasteSplit = _props2.pasteSplit;


      if (!addOnPaste) {
        return;
      }

      e.preventDefault();

      var data = _helpers2.default.getClipboardData(e);
      var tags = pasteSplit(data).map(function (tag) {
        return _this3._makeTag(tag);
      });

      this._addTags(tags);
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (e.defaultPrevented) {
        return;
      }

      var _props3 = this.props;
      var value = _props3.value;
      var removeKeys = _props3.removeKeys;
      var addKeys = _props3.addKeys;
      var tag = this.state.tag;

      var empty = tag === '';
      var keyCode = e.keyCode;
      var add = addKeys.indexOf(keyCode) !== -1;
      var remove = removeKeys.indexOf(keyCode) !== -1;

      if (add) {
        var added = this.accept();
        if (added || keyCode === 13) {
          e.preventDefault();
        }
      }

      if (remove && value.length > 0 && empty) {
        e.preventDefault();
        this._removeTag(value.length - 1);
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      if (e.target === this.refs.div) {
        this.focus();
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var onChange = this.props.inputProps.onChange;

      var tag = e.target.value;

      if (onChange) {
        onChange(e);
      }

      this.setState({ tag: tag });
    }
  }, {
    key: 'handleOnFocus',
    value: function handleOnFocus(e) {
      var onFocus = this.props.inputProps.onFocus;


      if (onFocus) {
        onFocus(e);
      }

      this.setState({ isFocused: true });
    }
  }, {
    key: 'handleOnBlur',
    value: function handleOnBlur(e) {
      var onBlur = this.props.inputProps.onBlur;


      this.setState({ isFocused: false });

      if (e == null) {
        return;
      }

      if (onBlur) {
        onBlur(e);
      }

      if (this.props.addOnBlur) {
        var tag = this._makeTag(e.target.value);
        this._addTags([tag]);
      }
    }
  }, {
    key: 'handleRemove',
    value: function handleRemove(tag) {
      this._removeTag(tag);
    }
  }, {
    key: 'inputProps',
    value: function inputProps() {
      // eslint-disable-next-line
      var _props$inputProps = this.props.inputProps;
      var onChange = _props$inputProps.onChange;
      var onFocus = _props$inputProps.onFocus;
      var onBlur = _props$inputProps.onBlur;

      var otherInputProps = _objectWithoutProperties(_props$inputProps, ['onChange', 'onFocus', 'onBlur']);

      var props = _extends({}, otherInputProps);

      if (this.props.disabled) {
        props.disabled = true;
      }

      return props;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        tag: this.props.currentValue
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.currentValue) {
        return;
      }

      this.setState({
        tag: nextProps.currentValue
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      // eslint-disable-next-line
      var _props4 = this.props;
      var value = _props4.value;
      var onChange = _props4.onChange;
      var placeholder = _props4.placeholder;
      var tagProps = _props4.tagProps;
      var addKeys = _props4.addKeys;
      var removeKeys = _props4.removeKeys;
      var addOnBlur = _props4.addOnBlur;
      var addOnPaste = _props4.addOnPaste;
      var inputProps = _props4.inputProps;
      var pasteSplit = _props4.pasteSplit;
      var onlyUnique = _props4.onlyUnique;
      var maxTags = _props4.maxTags;
      var validationRegex = _props4.validationRegex;
      var disabled = _props4.disabled;
      var tagDisplayProp = _props4.tagDisplayProp;

      var other = _objectWithoutProperties(_props4, ['value', 'onChange', 'placeholder', 'tagProps', 'addKeys', 'removeKeys', 'addOnBlur', 'addOnPaste', 'inputProps', 'pasteSplit', 'onlyUnique', 'maxTags', 'validationRegex', 'disabled', 'tagDisplayProp']);

      var _state = this.state;
      var tag = _state.tag;
      var isFocused = _state.isFocused;


      var tagComponents = value.map(function (tag, index) {
        return _extends({
          tag: tag,
          onRemove: _this4.handleRemove.bind(_this4),
          disabled: disabled,
          getTagDisplayValue: _this4._getTagDisplayValue.bind(_this4)
        }, tagProps);
      });

      var inputComponent = _extends({
        ref: 'input',
        value: tag,
        placeholder: placeholder,
        onPaste: this.handlePaste.bind(this),
        onKeyDown: this.handleKeyDown.bind(this),
        onChange: this.handleChange.bind(this),
        onFocus: this.handleOnFocus.bind(this),
        onBlur: this.handleOnBlur.bind(this),
        addTag: this.addTag.bind(this)
      }, this.inputProps());

      return _react2.default.createElement(
        'div',
        { ref: 'div', onClick: this.handleClick.bind(this), style: _TagStyle2.default.tags },
        _react2.default.createElement(_Layout2.default, { tagComponents: tagComponents, inputComponent: inputComponent })
      );
    }
  }]);

  return Tags;
}(_react2.default.Component);

Tags.propTypes = {
  addKeys: _react2.default.PropTypes.array,
  addOnBlur: _react2.default.PropTypes.bool,
  addOnPaste: _react2.default.PropTypes.bool,
  currentValue: _react2.default.PropTypes.string,
  inputProps: _react2.default.PropTypes.object,
  onChange: _react2.default.PropTypes.func.isRequired,
  removeKeys: _react2.default.PropTypes.array,
  renderTag: _react2.default.PropTypes.func,
  pasteSplit: _react2.default.PropTypes.func,
  tagProps: _react2.default.PropTypes.object,
  onlyUnique: _react2.default.PropTypes.bool,
  value: _react2.default.PropTypes.array.isRequired,
  maxTags: _react2.default.PropTypes.number,
  validationRegex: _react2.default.PropTypes.instanceOf(RegExp),
  disabled: _react2.default.PropTypes.bool,
  tagDisplayProp: _react2.default.PropTypes.string
};
Tags.defaultProps = {
  currentValue: '',
  addKeys: [9, 13],
  addOnBlur: false,
  addOnPaste: false,
  inputProps: {},
  removeKeys: [8],
  placeholder: 'Add a tag',
  pasteSplit: defaultPasteSplit,
  tagProps: {},
  onlyUnique: false,
  maxTags: -1,
  validationRegex: /.*/,
  disabled: false,
  tagDisplayProp: null
};
exports.default = Tags;