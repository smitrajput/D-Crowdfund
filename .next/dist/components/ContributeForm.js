'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/desciple/D-Crowdfund/components/ContributeForm.js';


var ContributeForm = function (_Component) {
	(0, _inherits3.default)(ContributeForm, _Component);

	function ContributeForm() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ContributeForm);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: '',
			errorMessage: '',
			loading: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var campaign, accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();

								campaign = (0, _campaign2.default)(_this.props.address);

								_this.setState({ loading: true, errorMessage: '' });

								_context.prev = 3;
								_context.next = 6;
								return _web2.default.eth.getAccounts();

							case 6:
								accounts = _context.sent;
								_context.next = 9;
								return campaign.methods.contribute().send({
									from: accounts[0],
									value: _web2.default.utils.toWei(_this.state.value, 'ether')
								});

							case 9:

								_routes.Router.replaceRoute('/campaigns/' + _this.props.address);
								_context.next = 15;
								break;

							case 12:
								_context.prev = 12;
								_context.t0 = _context['catch'](3);

								_this.setState({ errorMessage: _context.t0.message });

							case 15:

								_this.setState({ loading: false, value: '' });

							case 16:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[3, 12]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ContributeForm, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, _react2.default.createElement('label', { style: { color: 'teal', size: 'mini' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, 'Amount to Contribute'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.value,
				onChange: function onChange(event) {
					return _this3.setState({ value: event.target.value });
				},
				label: 'ether',
				labelPosition: 'right',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', animated: true, loading: this.state.loading, __source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, 'Contribute'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, _react2.default.createElement(_semanticUiReact.Icon, { name: 'bitcoin', __source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}))));
		}
	}]);

	return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiSWNvbiIsIkNhbXBhaWduIiwid2ViMyIsIlJvdXRlciIsIkNvbnRyaWJ1dGVGb3JtIiwic3RhdGUiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsImNvbG9yIiwic2l6ZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFRLEFBQU0sQUFBTyxBQUFRLEFBQU87O0FBQ3BDLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0lBRWpCLEE7Ozs7Ozs7Ozs7Ozs7OzswTixBQUNMO1VBQVEsQUFDQSxBQUNQO2lCQUZPLEFBRU0sQUFDYjtZQUhPLEEsQUFHRTtBQUhGLEFBQ1AsVyxBQUtBO3dGQUFZLGlCQUFBLEFBQU0sT0FBTjtrQkFBQTtrRUFBQTtlQUFBO3VDQUFBO1lBQ1g7Y0FBQSxBQUFNLEFBRUE7O0FBSEssbUJBR0ksd0JBQVMsTUFBQSxBQUFLLE1BSGxCLEFBR0ksQUFBb0IsQUFFbkM7O2NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE1BQU0sY0FMbkIsQUFLWCxBQUFjLEFBQTZCOzt3QkFMaEM7d0JBQUE7ZUFRYSxjQUFBLEFBQUssSUFSbEIsQUFRYSxBQUFTOztZQUExQjtBQVJJLDRCQUFBO3dCQUFBO3dCQVNKLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4QjtlQUM3QixTQURrQyxBQUNsQyxBQUFTLEFBQ2Y7Z0JBQVEsY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFPLE1BQUEsQUFBSyxNQUF2QixBQUE2QixPQVg1QixBQVNKLEFBQW1DLEFBRWhDLEFBQW9DO0FBRkosQUFDeEMsU0FESzs7WUFLTjs7dUJBQUEsQUFBTyw2QkFBMkIsTUFBQSxBQUFLLE1BZDdCLEFBY1YsQUFBNkM7d0JBZG5DO0FBQUE7O1lBQUE7d0JBQUE7d0NBZ0JWOztjQUFBLEFBQUssU0FBUyxFQUFDLGNBQWMsWUFoQm5CLEFBZ0JWLEFBQWMsQUFBbUI7O1lBR2xDOztjQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVSxPQUFPLE9BbkJwQixBQW1CWCxBQUFjLEFBQXdCOztZQW5CM0I7WUFBQTt3QkFBQTs7QUFBQTs2QkFBQTtBOzs7Ozs7Ozs7OzJCQXNCTDtnQkFDUDs7MEJBQ0MsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO2VBQW5EO2lCQUFBLEFBQ0M7QUFERDtJQUFBLGtCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBLFdBQU8sT0FBTyxFQUFDLE9BQUQsQUFBTyxRQUFRLE1BQTdCLEFBQWMsQUFBb0I7ZUFBbEM7aUJBQUE7QUFBQTtNQURELEFBQ0MsQUFDQSx5Q0FBQSxBQUFDLHdDQUFNLE9BQVEsS0FBQSxBQUFLLE1BQXBCLEFBQTBCLEFBQzFCO2NBQVUseUJBQUE7WUFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU0sTUFBQSxBQUFNLE9BQXJDLEFBQVMsQUFBYyxBQUFxQjtBQUR0RCxBQUVBO1dBRkEsQUFFTSxBQUNOO21CQUhBLEFBR2M7O2VBSGQ7aUJBSEYsQUFDQyxBQUVDLEFBUUQ7QUFSQzt3QkFRRCxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7ZUFBbEQ7aUJBWEQsQUFXQyxBQUNBO0FBREE7dUJBQ0EsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsUUFBTyxVQUFyQixNQUE4QixTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDtlQUFsRDtpQkFBQSxBQUNPO0FBRFA7c0JBQ1EsY0FBRCx3QkFBQSxBQUFRLFdBQVEsU0FBaEI7ZUFBQTtpQkFBQTtBQUFBO01BRFAsQUFDTyxBQUNBLCtCQUFDLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFFBQWhCO2VBQUE7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMsdUNBQUssTUFBTixBQUFXO2VBQVg7aUJBaEJWLEFBQ0MsQUFZQyxBQUVPLEFBQ0MsQUFLVjtBQUxVOzs7Ozs7QUE5Q2lCLEEsQUFzRDdCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbnRyaWJ1dGVGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2Rlc2NpcGxlL0QtQ3Jvd2RmdW5kIn0=