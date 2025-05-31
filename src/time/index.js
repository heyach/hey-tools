
import dayjs from "dayjs";
// 格式化时间
export const formatDate = (date, pattern) => {
    date = new Date(date);
    pattern = pattern || "yyyy-MM-dd";
    const y = date.getFullYear().toString(),
        o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
        };
    pattern = pattern.replace(/(y+)/gi, (a) => {
        return y.substr(4 - Math.min(4, a.length));
    });
    for (const i in o) {
        pattern = pattern.replace(new RegExp("(" + i + ")", "g"), (a) => {
            return o[i] < 10 && a.length > 1 ? "0" + o[i] : o[i];
        });
    }
    return pattern;
}
// 获取时间星期index，0是星期日，1是星期一 ...
export const getDateWeekIndex = (date) => {
    date = date instanceof Date ? date : new Date(date)
    return dayjs(date).day()
}