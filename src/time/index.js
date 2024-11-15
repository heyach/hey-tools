
import dayjs from "dayjs";
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
export  const testDayjs = () => {
    return dayjs().format('YYYY-MM-DD HH:mm:ss')
}