'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getWeekdayWithoutDay = undefined;
exports.getWeekday = getWeekday;
exports.getWeekdayWithYear = getWeekdayWithYear;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var weekdays = '日一二三四五六';

function getWeekday(time) {
	if (!time) return '';
	var m = (0, _moment2.default)(time);
	var today = +m.format('d');
	return m.format('M月D日周') + weekdays[today];
}

function getWeekdayWithYear(time) {
	if (!time) return '';
	var m = (0, _moment2.default)(time);
	var today = +m.format('d');
	return m.format('Y年M月D日 周') + weekdays[today];
}

var getWeekdayWithoutDay = exports.getWeekdayWithoutDay = function getWeekdayWithoutDay(time) {
	if (!time) return '';
	var m = (0, _moment2.default)(time);
	var minTime = m.format('HH:mm');
	return m.format('M月D日') + minTime;
};