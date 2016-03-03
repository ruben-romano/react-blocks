import assign from 'object-assign';

let common, layout, inline, flex, flexAuto, flexNone;
let horizontal, horizontalReverse, vertical, verticalReverse;
let alignStart, alignCenter, alignEnd, alignStretch;
let selfAlignStart, selfAlignCenter, selfAlignEnd, selfAlignStretch;
let justifyStart, justifyCenter, justifyEnd, justifyBetween, justifyAround;
let block, hidden, invisible;
let relative, absolute;
let centered;

// Defaults
common = {
  boxSizing: 'border-box',
  flexWrap: 'wrap',
	'-webkit-box-sizing': 'border-box',
	'-webkit-flex-wrap': 'wrap'
};

layout = assign({}, common, {
  display: 'flex',
	display: '-webkit-flex'
});

inline = assign({}, common, {
  display: 'inline-flex',
	display: '-webkit-inline-flex'
});

flex = {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: '0%',
	'-webkit-flex-grow': 1,
	'-webkit-flex-shrink': 1,
	'-webkit-flex-basis': '0%'
};

flexAuto = assign({}, flex, {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 'auto',
	'-webkit-flex-grow': 1,
	'-webkit-flex-shrink': 1,
	'-webkit-flex-basis': 'auto'
});

flexNone = {
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 'auto',
	'-webkit-flex-grow': 0,
	'-webkit-flex-shrink': 0,
	'-webkit-flex-basis': '0%'
};

block = {
  display: 'block'
};

hidden = {
  display: 'none'
};

invisible = {
  visibility: 'hidden'
};

relative = {
  position: 'relative'
};

absolute = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

horizontal = assign({}, layout, {
  flexDirection: 'row',
	'-webkit-flex-direction': 'row'
});

horizontalReverse = assign({}, layout, {
  flexDirection: 'row-reverse',
	'-webkit-flex-direction': 'row-reverse'
});

vertical = assign({}, layout, {
  flexDirection: 'column',
	'-webkit-flex-direction': 'column'
});

verticalReverse = assign({}, layout, {
  flexDirection: 'column-reverse',
	'-webkit-flex-direction': 'column-reverse'
});

alignStart = {
  alignItems: 'flex-start',
	'-webkit-align-items': 'flex-start'
};

alignCenter = {
  alignItems: 'center',
	'-webkit-align-items': 'center',
};

alignEnd = {
  alignItems: 'flex-end',
	'-webkit-align-items': 'flex-end'
};

alignStretch = {
  alignItems: 'stretch',
	'-webkit-align-items': 'stretch',
};

selfAlignStart = {
  alignSelf: 'flex-start',
	'-webkit-align-self': 'flex-start'
};

selfAlignCenter = {
  alignSelf: 'center',
	'-webkit-align-self': 'center'
};

selfAlignEnd = {
  alignSelf: 'flex-end',
	'-webkit-align-self': 'flex-end'
};

selfAlignStretch = {
  alignSelf: 'stretch',
	'-webkit-align-self': 'stretch'
};

justifyStart = {
  justifyContent: 'flex-start',
	'-webkit-justify-content': 'flex-start'
};

justifyCenter = {
  justifyContent: 'center',
	'-webkit-justify-content': 'center'
};

justifyEnd = {
  justifyContent: 'flex-end',
	'-webkit-justify-content': 'flex-end'
};

justifyBetween = {
  justifyContent: 'space-between',
	'-webkit-justify-content': 'space-between'
};

justifyAround = {
  justifyContent: 'space-around',
	'-webkit-justify-content': 'space-around'
};

centered = assign({}, layout, alignCenter, justifyCenter);

export default {
  block: block,
  hidden: hidden,
  invisible: invisible,
  centered: centered,
  relative: relative,
  absolute: absolute,
  layout: layout,
  inline: inline,
  flexAuto: flexAuto,
  flexNone: flexNone,
  horizontal: horizontal,
  horizontalReverse: horizontalReverse,
  vertical: vertical,
  verticalReverse: verticalReverse,
  alignStart: alignStart,
  alignCenter: alignCenter,
  alignEnd: alignEnd,
  alignStretch: alignStretch,
  selfAlignStart: selfAlignStart,
  selfAlignCenter: selfAlignCenter,
  selfAlignEnd: selfAlignEnd,
  selfAlignStretch: selfAlignStretch,
  justifyStart: justifyStart,
  justifyCenter: justifyCenter,
  justifyEnd: justifyEnd,
  justifyBetween: justifyBetween,
  justifyAround: justifyAround
};
