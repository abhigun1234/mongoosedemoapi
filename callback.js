// console.log('user 1 made a rquest')
// console.log(' server waiting for 5 sec for db operation')
// console.log('data deliverd to the user 1')
// console.log('user 2 made a rquest')
// console.log(' server waiting for 5 sec for db operation')
// console.log('data deliverd to the user 2')
// console.log('user 3 made a rquest')
// console.log(' server waiting for 5 sec for db operation')
// console.log('data deliverd to the user 3')

console.log('user 1 made a rquest')
setTimeout(callBack,3000)

console.log('user 2 made a rquest')
setTimeout(callBack,3000)
console.log('user 3 made a rquest')
setTimeout(callBack,3000)
function callBack()
{
    console.log(' server waiting for 5 sec for db operation')
}