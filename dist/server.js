/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _middleware = __webpack_require__(/*! ./src/middleware */ \"./src/middleware/index.js\");\n\nvar _middleware2 = _interopRequireDefault(_middleware);\n\nvar _v = __webpack_require__(/*! ./src/v1 */ \"./src/v1/index.js\");\n\nvar _v2 = _interopRequireDefault(_v);\n\nvar _models = __webpack_require__(/*! ./models */ \"./models/index.js\");\n\nvar _config = __webpack_require__(/*! ./config/config.json */ \"./config/config.json\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-disable */\nvar env = \"development\" || false;\nvar conf = _config2.default[env];\n\nvar app = (0, _express2.default)();\nvar db = (0, _models.getModels)(conf);\n\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\napp.use(_bodyParser2.default.json());\n\napp.get('/', function (req, res) {\n  res.send({ message: 'hello world' });\n});\n\n// internal middleware\napp.use((0, _middleware2.default)({ db: db }));\n\napp.use('/api/v1', (0, _v2.default)({ db: db }));\n\nvar PORT = conf.port || 3389;\n\napp.listen(PORT);\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./config/config.json":
/*!****************************!*\
  !*** ./config/config.json ***!
  \****************************/
/*! exports provided: development, test, production, default */
/***/ (function(module) {

eval("module.exports = {\"development\":{\"username\":\"root\",\"password\":null,\"database\":\"sample_development\",\"host\":\"127.0.0.1\",\"dialect\":\"mysql\"},\"test\":{\"username\":\"root\",\"password\":null,\"database\":\"sample_test\",\"host\":\"127.0.0.1\",\"dialect\":\"mysql\"},\"production\":{\"username\":\"root\",\"password\":null,\"database\":\"sample_production\",\"host\":\"127.0.0.1\",\"dialect\":\"mysql\"}};\n\n//# sourceURL=webpack:///./config/config.json?");

/***/ }),

/***/ "./models/index.js":
/*!*************************!*\
  !*** ./models/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar _sequelize2 = _interopRequireDefault(_sequelize);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar models = {}; // ref: https://github.com/sequelize/sequelize/issues/4974#issuecomment-271359179\n\n\nfunction getModels(config) {\n  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n  if (Object.keys(models).length && !force) {\n    return models;\n  }\n\n  var sequelize = new _sequelize2.default(config.database, config.username, config.password, config);\n\n  var modules = [__webpack_require__(/*! ./user.js */ \"./models/user.js\"), __webpack_require__(/*! ./video.js */ \"./models/video.js\"), __webpack_require__(/*! ./users_videos.js */ \"./models/users_videos.js\")];\n\n  // Initialize models\n  modules.forEach(function (module) {\n    var model = module(sequelize, _sequelize2.default, config);\n    models[model.name] = model;\n  });\n\n  // Apply associations\n  Object.keys(models).forEach(function (key) {\n    if ('associate' in models[key]) {\n      models[key].associate(models);\n    }\n  });\n\n  models.sequelize = sequelize;\n  models.Sequelize = _sequelize2.default;\n\n  return models;\n}\n\nmodule.exports = {\n  getModels: getModels\n};\n\n//# sourceURL=webpack:///./models/index.js?");

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (sequelize, DataTypes) {\n  var user = sequelize.define('user', {\n    name: DataTypes.STRING,\n    child_birthday: DataTypes.STRING,\n    session_code: { type: DataTypes.STRING, unique: true },\n    avatar_url: DataTypes.STRING\n  }, {\n    underscored: true\n  });\n  user.associate = function (models) {\n    // associations can be defined here\n    models.user.belongsToMany(user, { as: 'favorites', through: 'users_videos', foreignKey: 'user_id' });\n  };\n  return user;\n};\n\n//# sourceURL=webpack:///./models/user.js?");

/***/ }),

/***/ "./models/users_videos.js":
/*!********************************!*\
  !*** ./models/users_videos.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (sequelize, DataTypes) {\n  var users_videos = sequelize.define('users_videos', {\n    video_id: DataTypes.INTEGER,\n    user_id: DataTypes.INTEGER\n  }, {\n    underscored: true\n  });\n  users_videos.associate = function (models) {\n    // associations can be defined here\n  };\n  return users_videos;\n};\n\n//# sourceURL=webpack:///./models/users_videos.js?");

/***/ }),

