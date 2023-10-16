import reduce from "lodash/reduce";
import get from "lodash/get";

export const getNotificationElement = () => {
    const querySelector = document.querySelectorAll('button[aria-label="Notifications"]')
    var elements = reduce(querySelector, (p,v,k)=>{
        if (Boolean(v.offsetParent)) {
            p.push(v)
        }
        return p
    },[]);
    return get(elements, [0])
}