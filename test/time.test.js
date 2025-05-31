import { formatDate, getDateWeekIndex } from '../src/time/index';

test('格式化时间戳', () => {
  expect(formatDate(1748683634271, 'yyyy/MM/dd hh:mm:ss')).toBe('2025/05/31 17:27:14');
});

test('获取时间星期index', () => {
  expect(getDateWeekIndex(formatDate(1748683634271, 'yyyy/MM/dd hh:mm:ss'))).toBe(6);
});