/***/ "./models/video.js":
/*!*************************!*\
  !*** ./models/video.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nmodule.exports = function (sequelize, DataTypes) {\n  var _sequelize$define;\n\n  var video = sequelize.define('video', (_sequelize$define = {\n    title: DataTypes.STRING,\n    tvid: DataTypes.STRING\n  }, _defineProperty(_sequelize$define, 'title', DataTypes.STRING), _defineProperty(_sequelize$define, 'description', DataTypes.STRING), _sequelize$define), {\n    underscored: true\n  });\n  video.associate = function (models) {\n    // associations can be defined here\n    models.video.belongsToMany(video, { as: 'users', through: 'users_videos', foreignKey: 'video_id' });\n  };\n  return video;\n};\n\n//# sourceURL=webpack:///./models/video.js?");

/***/ }),

/***/ "./src/middleware/index.js":
/*!*********************************!*\
  !*** ./src/middleware/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\n/* eslint-disable */\nexports.default = function (_ref) {\n  var config = _ref.config,\n      db = _ref.db;\n\n  var routes = (0, _express.Router)();\n\n  // add middleware here\n\n  return routes;\n};\n\n//# sourceURL=webpack:///./src/middleware/index.js?");

/***/ }),

/***/ "./src/v1/index.js":
/*!*************************!*\
  !*** ./src/v1/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _users = __webpack_require__(/*! ./users */ \"./src/v1/users/index.js\");\n\nvar _users2 = _interopRequireDefault(_users);\n\nvar _videos = __webpack_require__(/*! ./videos */ \"./src/v1/videos/index.js\");\n\nvar _videos2 = _interopRequireDefault(_videos);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (_ref) {\n  var db = _ref.db;\n\n  var api = (0, _express.Router)();\n\n  api.use('/users', (0, _users2.default)({ db: db }));\n\n  // mount the videos resource\n  api.use('/videos', (0, _videos2.default)({ db: db }));\n\n  // perhaps expose some API metadata at the root\n  api.get('/', function (req, res) {\n    res.json({ test: 'aaa' });\n  });\n\n  return api;\n};\n\n//# sourceURL=webpack:///./src/v1/index.js?");

/***/ }),

/***/ "./src/v1/users/index.js":
/*!*******************************!*\
  !*** ./src/v1/users/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nexports.default = function (_ref) {\n  var db = _ref.db;\n\n  var api = (0, _express.Router)();\n\n  api.get('/', function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n      var users;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              users = db.user.findAll({});\n\n              res.json(users);\n\n            case 2:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined);\n    }));\n\n    return function (_x, _x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }());\n\n  api.get('/:userId', function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n      var userId, u;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              userId = req.params.userId;\n              _context2.next = 3;\n              return db.user.find({ where: { id: userId } });\n\n            case 3:\n              u = _context2.sent;\n\n              res.json(u);\n\n            case 5:\n            case 'end':\n              return _context2.stop();\n          }\n        }\n      }, _callee2, undefined);\n    }));\n\n    return function (_x3, _x4) {\n      return _ref3.apply(this, arguments);\n    };\n  }());\n\n  api.post('/', function () {\n    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n      var _req$body, name, sessionCode, avatarUrl, newUser, result;\n\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _req$body = req.body, name = _req$body.name, sessionCode = _req$body.sessionCode, avatarUrl = _req$body.avatarUrl;\n              _context3.next = 3;\n              return db.user.findOrCreate({ where: { name: name, session_code: sessionCode } });\n\n            case 3:\n              newUser = _context3.sent;\n              _context3.next = 6;\n              return newUser[0].update({ avatar_url: avatarUrl });\n\n            case 6:\n              result = _context3.sent;\n\n              res.json(result);\n\n            case 8:\n            case 'end':\n              return _context3.stop();\n          }\n        }\n      }, _callee3, undefined);\n    }));\n\n    return function (_x5, _x6) {\n      return _ref4.apply(this, arguments);\n    };\n  }());\n\n  api.put('/:userId', function () {\n    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {\n      var userId, name, childBirthday, avatarUrl, user, message;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              userId = req.params.userId;\n              name = req.body.name;\n              childBirthday = req.body.child_birthday;\n              avatarUrl = req.body.avatar_url;\n              _context4.next = 6;\n              return db.user.update({ name: name, child_birthday: childBirthday, avatar_url: avatarUrl }, { where: { id: userId } });\n\n            case 6:\n              user = _context4.sent;\n              message = user[0] === 1 ? 'successfully updated' : 'failed to update';\n\n              res.json({ message: message });\n\n            case 9:\n            case 'end':\n              return _context4.stop();\n          }\n        }\n      }, _callee4, undefined);\n    }));\n\n    return function (_x7, _x8) {\n      return _ref5.apply(this, arguments);\n    };\n  }());\n\n  api.get('/destroy/:userId', function () {\n    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {\n      var userId, userDestroyCount, message;\n      return regeneratorRuntime.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              userId = req.params.userId;\n\n              // TODO: These executions should be in one transaction.\n\n              _context5.next = 3;\n              return db.user.destroy({ where: { id: userId } });\n\n            case 3:\n              userDestroyCount = _context5.sent;\n              _context5.next = 6;\n              return db.users_videos.destroy({ where: { user_id: userId } });\n\n            case 6:\n              message = userDestroyCount > 0 ? 'successfully deleted' : 'failed to delete the user';\n\n              res.json({ message: message });\n\n            case 8:\n            case 'end':\n              return _context5.stop();\n          }\n        }\n      }, _callee5, undefined);\n    }));\n\n    return function (_x9, _x10) {\n      return _ref6.apply(this, arguments);\n    };\n  }());\n\n  return api;\n};\n\n//# sourceURL=webpack:///./src/v1/users/index.js?");

/***/ }),

