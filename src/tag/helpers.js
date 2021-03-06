class Helpers {

  removeDuplicates(tagArray) {
    
    let result = [];
    for (let i = 0, length = tagArray.length; i < length; i++) {
      if (result.indexOf(tagArray[i]) < 0) {
        result.push(tagArray[i]);
      }
    }
    return result;
  }

  getClipboardData(event) {

    if (window.clipboardData) {
      return window.clipboardData.getData('Text');
    } else if (event.clipboardData) {
      return event.clipboardData.getData('text/plain');
    } else {
      return '';
    }
  }

  exclusiveTypeCheck(props, propName) {
    if(props['primary'] && props['secondary']) {
      return new Error('A button can not be more than one type');
    }
    return null;
  }
}

module.exports = new Helpers();
