"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.StudInner=exports.Stud=exports.FontImport=exports.Brick=void 0;var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_react=_interopRequireDefault(require("react")),_core=require("@emotion/core"),_styled=_interopRequireDefault(require("@emotion/styled")),_darken=_interopRequireDefault(require("polished/lib/color/darken")),_lighten=_interopRequireDefault(require("polished/lib/color/lighten")),_transparentize=_interopRequireDefault(require("polished/lib/color/transparentize"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}var FontImport=function(){return/*#__PURE__*/_react["default"].createElement(_core.Global,{styles:(0,_core.css)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n        @font-face {\n            font-family: 'Roboto Condensed';\n            font-style: italic;\n            font-weight: 400;\n            src: local('Roboto Condensed Italic'), local('RobotoCondensed-Italic'), url(https://fonts.gstatic.com/l/font?kit=BP5K8ZAJv9qEbmuFp8RpJYQ5Rbxg3CkpuFLDf7uJP82bRh2bRM9hMKB4Ebd-KE1n&skey=7b4bef3e83279e13&v=v16) format('woff2');\n        }\n      "])))})};exports.FontImport=FontImport;var Brick=_styled["default"].div(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    display: flex;\n    position: relative;\n\n    .side, .unit {\n      position: absolute;\n\n      &--1 {\n        transform: skewY(-30deg);\n        background: ",";\n      }\n      &--2 {\n        transform: skewY(30deg);\n      }\n      &--3 {\n        transform: skewY(30deg);\n        background: ",";\n        &-wrap {\n          transform: rotate(-60deg);\n        }\n      }\n    }\n    .side--2, .stud {\n        background: ","\n    }\n    .stud:before {\n        background: ","\n    }\n    .stud--inner:after {\n        color: ",";\n        text-shadow: ",";\n    }\n\n    ","\n\n    ","\n\n    ","\n"])),function(a){return(0,_transparentize["default"])(a.opacity,(0,_darken["default"])(.08,a.color))},function(a){return(0,_transparentize["default"])(a.opacity,(0,_lighten["default"])(.08,a.color))},function(a){return(0,_transparentize["default"])(a.opacity,a.color)},function(a){return(0,_transparentize["default"])(a.opacity,(0,_lighten["default"])(.16,a.color))},function(a){return(0,_transparentize["default"])(a.opacity,a.color)},function(a){return"0.4px 0.4px 0px ".concat((0,_transparentize["default"])(a.opacity,(0,_lighten["default"])(.04,a.color)))},function(a){return"small"===a.size&&(0,_core.css)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n      .unit {\n        height: 60px;\n        width: 44px;\n      }\n      .side--1 {\n        top: 18px;\n        right: 0px;\n        height: 34px;\n        width: 22px;\n      }\n      .side--2 {\n        top: 18px;\n        left: 0px;\n        height: 34px;\n        width: 22px;\n      }\n      .side--3 {\n        top: -7px;\n        left: 1px;\n        height: 26px;\n        width: 23px;\n      }\n      .stud {\n        border-radius: 9px / 5px;\n        box-shadow: inset -2px 3px 3px ",";\n        height: 15px;\n        left: 14px;\n        top: 2px;\n        width: 18px;\n\n        &:before {\n          height: 10px;\n          width: 18px;\n          border-radius: 9px / 5px;\n        }\n        .stud--inner:after {\n          font-weight: 400;\n          font-size: 4px;\n          left: 4px;\n          top: -8px;\n        }\n      }\n    "])),(0,_transparentize["default"])(a.opacity,(0,_darken["default"])(.08,a.color)))},function(a){return"medium"===a.size&&(0,_core.css)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n      .unit {\n        height: 106.5px;\n        width: 80px;\n      }\n      .side--1 {\n        top: 34px;\n        right: 0px;\n        height: 61px;\n        width: 40px;\n      }\n      .side--2 {\n        top: 34px;\n        left: 0px;\n        height: 61px;\n        width: 40px;\n      }\n      .side--3 {\n        top: -12px;\n        left: 0px;\n        height: 46px;\n        width: 40px;\n      }\n      .stud {\n        border-radius: 18px / 10px;\n        box-shadow: inset -4px 6px 6px ",";\n        height: 26.5px;\n        left: 24px;\n        top: 3px;\n        width: 32px;\n\n        &:before {\n          height: 18px;\n          width: 32px;\n          border-radius: 18px / 10px;\n        }\n        .stud--inner:after {\n          font-weight: 400;\n          font-size: 9px;\n          left: 6px;\n          top: -14px;\n        }\n      }\n    "])),(0,_transparentize["default"])(a.opacity,(0,_darken["default"])(.08,a.color)))},function(a){return"large"===a.size&&(0,_core.css)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n      .unit {\n        height: 120px;\n        width: 90px;\n      }\n      .side--1 {\n        top: 39px;\n        right: 0px;\n        height: 68px;\n        width: 45px;\n      }\n      .side--2 {\n        top: 39px;\n        left: 0px;\n        height: 68px;\n        width: 45px;\n      }\n      .side--3 {\n        top: -13px;\n        left: 0px;\n        height: 52px;\n        width: 45px;\n      }\n      .stud {\n        border-radius: 18px / 10px;\n        box-shadow: inset -4px 6px 6px ",";\n        height: 30px;\n        left: 28px;\n        top: 4px;\n        width: 36px;\n\n        &:before {\n          height: 20px;\n          width: 36px;\n          border-radius: 18px / 10px;\n        }\n        .stud--inner:after {\n          font-weight: 400;\n          font-size: 9px;\n          left: 8px;\n          top: -15px;\n        }\n      }\n    "])),(0,_transparentize["default"])(a.opacity,(0,_darken["default"])(.08,a.color)))});exports.Brick=Brick;var Stud=_styled["default"].div(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n    position: absolute;\n    border-radius: 18px / 10px;\n    box-shadow: ",";\n    height: 30px;\n    left: 28px;\n    top: 4px;\n    width: 36px;\n    z-index: 10;\n    &:before {\n      content: \"\";\n      position: absolute;\n      box-shadow: ",";\n      height: 20px;\n      width: 36px;\n      border-radius: 18px / 10px;\n      z-index: 10;\n    }\n"])),function(a){return"inset -4px 6px 6px ".concat((0,_transparentize["default"])(a.opacity,"rgba(0,0,0,0.2)"))},function(a){return"inset 0px 0px 0.5px 0.5px ".concat((0,_transparentize["default"])(a.opacity,(0,_darken["default"])(.02,a.color)))});exports.Stud=Stud;var StudInner=_styled["default"].div(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n    position: absolute;\n    transform: rotate(60deg);\n    z-index: 100;\n\n    &:after {\n        content: 'LEGO';\n        font-family: 'Roboto Condensed', sans-serif;\n        font-weight: 400;\n        left: 8px;\n        position: absolute;\n        top: -15px;\n        transform: skewY(-30deg);\n    }\n"])));exports.StudInner=StudInner;