const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//时间戳转时间
const time = timestamp => {
  timestamp = timestamp.toString().length < 13 ? timestamp * 1000 : timestamp
  let date = new Date(timestamp);
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
  let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  return Y + M + D + h + m + s;
}

// 字符串是否必填校验
const checkRequestStr = (inputStr, fieldName) => {
  if (inputStr.trim() === '') {
    let info = fieldName ? fieldName + '不可为空' : '不可为空'
    uni.showToast({
      title: info,
      icon: 'none',
      mask: true,
      duration: 2000
    })
    return false
  } else {
    return true
  }
}

// 验证手机号（精确）
const checkPhone = (inputStr, fieldName) => {
  inputStr = inputStr.toString();
  if (inputStr.trim() === '') {
    let info = fieldName ? fieldName + '不可为空' : '手机号不可为空'
    uni.showToast({
      title: info,
      icon: 'none',
      mask: true,
      duration: 2000
    })
    return false
  } else {
    const regex = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/ig
    let result = regex.test(inputStr)
    if (!result) {
      let info = fieldName ? '请输入正确' + fieldName : '请输入正确手机号'
      uni.showToast({
        title: info,
        icon: 'none',
        mask: true,
        duration: 2000
      })
      return false
    }
    return true
  }
}
//验证身份证号
const checkIdCardLength = (inputStr, fieldName) => {
  inputStr = inputStr.toString();
  if (inputStr.trim() === '') {
    let info = fieldName ? fieldName + '不可为空' : '身份证不可为空'
    uni.showToast({
      title: info,
      icon: 'none',
      mask: true,
      duration: 2000
    })
    return false
  } else {
    if (inputStr.length != 18) {
      let info = fieldName ? '请输入正确' + fieldName : '请输入正确身份证号'
      uni.showToast({
        title: info,
        icon: 'none',
        mask: true,
        duration: 2000
      })
      return false
    }
    return true
  }
}
//平面内坐标旋转公式
const anglePoint = ({ox=0,oy=0,ax=0,ay=0,angle=0}={}) => {
	let obj = {
		c: 0,
		d: 0,
	}
	obj.c = parseInt(ox+(ax-ox)*Math.cos(angle)+(ay-oy)*Math.sin(angle)) 
	obj.d = parseInt(oy+(ax-ox)*(-Math.sin(angle))+(ay-oy)*Math.cos(angle))
	return obj
}
//获取字符串的长度
const getBLen = function(str) {  
    if (str == null) return 0;  
    if (typeof str != "string"){  
        str += "";  
    }  
    return str.replace(/[^a-z]\d*/g,"01").length;  
}

// /**
//  * 获取页面
//  */
// const getPage = function({name,index}) {
// 	let pages = getCurrentPages();
// 	name&&(return pages.find(page => page.route == name));
// 	index&&(return index==-1?pages[pages.length-1]:pages[index])
// 	return ''
// }


//js 加法计算
//调用：accAdd(arg1,arg2)
//返回值：arg1加arg2的精确结果
function accAdd(arg1,arg2){
    var r1,r2,m;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2))
    return ((arg1*m+arg2*m)/m).toFixed(2);
}
		
//js 减法计算
//调用：Subtr(arg1,arg2)
//返回值：arg1减arg2的精确结果
function subtr(arg1,arg2){
    var r1,r2,m,n;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2));
    //last modify by deeka
    //动态控制精度长度
    n=(r1>=r2)?r1:r2;
    return ((arg1*m-arg2*m)/m).toFixed(2);
}
 
//js 乘法函数
//调用：accMul(arg1,arg2)
//返回值：arg1乘以arg2的精确结果
function accMul(arg1,arg2){
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}

module.exports = {
  formatTime: formatTime,
  time,
  checkRequestStr,
  checkPhone,
  checkIdCardLength,
  anglePoint,
  getBLen,
  accAdd,
  subtr,
  accMul
}
