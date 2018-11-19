import IpSubnetCalculator from "ip-subnet-calculator"

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

    if(IpSubnetCalculator.isIp(from) && IpSubnetCalculator.isIp(to)){
        if(IpSubnetCalculator.toDecimal(from) <= IpSubnetCalculator.toDecimal(to)){
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