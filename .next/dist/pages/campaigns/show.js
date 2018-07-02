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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/desciple/kickstart/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
	(0, _inherits3.default)(CampaignShow, _Component);

	function CampaignShow() {
		(0, _classCallCheck3.default)(this, CampaignShow);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignShow, [{
		key: 'renderCards',
		value: function renderCards() {
			var _props = this.props,
			    balance = _props.balance,
			    manager = _props.manager,
			    minimumContribution = _props.minimumContribution,
			    requestsCount = _props.requestsCount,
			    approversCount = _props.approversCount;

			return _react2.default.createElement(_semanticUiReact.Card.Group, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, _react2.default.createElement(_semanticUiReact.Card, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Header, { style: { overflowWrap: 'break-word', color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, _react2.default.createElement(_semanticUiReact.Icon, { fitted: true, name: 'id badge outline', size: 'big', __source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}), ' ', manager), _react2.default.createElement(_semanticUiReact.Card.Meta, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, 'Address of Manager'), _react2.default.createElement(_semanticUiReact.Card.Description, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, 'The manager created this campaign and can create requests to withdraw money.'))), _react2.default.createElement(_semanticUiReact.Card, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Header, { style: { overflowWrap: 'break-word', color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, ' ', _react2.default.createElement(_semanticUiReact.Icon, { fitted: true, name: 'bitcoin', size: 'big', __source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}), ' ', minimumContribution, ' '), _react2.default.createElement(_semanticUiReact.Card.Meta, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, 'Minimum Contribution (wei)'), _react2.default.createElement(_semanticUiReact.Card.Description, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, 'You must contribute atleast to become an approver.'))), _react2.default.createElement(_semanticUiReact.Card, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Header, { style: { overflowWrap: 'break-word', color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, ' ', _react2.default.createElement(_semanticUiReact.Icon, { fitted: true, name: 'send outline', size: 'big', __source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}), ' ', requestsCount, ' '), _react2.default.createElement(_semanticUiReact.Card.Meta, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, 'Number of Requests'), _react2.default.createElement(_semanticUiReact.Card.Description, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, 'A request tries to withdraw money from the contract. Requests must be approvers by approvers.'))), _react2.default.createElement(_semanticUiReact.Card, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Header, { style: { overflowWrap: 'break-word', color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, ' ', _react2.default.createElement(_semanticUiReact.Icon, { fitted: true, name: 'spy', size: 'big', __source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}), ' ', approversCount, ' '), _react2.default.createElement(_semanticUiReact.Card.Meta, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, 'Numbers of approvers'), _react2.default.createElement(_semanticUiReact.Card.Description, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, 'Number of people who have already donated to this campaign.'))), _react2.default.createElement(_semanticUiReact.Card, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, _react2.default.createElement(_semanticUiReact.Card.Header, { style: { overflowWrap: 'break-word', color: 'teal' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, ' ', _react2.default.createElement(_semanticUiReact.Icon, { fitted: true, name: 'bitcoin', size: 'big', __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}), ' ', _web2.default.utils.fromWei(balance, 'ether'), ' '), _react2.default.createElement(_semanticUiReact.Card.Meta, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, 'Campaign Balance (ether)'), _react2.default.createElement(_semanticUiReact.Card.Description, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, 'The balance is how much money this campaign has left to spend.'))));
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 83
				}
			}, _react2.default.createElement('div', { style: { margin: 50 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			}, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true, textAlign: 'center', color: 'teal', __source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}, _react2.default.createElement(_semanticUiReact.Icon, { name: 'users', circular: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 86
				}
			}), _react2.default.createElement(_semanticUiReact.Header.Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 87
				}
			}, 'Campaigns Details...'))), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 92
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 93
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 94
				}
			}, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
					fileName: _jsxFileName,
					lineNumber: 98
				}
			}, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 99
				}
			}))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 103
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 104
				}
			}, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
					fileName: _jsxFileName,
					lineNumber: 105
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 106
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { animated: true, color: 'teal', __source: {
					fileName: _jsxFileName,
					lineNumber: 107
				}
			}, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 108
				}
			}, 'View Request'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 109
				}
			}, _react2.default.createElement(_semanticUiReact.Icon, { name: 'right arrow', __source: {
					fileName: _jsxFileName,
					lineNumber: 110
				}
			})))))))));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var campaign, summary;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								campaign = (0, _campaign2.default)(props.query.address);
								_context.next = 3;
								return campaign.methods.getSummary().call();

							case 3:
								summary = _context.sent;
								return _context.abrupt('return', {
									address: props.query.address,
									minimumContribution: summary[0],
									balance: summary[1],
									requestsCount: summary[2],
									approversCount: summary[3],
									manager: summary[4]
								});

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIkhlYWRlciIsIkljb24iLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJMaW5rIiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJvdmVyZmxvd1dyYXAiLCJjb2xvciIsInV0aWxzIiwiZnJvbVdlaSIsIm1hcmdpbiIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQU0sQUFBSyxBQUFPLEFBQU87O0FBQ2xDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQVEsQUFBVzs7Ozs7OztJQUViLEE7Ozs7Ozs7Ozs7O2dDQWdCUTtnQkFPUixLQVBRLEFBT0g7T0FQRyxBQUVYLGlCQUZXLEFBRVg7T0FGVyxBQUdYLGlCQUhXLEFBR1g7T0FIVyxBQUlYLDZCQUpXLEFBSVg7T0FKVyxBQUtYLHVCQUxXLEFBS1g7T0FMVyxBQU1YLHdCQU5XLEFBTVgsQUFHRDs7MEJBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBTyxFQUFDLGNBQUQsQUFBYyxjQUFjLE9BQWhELEFBQW9CLEFBQWtDO2VBQXREO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLHVDQUFLLFFBQU4sTUFBYSxNQUFiLEFBQWtCLG9CQUFtQixNQUFyQyxBQUEwQztlQUExQztpQkFERCxBQUNDO0FBQUE7T0FBb0QsS0FGdEQsQUFDQyxBQUdBLDBCQUFDLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQTtBQUFBO0FBQUEsTUFKRCxBQUlDLEFBQ0EsdUNBQUMsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBO0FBQUE7QUFBQSxNQVBILEFBQ0MsQUFDQyxBQUtDLEFBSUYsbUdBQUEsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNLFVBQVEsT0FBTyxFQUFDLGNBQUQsQUFBYyxjQUFjLE9BQWpELEFBQXFCLEFBQWtDO2VBQXZEO2lCQUFBO0FBQUE7TUFBaUUscUJBQUEsQUFBQyx1Q0FBSyxRQUFOLE1BQWEsTUFBYixBQUFrQixXQUFVLE1BQTVCLEFBQWlDO2VBQWpDO2lCQUFqRSxBQUFpRTtBQUFBO09BQTRDLEtBQTdHLHFCQURELEFBQ0MsQUFDQSxzQkFBQyxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUE7QUFBQTtBQUFBLE1BRkQsQUFFQyxBQUNBLCtDQUFDLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQTtBQUFBO0FBQUEsTUFmSCxBQVdDLEFBQ0MsQUFHQyxBQUlGLHlFQUFBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTSxVQUFRLE9BQU8sRUFBQyxjQUFELEFBQWMsY0FBYyxPQUFqRCxBQUFxQixBQUFrQztlQUF2RDtpQkFBQTtBQUFBO01BQWlFLHFCQUFBLEFBQUMsdUNBQUssUUFBTixNQUFhLE1BQWIsQUFBa0IsZ0JBQWUsTUFBakMsQUFBc0M7ZUFBdEM7aUJBQWpFLEFBQWlFO0FBQUE7T0FBaUQsS0FBbEgsZUFERCxBQUNDLEFBQ0Esc0JBQUMsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBO0FBQUE7QUFBQSxNQUZELEFBRUMsQUFDQSx1Q0FBQyxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUE7QUFBQTtBQUFBLE1BdkJILEFBbUJDLEFBQ0MsQUFHQyxBQUlGLG9IQUFBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTSxVQUFRLE9BQU8sRUFBQyxjQUFELEFBQWMsY0FBYyxPQUFqRCxBQUFxQixBQUFrQztlQUF2RDtpQkFBQTtBQUFBO01BQWlFLHFCQUFBLEFBQUMsdUNBQUssUUFBTixNQUFhLE1BQWIsQUFBa0IsT0FBTSxNQUF4QixBQUE2QjtlQUE3QjtpQkFBakUsQUFBaUU7QUFBQTtPQUF3QyxLQUF6RyxnQkFERCxBQUNDLEFBQ0Esc0JBQUMsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBO0FBQUE7QUFBQSxNQUZELEFBRUMsQUFDQSx5Q0FBQyxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUE7QUFBQTtBQUFBLE1BL0JILEFBMkJDLEFBQ0MsQUFHQyxBQUlGLGtGQUFBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTSxVQUFRLE9BQU8sRUFBQyxjQUFELEFBQWMsY0FBYyxPQUFqRCxBQUFxQixBQUFrQztlQUF2RDtpQkFBQTtBQUFBO01BQWlFLHFCQUFBLEFBQUMsdUNBQUssUUFBTixNQUFhLE1BQWIsQUFBa0IsV0FBVSxNQUE1QixBQUFpQztlQUFqQztpQkFBakUsQUFBaUU7QUFBQTtPQUE0QyxtQkFBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBQWhJLEFBQTZHLEFBQTJCLFVBRHpJLEFBQ0MsQUFDQSxzQkFBQyxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUE7QUFBQTtBQUFBLE1BRkQsQUFFQyxBQUNBLDZDQUFDLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQTtBQUFBO0FBQUEsTUF4Q0osQUFDQyxBQW1DQyxBQUNDLEFBR0MsQUFLSjs7OzsyQkFFUSxBQUNSOzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBLFNBQUssT0FBTyxFQUFDLFFBQWIsQUFBWSxBQUFRO2VBQXBCO2lCQUFBLEFBQ0U7QUFERjtzQkFDRSxBQUFDLHlDQUFPLElBQVIsQUFBVyxNQUFLLE1BQWhCLE1BQXFCLFdBQXJCLEFBQStCLFVBQVMsT0FBeEMsQUFBOEM7ZUFBOUM7aUJBQUEsQUFDUTtBQURSO3NCQUNRLEFBQUMsdUNBQUssTUFBTixBQUFXLFNBQVMsVUFBcEI7ZUFBQTtpQkFEUixBQUNRLEFBQ0E7QUFEQTt1QkFDQyxjQUFELHdCQUFBLEFBQVE7O2VBQVI7aUJBQUE7QUFBQTtBQUFBLE1BSlgsQUFDQyxBQUNFLEFBRVEsQUFLViwyQ0FBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNBO0FBREE7QUFBQSxzQkFDQyxjQUFELHNCQUFBLEFBQU0sVUFBUSxPQUFkLEFBQXFCO2VBQXJCO2lCQUFBLEFBQ0U7QUFERjtXQURBLEFBQ0EsQUFDRSxBQUFLLEFBR1AsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQVEsT0FBZCxBQUFxQjtlQUFyQjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQywwQ0FBZSxTQUFXLEtBQUEsQUFBSyxNQUFoQyxBQUFzQztlQUF0QztpQkFQRixBQUNDLEFBS0EsQUFDQyxBQUlEO0FBSkM7eUJBSUEsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0E7QUFEQTtBQUFBLHNCQUNDLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDLHlDQUFPLFVBQVIsTUFBaUIsT0FBakIsQUFBdUI7ZUFBdkI7aUJBQUEsQUFDTztBQURQO3NCQUNRLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFNBQWhCO2VBQUE7aUJBQUE7QUFBQTtNQURQLEFBQ08sQUFDQyxpQ0FBQyxjQUFELHdCQUFBLEFBQVEsV0FBUSxRQUFoQjtlQUFBO2lCQUFBLEFBQ087QUFEUDtzQkFDTyxBQUFDLHVDQUFLLE1BQU4sQUFBVztlQUFYO2lCQTVCckIsQUFDQyxBQVNDLEFBV0MsQUFDQSxBQUNDLEFBQ0MsQUFDQyxBQUVRLEFBQ08sQUFXckI7QUFYcUI7Ozs7Ozt3RyxBQXBHTzs7Ozs7WUFDdEI7QSxtQkFBVyx3QkFBUyxNQUFBLEFBQU0sTSxBQUFmLEFBQXFCOztlQUVoQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4QixBOztZQUE5QztBOztrQkFHSSxNQUFBLEFBQU0sTUFEVCxBQUNlLEFBQ3JCOzhCQUFxQixRQUZmLEFBRWUsQUFBUSxBQUM3QjtrQkFBUyxRQUhILEFBR0csQUFBUSxBQUNqQjt3QkFBZSxRQUpULEFBSVMsQUFBUSxBQUN2Qjt5QkFBZ0IsUUFMVixBQUtVLEFBQVEsQUFDeEI7a0JBQVMsUUFOSCxBQU1HLEFBQVEsQTtBQU5YLEFBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFQd0IsQSxBQW1IM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9kZXNjaXBsZS9raWNrc3RhcnQifQ==