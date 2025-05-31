import { getUrlParamByKey } from '../src/common/index';

test('通过key获取url参数', () => {
  expect(getUrlParamByKey('http://localhost:3456/home?name=aaa', 'name')).toBe('aaa');
});