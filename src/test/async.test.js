const fetchProduct = require('../async.js');

describe('async - done', () => {
	// done을 이용한 비동기 테스트 - done을 사용하면 시간이 오래 걸리고 코드가 깔끔하지 않다
	it('async-done', (done) => {
		fetchProduct().then((item) => {
			expect(item).toEqual({ item: 'Milk', price: 200 });
			done();
		});
	});

	// return 이용한 비동기 테스트
	it('async - return', () => {
		return fetchProduct().then((item) => {
			expect(item).toEqual({ item: 'Milk', price: 200 });
		});
	});

	// await을 이용한 비동기 테스트
	it('async - await', async () => {
		const product = await fetchProduct();
		expect(product).toEqual({ item: 'Milk', price: 200 });
	});

	it('async - resolves', () => {
		return expect(fetchProduct()).resolves.toEqual({
			item: 'Milk',
			price: 200,
		});
	});

	it('async - reject', () => {
		return expect(fetchProduct('error')).rejects.toBe('network error');
	});
});

// test('async', () => {
// 	expect(fetchProduct(error)).toBe(error);
// });
