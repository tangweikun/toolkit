import moment from 'moment'

const weekdays = '日一二三四五六'

export function getWeekday(time) {
	if (!time) return ''
	const m = moment(time)
	const today = +m.format('d')
	return m.format('M月D日周') + weekdays[today]
}

export function getWeekdayWithYear(time) {
	if (!time) return ''
	const m = moment(time)
	const today = +m.format('d')

	return m.format('Y年M月D日 周') + weekdays[today]
}

export const getWeekdayWithoutDay = (time) => {
	if (!time) return ''
	const m = moment(time)
	const minTime = m.format('HH:mm')
	return m.format('M月D日') + minTime
}

export const getMonthUnit = (month = 1) => {
  /**
   *  更复杂的时间计算
   * @type {Array}
   */
	const monthUnit = ['一', '二', '三', '四', '五', '六', '七', '八', '九']
	return monthUnit[month - 1]
}

export const getRewardTimeUnit = () => {
  /**
 *  更复杂的奖励机制
 *  比如时间间隔前6个月，每一个月奖励一次
 *  六个月之后，每两个月奖励一次
 */
	const timeUnit = 60 * 60 * 24 * 30 * 1000
	return timeUnit
}

export const getRewardRules = (role) => {
  /**
   * [description]\
   * 不同的阶段奖励的机制不同，可以添加多条rules
   *
   *
   * @return {[type]} [description]
   */
	const rewardRules = {
		invitation: 100,
		management: 100,
	}
	return rewardRules[role]
}
