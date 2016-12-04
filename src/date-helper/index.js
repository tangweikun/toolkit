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
