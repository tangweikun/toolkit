'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getRewardRules = exports.getRewardTimeUnit = exports.getMonthUnit = exports.getWeekdayWithoutDay = undefined;
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

var getMonthUnit = exports.getMonthUnit = function getMonthUnit() {
	var month = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

	/**
  *  更复杂的时间计算
  * @type {Array}
  */
	var monthUnit = ['一', '二', '三', '四', '五', '六', '七', '八', '九'];
	return monthUnit[month - 1];
};

var getRewardTimeUnit = exports.getRewardTimeUnit = function getRewardTimeUnit() {
	/**
 *  更复杂的奖励机制
 *  比如时间间隔前6个月，每一个月奖励一次
 *  六个月之后，每两个月奖励一次
 */
	var timeUnit = 60 * 60 * 24 * 30 * 1000;
	return timeUnit;
};

var getRewardRules = exports.getRewardRules = function getRewardRules(role) {
	/**
  * [description]\
  * 不同的阶段奖励的机制不同，可以添加多条rules
  *
  *
  * @return {[type]} [description]
  */
	var rewardRules = {
		invitation: 100,
		management: 100
	};
	return rewardRules[role];
};