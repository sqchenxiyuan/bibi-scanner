import ip from "ip"

const ipRangeStrCheckResult = {
    SUCCESS: 0,
    ERROR_STRING: 1,//错误的字符串
    ERROR_RANGE: 2,//错误的范围
    ERROR_IP: 3, //IP输入错误
}

function ipRangeStrCheck(iprangestr, splitchar = "-"){
    
    let iparr = iprangestr.split(splitchar)

    if(iparr.length > 2) return ipRangeStrCheckResult.ERROR_STRING

    let [from, to] = iparr

    if(iparr.length === 1){
        to = from
    }

    if(ip.isV4Format(from) && ip.isV4Format(to)){
        if(ip.toLong(from) <= ip.toLong(to)){
            return ipRangeStrCheckResult.SUCCESS
        } else {
            return ipRangeStrCheckResult.ERROR_RANGE
        }
    } else {
        return ipRangeStrCheckResult.ERROR_IP
    }
}

export {
    ipRangeStrCheckResult,
    ipRangeStrCheck
}