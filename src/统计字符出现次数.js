/**
 * 2022/4/21 平头哥
 * @param {string} str
 * @return {object} 
 */
function max_appear_num(str) {
  // 拆开放入数组
  const _str = str.split().join()
  const arr = []
  for (let i = 0; i < _str.length; i++) {
    arr.push(_str[i])
  }
  // 利用reduce的累加特性
  // 利用es6的obj[key]特性（key不存在则加进去）
  // 以key/value的形式将每个字符以及出现次数存入对象
  const obj = arr.reduce((pre, cur) => {
    if (cur in pre) {
      pre[cur]++
    } else {
      pre[cur] = 1
    }
    return pre
  }, {})

  // 遍历对象，找出现次数最大次数
  let max = 0
  for (const key in obj) {
    max = Math.max(obj[key], max)
  }

  // 再遍历一次，找出所有出现最多次数的字符,并存入一个新对象中
  const resObj = {}
  for (const key in obj) {
    if (obj[key] === max) {
      resObj[key] = max
    }
  }
  return resObj
}

