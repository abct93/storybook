(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1099:function(module,exports,__webpack_require__){"use strict";__webpack_require__(4),__webpack_require__(53),__webpack_require__(41),__webpack_require__(31),__webpack_require__(35),__webpack_require__(1100),__webpack_require__(1101),__webpack_require__(6),__webpack_require__(42);var _clientApi=__webpack_require__(46),_clientLogger=__webpack_require__(34),_configFilename=__webpack_require__(1102);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1102:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(210),_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(484);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{storySort:function storySort(a,b){return a[1].kind===b[1].kind?0:a[1].id.localeCompare(b[1].id,void 0,{numeric:!0})}},viewport:{viewports:_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_1__.INITIAL_VIEWPORTS}})},1104:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(210).configure)([__webpack_require__(1105)],module,!1)}).call(this,__webpack_require__(74)(module))},1105:function(module,exports,__webpack_require__){var map={"./box/box.stories.tsx":1111,"./button/button.stories.tsx":1112};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1105},1111:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"simple",(function(){return box_stories_simple})),__webpack_require__.d(__webpack_exports__,"roundedRectangle",(function(){return box_stories_roundedRectangle})),__webpack_require__.d(__webpack_exports__,"background",(function(){return box_stories_background})),__webpack_require__.d(__webpack_exports__,"horizontalBorder",(function(){return box_stories_horizontalBorder})),__webpack_require__.d(__webpack_exports__,"double",(function(){return box_stories_double})),__webpack_require__.d(__webpack_exports__,"dashed",(function(){return box_stories_dashed})),__webpack_require__.d(__webpack_exports__,"verticalBorder",(function(){return box_stories_verticalBorder})),__webpack_require__.d(__webpack_exports__,"sticky",(function(){return box_stories_sticky})),__webpack_require__.d(__webpack_exports__,"labelTop",(function(){return box_stories_labelTop})),__webpack_require__.d(__webpack_exports__,"shadow",(function(){return box_stories_shadow})),__webpack_require__.d(__webpack_exports__,"smart",(function(){return box_stories_smart})),__webpack_require__.d(__webpack_exports__,"board",(function(){return box_stories_board})),__webpack_require__.d(__webpack_exports__,"boardShadow",(function(){return box_stories_boardShadow}));__webpack_require__(3);var jsx_runtime=__webpack_require__(37),styled_components_browser_esm=(__webpack_require__(0),__webpack_require__(9),__webpack_require__(31),__webpack_require__(33),__webpack_require__(161));function _templateObject2(){var data=_taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=_taggedTemplateLiteral(["\n    padding: 0.5em 1em;\n    margin: 2em 0;\n\n    &.simple {\n        font-weight: bold;\n        border: solid 3px #000000;\n    }\n\n    &.rounded {\n        font-weight: bold;\n        color: #6091d3;\n        background: #FFF;\n        border: solid 3px #6091d3;\n        border-radius: 10px;\n    }\n\n    &.background {\n        color: #2c2c2f;\n        background: #cde4ff;\n    }\n\n    &.horizontal-border {\n        color: #2c2c2f;\n        background: #cde4ff;\n        border-top: solid 5px #5989cf;\n        border-bottom: solid 5px #5989cf;\n    }\n\n    &.double {\n        border: double 5px #4ec4d3;\n    }\n\n    &.dashed {\n        background: #f0f7ff;\n        border: dashed 2px #5b8bd0;\n    }\n\n    &.vertical-border {\n        color: #474747;\n        background: whitesmoke;\n        border-left: double 7px #4ec4d3;\n        border-right: double 7px #4ec4d3;\n    }\n\n    &.sticky {\n        color: #232323;\n        background: #fff8e8;\n        border-left: solid 10px #ffc06e;\n    }\n\n    &.label-top {\n        color: #ff7d6e;\n        background: #ffebe9;\n        border-top: solid 10px #ff7d6e;\n    }\n\n    &.shadow {\n        color: #00BCD4;\n        background: #e4fcff;\n        border-top: solid 6px #1dc1d6;\n        box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32);\n    }\n\n    &.smart {\n        color: #5d627b;\n        background: white;\n        border-top: solid 5px #5d627b;\n        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);\n    }\n\n    &.board {\n        color: #5989cf;\n        background: #c6e4ff;\n        border-bottom: solid 6px #aac5de;\n        border-radius: 9px;\n    }\n\n    &.board-shadow {\n        color: #FFF;\n        background: #6eb7ff;\n        border-bottom: solid 6px #3f87ce;\n        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);\n        border-radius: 9px;\n    }\n"]);return _templateObject=function _templateObject(){return data},data}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var box_Box=function Box(props){return Object(jsx_runtime.jsx)(StyledBox,{className:props.className?props.className:"simple",children:Object(jsx_runtime.jsx)(StyledParagraph,{children:props.children})})};box_Box.displayName="Box";var StyledBox=styled_components_browser_esm.a.div(_templateObject()),StyledParagraph=styled_components_browser_esm.a.p(_templateObject2());try{box_Box.displayName="Box",box_Box.__docgenInfo={description:"",displayName:"Box",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/box/box.tsx#Box"]={docgenInfo:box_Box.__docgenInfo,name:"Box",path:"src/components/box/box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__(45),loremIpsum=(__webpack_exports__.default={title:"Box Design",component:box_Box},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),box_stories_simple=function simple(){return Object(jsx_runtime.jsx)(box_Box,{children:Object(dist.text)("text",loremIpsum)})};box_stories_simple.displayName="simple";var box_stories_roundedRectangle=function roundedRectangle(){return Object(jsx_runtime.jsx)(box_Box,{className:"rounded",children:Object(dist.text)("text",loremIpsum)})};box_stories_roundedRectangle.displayName="roundedRectangle";var box_stories_background=function background(){return Object(jsx_runtime.jsx)(box_Box,{className:"background",children:Object(dist.text)("text",loremIpsum)})};box_stories_background.displayName="background";var box_stories_horizontalBorder=function horizontalBorder(){return Object(jsx_runtime.jsx)(box_Box,{className:"horizontal-border",children:Object(dist.text)("text",loremIpsum)})};box_stories_horizontalBorder.displayName="horizontalBorder";var box_stories_double=function _double(){return Object(jsx_runtime.jsx)(box_Box,{className:"double",children:Object(dist.text)("text",loremIpsum)})};box_stories_double.displayName="_double";var box_stories_dashed=function dashed(){return Object(jsx_runtime.jsx)(box_Box,{className:"dashed",children:Object(dist.text)("text",loremIpsum)})};box_stories_dashed.displayName="dashed";var box_stories_verticalBorder=function verticalBorder(){return Object(jsx_runtime.jsx)(box_Box,{className:"vertical-border",children:Object(dist.text)("text",loremIpsum)})};box_stories_verticalBorder.displayName="verticalBorder";var box_stories_sticky=function sticky(){return Object(jsx_runtime.jsx)(box_Box,{className:"sticky",children:Object(dist.text)("text",loremIpsum)})};box_stories_sticky.displayName="sticky";var box_stories_labelTop=function labelTop(){return Object(jsx_runtime.jsx)(box_Box,{className:"label-top",children:Object(dist.text)("text",loremIpsum)})};box_stories_labelTop.displayName="labelTop";var box_stories_shadow=function shadow(){return Object(jsx_runtime.jsx)(box_Box,{className:"shadow",children:Object(dist.text)("text",loremIpsum)})};box_stories_shadow.displayName="shadow";var box_stories_smart=function smart(){return Object(jsx_runtime.jsx)(box_Box,{className:"smart",children:Object(dist.text)("text",loremIpsum)})};box_stories_smart.displayName="smart";var box_stories_board=function board(){return Object(jsx_runtime.jsx)(box_Box,{className:"board",children:Object(dist.text)("text",loremIpsum)})};box_stories_board.displayName="board";var box_stories_boardShadow=function boardShadow(){return Object(jsx_runtime.jsx)(box_Box,{className:"board-shadow",children:Object(dist.text)("text",loremIpsum)})};box_stories_boardShadow.displayName="boardShadow",box_stories_simple.parameters=Object.assign({storySource:{source:"() => <Box children={text('text', loremIpsum)}/>"}},box_stories_simple.parameters),box_stories_roundedRectangle.parameters=Object.assign({storySource:{source:"() => (\n    <Box \n        className={'rounded'}\n        children={text('text', loremIpsum)}\n    />\n)"}},box_stories_roundedRectangle.parameters),box_stories_background.parameters=Object.assign({storySource:{source:"() => <Box className={'background'} children={text('text', loremIpsum)} />"}},box_stories_background.parameters),box_stories_horizontalBorder.parameters=Object.assign({storySource:{source:"() => <Box className={'horizontal-border'} children={text('text', loremIpsum)} />"}},box_stories_horizontalBorder.parameters),box_stories_double.parameters=Object.assign({storySource:{source:"() => <Box className={'double'} children={text('text', loremIpsum)} />"}},box_stories_double.parameters),box_stories_dashed.parameters=Object.assign({storySource:{source:"() => <Box className={'dashed'} children={text('text', loremIpsum)} />"}},box_stories_dashed.parameters),box_stories_verticalBorder.parameters=Object.assign({storySource:{source:"() => <Box className={'vertical-border'} children={text('text', loremIpsum)} />"}},box_stories_verticalBorder.parameters),box_stories_sticky.parameters=Object.assign({storySource:{source:"() => <Box className={'sticky'} children={text('text', loremIpsum)} />"}},box_stories_sticky.parameters),box_stories_labelTop.parameters=Object.assign({storySource:{source:"() => <Box className={'label-top'} children={text('text', loremIpsum)} />"}},box_stories_labelTop.parameters),box_stories_shadow.parameters=Object.assign({storySource:{source:"() => <Box className={'shadow'} children={text('text', loremIpsum)} />"}},box_stories_shadow.parameters),box_stories_smart.parameters=Object.assign({storySource:{source:"() => <Box className={'smart'} children={text('text', loremIpsum)} />"}},box_stories_smart.parameters),box_stories_board.parameters=Object.assign({storySource:{source:"() => <Box className={'board'} children={text('text', loremIpsum)} />"}},box_stories_board.parameters),box_stories_boardShadow.parameters=Object.assign({storySource:{source:"() => <Box className={'board-shadow'} children={text('text', loremIpsum)} />"}},box_stories_boardShadow.parameters)},1112:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"simple",(function(){return button_stories_simple})),__webpack_require__.d(__webpack_exports__,"cancel",(function(){return button_stories_cancel}));__webpack_require__(3);var jsx_runtime=__webpack_require__(37);__webpack_require__(0),__webpack_require__(9),__webpack_require__(31),__webpack_require__(33);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n    background: #1e4cff;\n    border: none;\n    border-radius: 3px;\n    box-shadow: none;\n    color: white;\n    font-size: 1rem;\n    height: 2rem;\n    min-width: 5rem;\n    padding: 0 1rem;\n    &.cancel {\n        background: white;\n        border: 1px solid gray;\n        color: gray;\n    }\n"]);return _templateObject=function _templateObject(){return data},data}var StyledButton=__webpack_require__(161).a.button(_templateObject()),button_Button=function Button(props){return Object(jsx_runtime.jsx)(StyledButton,{onClick:props.onClick,className:props.cancel?"cancel":"",children:props.children})};button_Button.displayName="Button";try{button_Button.displayName="Button",button_Button.__docgenInfo={description:"",displayName:"Button",props:{cancel:{defaultValue:null,description:"",name:"cancel",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/button.tsx#Button"]={docgenInfo:button_Button.__docgenInfo,name:"Button",path:"src/components/button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__(45),addon_actions_dist=__webpack_require__(159),button_stories_simple=(__webpack_exports__.default={title:"Button",component:button_Button},function simple(){return Object(jsx_runtime.jsx)(button_Button,{onClick:Object(addon_actions_dist.action)("clicked"),children:Object(dist.text)("text","Button")})});button_stories_simple.displayName="simple";var button_stories_cancel=function cancel(){return Object(jsx_runtime.jsx)(button_Button,{onClick:Object(addon_actions_dist.action)("cancel"),children:Object(dist.text)("text","キャンセル"),cancel:!0})};button_stories_cancel.displayName="cancel",button_stories_simple.parameters=Object.assign({storySource:{source:"() => (\n  <Button onClick={action('clicked')} children={text('text', 'Button')}/>\n)"}},button_stories_simple.parameters),button_stories_cancel.parameters=Object.assign({storySource:{source:"() => (\n  <Button onClick={action('cancel')} children={text('text', 'キャンセル')} cancel />\n)"}},button_stories_cancel.parameters)},488:function(module,exports,__webpack_require__){__webpack_require__(489),__webpack_require__(660),__webpack_require__(661),__webpack_require__(816),__webpack_require__(1031),__webpack_require__(1064),__webpack_require__(1069),__webpack_require__(1081),__webpack_require__(1083),__webpack_require__(1093),__webpack_require__(1096),__webpack_require__(1099),module.exports=__webpack_require__(1104)},563:function(module,exports){},661:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(210)}},[[488,1,2]]]);
//# sourceMappingURL=main.5f025f71d46c855fc54d.bundle.js.map