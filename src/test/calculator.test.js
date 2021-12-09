const { test } = require('@jest/globals');
const Calculator = require('../calculator');

// describe : 관련있는 테스트의 그룹을 지정
describe('Calculator', () => {
	let cal;
	beforeEach(() => {
		cal = new Calculator();
	});

	test('inits with 0', () => {
		expect(cal.value).toBe(0);
	});

	test('sets', () => {
		cal.set(9);
		expect(cal.value).toBe(9);
	});

	test('clear', () => {
		cal.set(9);
		cal.clear();
		expect(cal.value).toBe(0);
	});

	test('substract', () => {
		cal.set(9);
		cal.subtract(3);

		expect(cal.value).toBe(6);
	});

	test('multiply', () => {
		cal.set(9);
		cal.multiply(2);
		expect(cal.value).toBe(18);
	});

	test('add', () => {
		cal.set(9);
		cal.add(3);
		expect(cal.value).toBe(12);
	});

	test('add should throw an error if value is greater than 100', () => {
		expect(() => {
			cal.add(101);
		}).toThrow('Value can not be greater than 100');
	});

	describe('divides', () => {
		test('0 / 0 === NaN', () => {
			cal.divide(0);
			expect(cal.value).toBe(NaN);
		});

		test('1 / 0 === Infinity', () => {
			cal.set(1);
			cal.divide(0);
			expect(cal.value).toBe(Infinity);
		});

		test('4 / 4 === 1', () => {
			cal.set(4);
			cal.divide(4);
			expect(cal.value).toBe(1);
		});
	});
});
