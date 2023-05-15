var util=require('util')
var text='Congratulations %s on your %dth birthday'
var result=util.format(text,'zorro', 15)
console.log(result);