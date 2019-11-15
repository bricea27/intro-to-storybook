(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Task}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,onArchiveTask=_ref.onArchiveTask,onPinTask=_ref.onPinTask;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"list-item ".concat(state)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:"checkbox"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"checkbox",defaultChecked:"TASK_ARCHIVED"===state,name:"checked",disabled:!0}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"checkbox-custom",onClick:onArchiveTask.bind(this,id)})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"title"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",value:title,placeholder:"Input title",readOnly:!0})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"actions",onClick:function onClick(event){return event.stopPropagation()}},"TASK_ARCHIVED"!==state&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{onClick:onPinTask.bind(this,id)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"icon-star"}))))}Task.__docgenInfo={description:"",methods:[],displayName:"Task"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Task.js"]={name:"Task",docgenInfo:Task.__docgenInfo,path:"src/components/Task.js"})},266:function(module,exports,__webpack_require__){__webpack_require__(267),__webpack_require__(379),module.exports=__webpack_require__(380)},288:function(module,exports){},380:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(112),req=(__webpack_require__(569),__webpack_require__(570));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(200)(module))},569:function(module,exports,__webpack_require__){},570:function(module,exports,__webpack_require__){var map={"./components/Task.stories.js":571,"./stories/0-Welcome.stories.js":584,"./stories/1-Button.stories.js":593};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=570},571:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"task",(function(){return task})),__webpack_require__.d(__webpack_exports__,"actions",(function(){return actions}));var _Users_andrewbrice_code_taskbox_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(264),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(112),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(61),_Task__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(113);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(source,!0).forEach((function(key){Object(_Users_andrewbrice_code_taskbox_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var task={id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2019,0,1,9,0)},actions={onPinTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onPinTask"),onArchiveTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onArchiveTask")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Task",module).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({task:task},actions))})).add("pinned",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({task:_objectSpread({},task,{state:"TASK_PINNED"})},actions))})).add("archived",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({task:_objectSpread({},task,{state:"TASK_ARCHIVED"})},actions))}))}.call(this,__webpack_require__(200)(module))},584:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"toStorybook",(function(){return toStorybook}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(265),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(80);__webpack_exports__.default={title:"Welcome"};var toStorybook=function toStorybook(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome,{showApp:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__.linkTo)("Button")})};toStorybook.story={name:"to Storybook"},toStorybook.__docgenInfo={description:"",methods:[],displayName:"toStorybook"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/0-Welcome.stories.js"]={name:"toStorybook",docgenInfo:toStorybook.__docgenInfo,path:"src/stories/0-Welcome.stories.js"})},593:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"text",(function(){return text})),__webpack_require__.d(__webpack_exports__,"emoji",(function(){return emoji}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(61),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(80);__webpack_exports__.default={title:"Button"};var text=function text(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},"Hello Button")},emoji=function emoji(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"))};text.__docgenInfo={description:"",methods:[],displayName:"text"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/1-Button.stories.js"]={name:"text",docgenInfo:text.__docgenInfo,path:"src/stories/1-Button.stories.js"}),emoji.__docgenInfo={description:"",methods:[],displayName:"emoji"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/1-Button.stories.js"]={name:"emoji",docgenInfo:emoji.__docgenInfo,path:"src/stories/1-Button.stories.js"})}},[[266,1,2]]]);
//# sourceMappingURL=main.3553794643f105b5c429.bundle.js.map