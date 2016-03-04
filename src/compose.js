import React from 'react';
import assign from 'object-assign';

var styles = require('./layout.less');

function _query(key) {
  return key[0] === '@' || key === 'xs' || key === 'md' || key === 'lg';
};

function _resolveLayoutGeneral(props) {
  let newClasses = [];
  if(props.block){
		newClasses.push(styles['block']);
  }
  if(props.hidden){
		newClasses.push(styles['hidden']);
  }
  if(props.invisible){
		newClasses.push(styles['invisible']);
  }

  return newClasses;
}

function _resolveLayoutPosition(props) {
	let newClasses = [];
  if(props.relative){
    newClasses.push(styles['relative']);
  }
  if(props.absolute){
    newClasses.push(styles['absolute']);
  }

  return newClasses;
};

function _resolveLayoutFlex(props) {


	let newClasses = [];
  if(props.layout){
    newClasses.push(styles['layout']);
    if(props.vertical){
      props.reverse ?
      newClasses.push(styles['verticalReverse']) :
      newClasses.push(styles['vertical']);
    } else {
      props.reverse ?
				newClasses.push(styles['horizontalReverse']) :
				newClasses.push(styles['horizontal']);
    }
  }
  if(props.inline){
		newClasses.push(styles['inline']);
		newClasses.push(styles['horizontal']);
  }

  props.flex ?
		newClasses.push(styles['flexAuto']):
  	newClasses.push(styles['flexNone']);

  return newClasses;
};

function _resolveLayoutAlign(props) {
  let newClasses = [];
	newClasses.push(styles['alignStretch']);
  if(props.start) {
		newClasses.push(styles['alignStart']);
  }
  if(props.center) {
		newClasses.push(styles['alignCenter']);
  }
  if(props.end) {
		newClasses.push(styles['alignEnd']);
  }
  if(props.centered){
		newClasses.push(styles['centered']);
  }

  return newClasses;
};

function _resolveLayoutSelf(props) {
  let newClasses = [];
  if(props.selfStart) {
		newClasses.push(styles['selfAlignStart']);
  }
  if(props.selfCenter) {
		newClasses.push(styles['selfAlignCenter']);
  }
  if(props.selfEnd) {
		newClasses.push(styles['selfAlignEnd']);
  }
  if(props.selfStretch){
		newClasses.push(styles['selfAlignStretch']);
  }

  return newClasses;
};

function _resolveLayoutJustify(props) {
  let newClasses = [];
  if(props.justifyStart) {
		newClasses.push(styles['justifyStart']);
  }
  if(props.justifyCenter) {
		newClasses.push(styles['justifyCenter']);
  }
  if(props.justifyEnd) {
		newClasses.push(styles['justifyEnd']);
  }
  if(props.justifyStretch) {
		newClasses.push(styles['justifyStretch']);
  }
  if(props.justifyBetween) {
		newClasses.push(styles['justifyBetween']);
  }
  if(props.justifyAround) {
		newClasses.push(styles['justifyAround']);
  }

  return newClasses;
};

function _resolveLayoutClasses(props) {
	var classes = []
	classes = classes.concat(_resolveLayoutGeneral(props));
	classes = classes.concat(_resolveLayoutPosition(props));
	classes = classes.concat(_resolveLayoutFlex(props));
	classes = classes.concat(_resolveLayoutAlign(props));
	classes = classes.concat(_resolveLayoutSelf(props));
	classes = classes.concat(_resolveLayoutJustify(props));

	return classes;
}

export default function Compose(component, rendered){
  let props = rendered.props;
  let classes = props.className;

  let newProps = {};
	let newClass = [];

	newClass = newClass.concat(_resolveLayoutClasses(props));

  newProps = assign(newProps, {className: newClass.join(' ') + ' ' + styles.demo});
  return React.cloneElement(rendered, newProps);
}
