import React from 'react';
import tagStyles from './TagStyle';
import Helpers from './helpers';
import Layout from './Layout';


function defaultPasteSplit (data) {
  return data.split(' ').map(d => d.trim())
}

class Tags extends React.Component {

  constructor () {
    super()
    this.state = {tag: '', isFocused: false}
    this.focus = ::this.focus
    this.blur = ::this.blur
  }

  static propTypes = {
    addKeys: React.PropTypes.array,
    addOnBlur: React.PropTypes.bool,
    addOnPaste: React.PropTypes.bool,
    currentValue: React.PropTypes.string,
    inputProps: React.PropTypes.object,
    onChange: React.PropTypes.func.isRequired,
    removeKeys: React.PropTypes.array,
    // renderInput: React.PropTypes.func,
    renderTag: React.PropTypes.func,
    pasteSplit: React.PropTypes.func,
    tagProps: React.PropTypes.object,
    onlyUnique: React.PropTypes.bool,
    value: React.PropTypes.array.isRequired,
    maxTags: React.PropTypes.number,
    validationRegex: React.PropTypes.instanceOf(RegExp),
    disabled: React.PropTypes.bool,
    tagDisplayProp: React.PropTypes.string
  }

  static defaultProps = {
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
  }

  _getTagDisplayValue (tag) {
    const {tagDisplayProp} = this.props

    if (tagDisplayProp) {
      return tag[tagDisplayProp]
    }

    return tag
  }

  _makeTag (tag) {
    const {tagDisplayProp} = this.props

    if (tagDisplayProp) {
      return {
        [tagDisplayProp]: tag
      }
    }

    return tag
  }

  _removeTag (index) {
    let value = this.props.value.concat([])
    if (index > -1 && index < value.length) {
      let changed = value.splice(index, 1)
      this.props.onChange(value, changed, [index])
    }
  }

  _clearInput () {
    this.setState({tag: ''})
  }

  _addTags (tags) {
    let {validationRegex, onChange, onlyUnique, maxTags, value} = this.props

    if (onlyUnique) {
      tags = Helpers.removeDuplicates(tags)
      tags = tags.filter(tag => value.every(currentTag => this._getTagDisplayValue(currentTag) !== this._getTagDisplayValue(tag)))
    }

    tags = tags.filter(tag => validationRegex.test(this._getTagDisplayValue(tag)))
    tags = tags.filter(tag => this._getTagDisplayValue(tag).trim().length > 0)

    if (maxTags >= 0) {
      let remainingLimit = Math.max(maxTags - value.length, 0)
      tags = tags.slice(0, remainingLimit)
    }

    if (tags.length > 0) {
      let newValue = value.concat(tags)
      let indexes = []
      for (let i = 0; i < tags.length; i++) {
        indexes.push(value.length + i)
      }
      onChange(newValue, tags, indexes)
      this._clearInput()
      return true
    }

    return false
  }

  focus () {
    if (typeof this.refs.input.focus === 'function') {
      this.refs.input.focus()
    }

    this.handleOnFocus()
  }

  blur () {
    if (typeof this.refs.input.blur === 'function') {
      this.refs.input.blur()
    }

    this.handleOnBlur()
  }

  accept () {
    let {tag} = this.state

    if (tag !== '') {
      tag = this._makeTag(tag)
      return this._addTags([tag])
    }

    return false
  }

  addTag (tag) {
    return this._addTags([tag])
  }

  clearInput () {
    this._clearInput()
  }

  handlePaste (e) {
    let {addOnPaste, pasteSplit} = this.props

    if (!addOnPaste) {
      return
    }

    e.preventDefault()

    let data = Helpers.getClipboardData(e)
    let tags = pasteSplit(data).map(tag => this._makeTag(tag))

    this._addTags(tags)
  }

  handleKeyDown (e) {
    if (e.defaultPrevented) {
      return
    }

    let {value, removeKeys, addKeys} = this.props
    let {tag} = this.state
    let empty = tag === ''
    let keyCode = e.keyCode
    let add = addKeys.indexOf(keyCode) !== -1
    let remove = removeKeys.indexOf(keyCode) !== -1

    if (add) {
      let added = this.accept()
      if (added || keyCode === 13) {
        e.preventDefault()
      }
    }

    if (remove && value.length > 0 && empty) {
      e.preventDefault()
      this._removeTag(value.length - 1)
    }
  }

  handleClick (e) {
    if (e.target === this.refs.div) {
      this.focus()
    }
  }

  handleChange (e) {
    let {onChange} = this.props.inputProps
    let tag = e.target.value

    if (onChange) {
      onChange(e)
    }

    this.setState({tag})
  }

  handleOnFocus (e) {
    let {onFocus} = this.props.inputProps

    if (onFocus) {
      onFocus(e)
    }

    this.setState({isFocused: true})
  }

  handleOnBlur (e) {
    let {onBlur} = this.props.inputProps

    this.setState({isFocused: false})

    if (e == null) {
      return
    }

    if (onBlur) {
      onBlur(e)
    }

    if (this.props.addOnBlur) {
      const tag = this._makeTag(e.target.value)
      this._addTags([tag])
    }
  }

  handleRemove (tag) {
    this._removeTag(tag)
  }

  inputProps () {
    // eslint-disable-next-line
    let {onChange, onFocus, onBlur, ...otherInputProps} = this.props.inputProps

    let props = {
      ...otherInputProps
    }

    if (this.props.disabled) {
      props.disabled = true
    }

    return props
  }

  componentDidMount () {
    this.setState({
      tag: this.props.currentValue
    })
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.currentValue) {
      return
    }

    this.setState({
      tag: nextProps.currentValue
    })
  }

  render () {
    // eslint-disable-next-line
    let {value, onChange, placeholder, tagProps, addKeys, removeKeys, addOnBlur, addOnPaste, inputProps, pasteSplit, onlyUnique, maxTags, validationRegex, disabled, tagDisplayProp, ...other} = this.props
    let {tag, isFocused} = this.state;

    let tagComponents = value.map((tag, index) => {
      return {
        tag,
        onRemove: ::this.handleRemove,
        disabled,
        getTagDisplayValue: ::this._getTagDisplayValue,
        ...tagProps
      }
    })

    let inputComponent = {
      ref: 'input',
      value: tag,
      placeholder: placeholder,
      onPaste: ::this.handlePaste,
      onKeyDown: ::this.handleKeyDown,
      onChange: ::this.handleChange,
      onFocus: ::this.handleOnFocus,
      onBlur: ::this.handleOnBlur,
      addTag: ::this.addTag,
      ...this.inputProps()
    };

    return (
      <div ref='div' onClick={::this.handleClick} style={tagStyles.tags}>
        <Layout tagComponents={tagComponents} inputComponent={inputComponent} />
      </div>
    )
  }
}

export default Tags;