/***/ "./src/v1/videos/index.js":
/*!********************************!*\
  !*** ./src/v1/videos/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar _sequelize2 = _interopRequireDefault(_sequelize);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nexports.default = function (_ref) {\n  var db = _ref.db;\n\n  var api = (0, _express.Router)();\n\n  var makeVideoCopy = function makeVideoCopy(video, isFavorite) {\n    var copy = {};\n    copy.id = video.id;\n    copy.tvid = video.tvid;\n    copy.title = video.title;\n    copy.description = video.description;\n    copy.created_at = video.created_at;\n    copy.updated_at = video.updated_at;\n    copy.is_favorite = isFavorite;\n    return copy;\n  };\n\n  api.get('/', function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n      var videos, userId, _v, isFavorites, v;\n\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return db.video.findAll({});\n\n            case 2:\n              videos = _context.sent;\n              userId = req.headers['user-id'];\n\n              if (userId) {\n                _context.next = 8;\n                break;\n              }\n\n              _v = videos.map(function (video) {\n                var copy = makeVideoCopy(video, false);\n                return copy;\n              });\n\n              res.json({ videos: _v });\n              return _context.abrupt('return');\n\n            case 8:\n              _context.next = 10;\n              return db.users_videos.findAll({ where: { user_id: userId } });\n\n            case 10:\n              isFavorites = _context.sent;\n              v = videos.map(function (video) {\n                var isFavorite = isFavorites.filter(function (a) {\n                  return a.video_id === video.id;\n                }).length > 0;\n                var copy = makeVideoCopy(video, isFavorite);\n                return copy;\n              });\n\n              res.json({ videos: v });\n\n            case 13:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined);\n    }));\n\n    return function (_x, _x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }());\n\n  api.post('/', function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n      var newVideo;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return db.video.create({ title: 'Chinese idle', tvid: 'h0026v0vvl6' });\n\n            case 2:\n              newVideo = _context2.sent;\n\n              res.json(newVideo);\n\n            case 4:\n            case 'end':\n              return _context2.stop();\n          }\n        }\n      }, _callee2, undefined);\n    }));\n\n    return function (_x3, _x4) {\n      return _ref3.apply(this, arguments);\n    };\n  }());\n\n  api.get('/favorites', function () {\n    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n      var userId, fav, videos, copies;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              userId = req.headers['user-id'];\n\n              if (userId) {\n                _context3.next = 4;\n                break;\n              }\n\n              res.json({ videos: [] });\n              return _context3.abrupt('return');\n\n            case 4:\n              _context3.next = 6;\n              return db.users_videos.findAll({ where: { user_id: userId } });\n\n            case 6:\n              fav = _context3.sent;\n              _context3.next = 9;\n              return db.video.findAll({ where: _defineProperty({}, _sequelize2.default.Op.or, [{ id: fav.map(function (f) {\n                    return f.video_id;\n                  }) }]) });\n\n            case 9:\n              videos = _context3.sent;\n              copies = videos.map(function (v) {\n                return makeVideoCopy(v, true);\n              });\n\n              res.json({ videos: copies });\n\n            case 12:\n            case 'end':\n              return _context3.stop();\n          }\n        }\n      }, _callee3, undefined);\n    }));\n\n    return function (_x5, _x6) {\n      return _ref4.apply(this, arguments);\n    };\n  }());\n\n  api.post('/favorites/:videoId', function () {\n    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {\n      var userId, videoId, fav;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              userId = req.headers['user-id'];\n\n              if (userId) {\n                _context4.next = 4;\n                break;\n              }\n\n              // TODO: 401 error\n              res.json({});\n              return _context4.abrupt('return');\n\n            case 4:\n              videoId = req.params.videoId;\n              _context4.next = 7;\n              return db.users_videos.findOrCreate({ where: { user_id: userId, video_id: videoId } });\n\n            case 7:\n              fav = _context4.sent;\n\n              res.json({ video: fav[0] });\n\n            case 9:\n            case 'end':\n              return _context4.stop();\n          }\n        }\n      }, _callee4, undefined);\n    }));\n\n    return function (_x7, _x8) {\n      return _ref5.apply(this, arguments);\n    };\n  }());\n\n  api.post('/favorites/:videoId/delete', function () {\n    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {\n      var userId, videoId, favDestroyCount, message;\n      return regeneratorRuntime.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              userId = req.headers['user-id'];\n\n              if (userId) {\n                _context5.next = 4;\n                break;\n              }\n\n              // TODO: 401 error\n              res.json({});\n              return _context5.abrupt('return');\n\n            case 4:\n              videoId = req.params.videoId;\n              _context5.next = 7;\n              return db.users_videos.destroy({ where: { user_id: userId, video_id: videoId } });\n\n            case 7:\n              favDestroyCount = _context5.sent;\n              message = favDestroyCount > 0 ? 'successfully remove favorite' : 'failed to remove favorite';\n\n              res.json({ message: message });\n\n            case 10:\n            case 'end':\n              return _context5.stop();\n          }\n        }\n      }, _callee5, undefined);\n    }));\n\n    return function (_x9, _x10) {\n      return _ref6.apply(this, arguments);\n    };\n  }());\n\n  api.get('/:videoId', function () {\n    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {\n      var videoId, userId, video, isFavorite, isFavoriteArray, copy;\n      return regeneratorRuntime.wrap(function _callee6$(_context6) {\n        while (1) {\n          switch (_context6.prev = _context6.next) {\n            case 0:\n              videoId = req.params.videoId;\n              userId = req.headers['user-id'];\n              _context6.next = 4;\n              return db.video.find({ where: { id: videoId } });\n\n            case 4:\n              video = _context6.sent;\n              isFavorite = false;\n\n              if (!userId) {\n                _context6.next = 11;\n                break;\n              }\n\n              _context6.next = 9;\n              return db.users_videos.findAll({ where: { user_id: userId, video_id: videoId } });\n\n            case 9:\n              isFavoriteArray = _context6.sent;\n\n              isFavorite = isFavoriteArray.length > 0;\n\n            case 11:\n              copy = makeVideoCopy(video, isFavorite);\n\n              res.json(copy);\n\n            case 13:\n            case 'end':\n              return _context6.stop();\n          }\n        }\n      }, _callee6, undefined);\n    }));\n\n    return function (_x11, _x12) {\n      return _ref7.apply(this, arguments);\n    };\n  }());\n\n  return api;\n};\n\n//# sourceURL=webpack:///./src/v1/videos/index.js?");

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi babel-regenerator-runtime ./app.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-regenerator-runtime */\"babel-regenerator-runtime\");\nmodule.exports = __webpack_require__(/*! ./app.js */\"./app.js\");\n\n\n//# sourceURL=webpack:///multi_babel-regenerator-runtime_./app.js?");

/***/ }),

/***/ "babel-regenerator-runtime":
/*!********************************************!*\
  !*** external "babel-regenerator-runtime" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-regenerator-runtime\");\n\n//# sourceURL=webpack:///external_%22babel-regenerator-runtime%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ })

/******/ });