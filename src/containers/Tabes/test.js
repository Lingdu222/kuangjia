
const data = [
  {
    duration: 0,
    nodeName: '启动',
    nodeType: 60,
    relationCode: '00006',
    relationName: '隐蔽验收',
    relationType: 1,
    restartNodeType: 60,
    restartRoleType: 2,
    roleName: '工长',
    roleType: 2,
    scheduleRelation: 2,
    scheduleRelationDesc: '当天'
  },
  {
    duration: 0,
    nodeName: '启动2',
    nodeType: 80,
    relationCode: '00006',
    relationName: '隐蔽验收2',
    relationType: 1,
    restartNodeType: 80,
    restartRoleType: 2,
    roleName: '工长',
    roleType: 2,
    scheduleRelation: 2,
    scheduleRelationDesc: '当天2'
  }
]
const a = []
data.forEach(item => {
  a.push([
    item.nodeType, item.restartRoleType > 0
  ])
  return a
})
// const B = {
//   ...a
// }
// a.forEach(item => {
//   B = {
//     ...item
//   }
//   return B
// }

// [{ '60': true }, { '80': true }]

// {
//   '60':true,
//   '80':true
// }

// _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function (result, value, key) {
//   (result[value] || (result[value] = [])).push(key);
//   return result;
// }, {});

// const arr = [{ a: true }, { b: true }]
// const b = arr.reduce(function (obj, currentItem) {
//   return obj = {
//     ...obj,
//     ...currentItem
//   }
// }, {})
// // console.log(a)
// console.log(b)
const data333 = [
  {
    itemContent: 'enim fugiat nostrud sint irure',
    itemId: 71293678,
    itemTitle: 'in non occaecat'
  },
  {
    itemContent: 'Excepteur commodo officia',
    itemId: -32890569,
    itemTitle: 'velit id'
  },
  {
    itemContent: 'pariatur elit',
    itemId: -86998642,
    itemTitle: 'nostrud est quis exercitation eiusmod'
  },
  {
    itemContent: 'ut exercitation in minim',
    itemId: -19386315,
    itemTitle: 'magna do irure'
  },
  {
    itemContent: 'aute veniam fugiat',
    itemId: 429017,
    itemTitle: 'enim'
  }
]
const a3333 = []
data333.forEach(item => {
  a3333.push({
    itemId: item.itemId,
    itemResult: false,
    workOrderId: 0
  })
})
console.log(a3333)
