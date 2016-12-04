import { getWeekday } from '../src'
import { expect } from 'chai'

describe('格式化日期', function () {
	it('显示为1月21日星期四', function () {
		expect(getWeekday(new Date('1993-01-21'))).to.be.equal('1月21日周四')
	})
})
