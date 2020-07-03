import React from 'react'

// import { Table, Badge, Menu, Dropdown, Icon } from 'antd'
import { Table, Divider, Tag, Badge, Menu, Dropdown, Icon } from 'antd'
const data = [
  {
    id: 26,
    key: 26,
    groupOrder: 1,
    quotationNo: 'BJ000000000006',
    quotationRoomId: 7,
    skuNo: '603',
    skuName: 'yhm组套测试',
    groupId: null,
    groupName: '主卧主材报价组1',
    calculateUnit: '0',
    comboStandardNum: 20,
    actualNum: 20,
    outNum: 0,
    subItemAmount: 0,
    diffPrice: 0,
    sellPrice: 40,
    extraAmount: 0,
    skuRemak: '',
    threeLevel: '木龙骨',
    twoLevel: '',
    brandName: '',
    standardType: 2,
    itemId: 0,
    marketingQuotationItems: [
      {
        actualNum: 20,
        brandName: '厨具套装11111',
        calculateUnit: 'id nulla',
        comboStandardNum: 20,
        diffPrice: 0,
        extraAmount: 0,
        groupId: '89',
        groupName: 'nisi aliquip mollit',
        groupOrder: 72602198.76727182,
        id: 261,
        key: 261,
        itemId: 2611,
        outNum: 20,
        quotationNo: 'nulla consequat occaecat dolor',
        quotationRoomId: 8153506.446331307,
        skuName: 'aliqua irure',
        skuNo: 'aliqua sint Excepteur',
        skuRemak: 'Ut cillum quis irure voluptate',
        standardType: -31091431.96114607,
        subItemAmount: -8150093.3050203025,
        threeLevel: 'aute mollit aliqua voluptate',
        twoLevel: 'aliquip sint Ut ut'
      },
      {
        actualNum: -956424.3426808119,
        brandName: 'ad voluptate exercitation velit',
        calculateUnit: 'dolor ullamco Excepteur non',
        comboStandardNum: -66510747.884498715,
        diffPrice: 3841358.0439275056,
        extraAmount: -73347825.3847779,
        groupId: 'exercitation dolor quis',
        groupName: 'elit anim aliquip',
        groupOrder: -37946647.88511053,
        id: 262,
        key: 262,
        itemId: -51724477.83475689,
        outNum: 67920863.57290125,
        quotationNo: 'sint ex veniam ipsum',
        quotationRoomId: -77264262.94857061,
        skuName: 'velit in esse',
        skuNo: 'mollit',
        skuRemak: 'sint',
        standardType: -37790888.250822216,
        subItemAmount: -72684879.79386151,
        threeLevel: 'magna Excepteur',
        twoLevel: 'ullamco non'
      },
      {
        actualNum: -69431600.48660557,
        brandName: 'cupidatat amet',
        calculateUnit: 'officia consequat occaecat Excepteur',
        comboStandardNum: -12419592.141143009,
        diffPrice: 45664751.80876461,
        extraAmount: -87552272.28021725,
        groupId: 'magna aute quis',
        groupName: 'Duis ea',
        groupOrder: 65985836.42552826,
        id: 263,
        key: 263,
        itemId: -43395778.832491286,
        outNum: 68766320.15530327,
        quotationNo: 'occaecat ad minim consequat',
        quotationRoomId: -50657533.233659536,
        skuName: 'exercitation',
        skuNo: 'ea ut',
        skuRemak: 'elit',
        standardType: 20965341.556467503,
        subItemAmount: -44652106.680901274,
        threeLevel: 'ea ut ipsum Excepteur laborum',
        twoLevel: 'occaecat do exercitation dolor anim'
      },
      {
        actualNum: 44124391.46746966,
        brandName: 'adipisicing laboris',
        calculateUnit: 'mollit laboris',
        comboStandardNum: -25826739.003446966,
        diffPrice: -26272819.65287684,
        extraAmount: 64334581.744567156,
        groupId: 'ex laborum Ut in',
        groupName: 'incididunt adipisicing id',
        groupOrder: 47245471.107990324,
        id: 264,
        key: 264,
        itemId: -36903148.27743304,
        outNum: -82621326.21903321,
        quotationNo: 'incididunt veniam commodo',
        quotationRoomId: -83282597.41176805,
        skuName: 'elit magna dolore eu',
        skuNo: 'irure aliquip elit enim',
        skuRemak: 'nisi non aliqua',
        standardType: -849112.726600647,
        subItemAmount: -51077619.62825084,
        threeLevel: 'occaecat',
        twoLevel: 'eiusmod in dolor cupidatat adipisicing'
      },
      {
        actualNum: 78842030.86496302,
        brandName: 'Lorem',
        calculateUnit: 'minim ad',
        comboStandardNum: -39298776.3126822,
        diffPrice: -90559190.46509841,
        extraAmount: 32511739.722987264,
        groupId: 'est officia nisi',
        groupName: 'reprehenderit ut anim velit',
        groupOrder: -13164323.338293597,
        id: 265,
        key: 265,
        itemId: -72471548.46367465,
        outNum: 41269491.723337024,
        quotationNo: 'Ut reprehenderit',
        quotationRoomId: -96325490.02081014,
        skuName: 'Excepteur',
        skuNo: 'sed in magna',
        skuRemak: 'pariatur dolor laboris officia',
        standardType: 17774483.609837636,
        subItemAmount: 41399034.84262124,
        threeLevel: 'esse officia Lorem id',
        twoLevel: 'Duis in est incididunt'
      }
    ]
  },
  {
    id: 27,
    key: 27,
    groupOrder: 1,
    quotationNo: 'BJ000000000006',
    quotationRoomId: 7,
    skuNo: '603',
    skuName: 'yhm组套测试2',
    groupId: null,
    groupName: '主卧主材报价组2',
    calculateUnit: '0',
    comboStandardNum: 20,
    actualNum: 20,
    outNum: 0,
    subItemAmount: 0,
    diffPrice: 0,
    sellPrice: 40,
    extraAmount: 0,
    skuRemak: '',
    threeLevel: '木龙骨',
    twoLevel: '',
    brandName: '',
    standardType: 2,
    itemId: 0,
    marketingQuotationItems: [
      {
        actualNum: 20,
        brandName: '厨具套装',
        calculateUnit: 'id nulla',
        comboStandardNum: 20,
        diffPrice: 0,
        extraAmount: 0,
        groupId: '89',
        groupName: 'nisi aliquip mollit',
        groupOrder: 72602198.76727182,
        id: 271,
        key: 271,
        itemId: 2611,
        outNum: 20,
        quotationNo: 'nulla consequat occaecat dolor',
        quotationRoomId: 8153506.446331307,
        skuName: 'aliqua irure',
        skuNo: 'aliqua sint Excepteur',
        skuRemak: 'Ut cillum quis irure voluptate',
        standardType: -31091431.96114607,
        subItemAmount: -8150093.3050203025,
        threeLevel: 'aute mollit aliqua voluptate',
        twoLevel: 'aliquip sint Ut ut'
      },
      {
        actualNum: -956424.3426808119,
        brandName: 'ad voluptate exercitation velit',
        calculateUnit: 'dolor ullamco Excepteur non',
        comboStandardNum: -66510747.884498715,
        diffPrice: 3841358.0439275056,
        extraAmount: -73347825.3847779,
        groupId: 'exercitation dolor quis',
        groupName: 'elit anim aliquip',
        groupOrder: -37946647.88511053,
        id: 272,
        key: 272,
        itemId: -51724477.83475689,
        outNum: 67920863.57290125,
        quotationNo: 'sint ex veniam ipsum',
        quotationRoomId: -77264262.94857061,
        skuName: 'velit in esse',
        skuNo: 'mollit',
        skuRemak: 'sint',
        standardType: -37790888.250822216,
        subItemAmount: -72684879.79386151,
        threeLevel: 'magna Excepteur',
        twoLevel: 'ullamco non'
      },
      {
        actualNum: -69431600.48660557,
        brandName: 'cupidatat amet',
        calculateUnit: 'officia consequat occaecat Excepteur',
        comboStandardNum: -12419592.141143009,
        diffPrice: 45664751.80876461,
        extraAmount: -87552272.28021725,
        groupId: 'magna aute quis',
        groupName: 'Duis ea',
        groupOrder: 65985836.42552826,
        id: 273,
        key: 273,
        itemId: -43395778.832491286,
        outNum: 68766320.15530327,
        quotationNo: 'occaecat ad minim consequat',
        quotationRoomId: -50657533.233659536,
        skuName: 'exercitation',
        skuNo: 'ea ut',
        skuRemak: 'elit',
        standardType: 20965341.556467503,
        subItemAmount: -44652106.680901274,
        threeLevel: 'ea ut ipsum Excepteur laborum',
        twoLevel: 'occaecat do exercitation dolor anim'
      },
      {
        actualNum: 44124391.46746966,
        brandName: 'adipisicing laboris',
        calculateUnit: 'mollit laboris',
        comboStandardNum: -25826739.003446966,
        diffPrice: -26272819.65287684,
        extraAmount: 64334581.744567156,
        groupId: 'ex laborum Ut in',
        groupName: 'incididunt adipisicing id',
        groupOrder: 47245471.107990324,
        id: 274,
        key: 274,
        itemId: -36903148.27743304,
        outNum: -82621326.21903321,
        quotationNo: 'incididunt veniam commodo',
        quotationRoomId: -83282597.41176805,
        skuName: 'elit magna dolore eu',
        skuNo: 'irure aliquip elit enim',
        skuRemak: 'nisi non aliqua',
        standardType: -849112.726600647,
        subItemAmount: -51077619.62825084,
        threeLevel: 'occaecat',
        twoLevel: 'eiusmod in dolor cupidatat adipisicing'
      },
      {
        actualNum: 78842030.86496302,
        brandName: 'Lorem',
        calculateUnit: 'minim ad',
        comboStandardNum: -39298776.3126822,
        diffPrice: -90559190.46509841,
        extraAmount: 32511739.722987264,
        groupId: 'est officia nisi',
        groupName: 'reprehenderit ut anim velit',
        groupOrder: -13164323.338293597,
        id: 275,
        key: 275,
        itemId: -72471548.46367465,
        outNum: 41269491.723337024,
        quotationNo: 'Ut reprehenderit',
        quotationRoomId: -96325490.02081014,
        skuName: 'Excepteur',
        skuNo: 'sed in magna',
        skuRemak: 'pariatur dolor laboris officia',
        standardType: 17774483.609837636,
        subItemAmount: 41399034.84262124,
        threeLevel: 'esse officia Lorem id',
        twoLevel: 'Duis in est incididunt'
      }
    ]
  }
]
export default class App extends React.Component {
  renderStandardCount = (text, record) => {
    switch (record.standardType) {
      case 1:
        return '无限制'
      case 2:
        return text || '--'
      case 3:
        return this.renderDesc(text, '房间面积限制')
      case 4:
        return this.renderDesc(text, '建筑面积限制')
      case 5:
        return this.renderDesc(text, '周长限制')
      case 6:
        return this.renderDesc(text, '周长*2.4-门洞面积限制')
      case 7:
        return this.renderDesc(text, '周长*房高-门洞面积-1/2 窗洞面积限制')
      default:
        return text || '--'
    }
  }

  renderSkuName = (text, record) => {
    return record.innerType === 2
      ? <span><span>【套外】</span>{text}</span>
      : text
  }

  renderDesc = (text, desc) => {
    return (
      <Fragment>
        <p>{text || '--'}</p>
        <p>{desc}</p>
      </Fragment>
    )
  }

  expandedRowRender = (key) => {
    console.log('key:', key)
    const columns = [
      {
        title: '序号',
        width: 80,
        render: (text, record, index) => {
          return index + 1
        }
      },
      {
        title: '辅材编码',
        width: 80,
        dataIndex: 'skuNo',
        render: text => text || '--'
      },
      {
        title: '辅材名称',
        width: 80,
        dataIndex: 'skuName',
        render: (text, record, index) => {
          return this.renderSkuName(text, record)
        }
      },
      {
        title: '属性',
        width: 80,
        dataIndex: 'threeLevel',
        render: text => text || '--'
      },
      {
        title: '三级类目',
        width: 80,
        dataIndex: 'threeLevel',
        render: text => text || '--'
      },
      {
        title: '品牌',
        width: 80,
        dataIndex: 'brandName',
        render: text => text || '--'
      },
      {
        title: '计量单位',
        width: 80,
        dataIndex: 'calculateUnit',
        render: text => text || '--'
      },
      {
        title: '套内标准数量',
        width: 80,
        dataIndex: 'comboStandardNum',
        render: (text, record, index) => {
          return this.renderStandardCount(text, record)
        }
      },
      {
        title: '实际数量',
        width: 80,
        dataIndex: 'actualNum'
      },
      {
        title: '超出数量',
        width: 80,
        dataIndex: 'outNum'
      },
      {
        title: '减项退费',
        width: 80,
        dataIndex: 'subItemAmount'
      },
      {
        title: '升级差价',
        width: 80,
        dataIndex: 'diffPrice'
      },
      {
        title: '操作',
        width: 80,
        render: (text, record, index) => {
          return (
            <div>
              <a onClick={() => {
                this.removeBillItem(text, record, index)
              }}
              >删除
              </a>
            </div>
          )
        }
      }
    ]
    const dataChile = key.marketingQuotationItems
    return <Table
      title={() => <span>+点击添加材料</span>}
      columns={columns}
      dataSource={dataChile}
      pagination={false}
    />
  }

  render() {
    const columns = [
      {
        title: '序号',
        width: 40,
        render: (text, record, index) => {
          return index + 1
        }
      },
      {
        title: '主材编码',
        width: 80,
        dataIndex: 'skuNo',
        render: text => text || '--'
      },
      {
        title: '主材名称',
        width: 80,
        dataIndex: 'skuName',
        render: (text, record, index) => {
          return this.renderSkuName(text, record)
        }
      },
      {
        title: '三级类目',
        width: 80,
        dataIndex: 'threeLevel',
        render: text => text || '--'
      },
      {
        title: '品牌',
        width: 80,
        dataIndex: 'brandName',
        render: text => text || '--'
      },
      {
        title: '计量单位',
        width: 80,
        dataIndex: 'calculateUnit',
        render: text => text || '--'
      },
      {
        title: '套内标准数量',
        width: 80,
        dataIndex: 'comboStandardNum',
        render: (text, record, index) => {
          return this.renderStandardCount(text, record)
        }
      },
      {
        title: '实际数量',
        width: 80,
        dataIndex: 'actualNum'
      },
      {
        title: '超出数量',
        width: 80,
        dataIndex: 'outNum'
      },
      {
        title: '减项退费',
        width: 80,
        dataIndex: 'subItemAmount'
      },
      {
        title: '升级差价',
        width: 80,
        dataIndex: 'diffPrice'
      },
      {
        title: '销售价',
        width: 80,
        dataIndex: 'sellPrice'
      },
      {
        title: '额外收费',
        width: 80,
        dataIndex: 'extraAmount'
      },
      {
        title: '操作',
        width: 80,
        render: (text, record, index) => {
          return (
            <div>
              <a onClick={() => {
                this.removeBillItem(text, record, index)
              }}
              >删除
              </a>
            </div>
          )
        }
      }
    ]

    return (
      <div>
        <Table
          bordered
          size='small'
          rowKey='name'
          pagination={false}
          expandedRowRender={(key) => this.expandedRowRender(key)}
          // expandedRowRender={record => <p style={{ margin: 0 }}>{record.sellPrice}</p>}
          dataSource={data}
          columns={columns}
          title={() => <span> 橱柜组    +点击添加材料</span>}
        />
      </div>
    )
  }
}

// function NestedTable() {
//   const expandedRowRender = (key) => {
//     console.log('key:', key)
//     const columns = [
//       {
//         title: '序号',
//         width: 80,
//         render: (text, record, index) => {
//           return index + 1
//         }
//       },
//       {
//         title: '辅材编码',
//         width: 80,
//         dataIndex: 'skuNo',
//         render: text => text || '--'
//       },
//       {
//         title: '辅材名称',
//         width: 80,
//         dataIndex: 'skuName',
//         render: (text, record, index) => {
//           return this.renderSkuName(text, record)
//         }
//       },
//       {
//         title: '属性',
//         width: 80,
//         dataIndex: 'threeLevel',
//         render: text => text || '--'
//       },
//       {
//         title: '三级类目',
//         width: 80,
//         dataIndex: 'threeLevel',
//         render: text => text || '--'
//       },
//       {
//         title: '品牌',
//         width: 80,
//         dataIndex: 'brandName',
//         render: text => text || '--'
//       },
//       {
//         title: '计量单位',
//         width: 80,
//         dataIndex: 'calculateUnit',
//         render: text => text || '--'
//       },
//       {
//         title: '套内标准数量',
//         width: 80,
//         dataIndex: 'comboStandardNum',
//         render: (text, record, index) => {
//           return this.renderStandardCount(text, record)
//         }
//       },
//       {
//         title: '实际数量',
//         width: 80,
//         dataIndex: 'actualNum'
//       },
//       {
//         title: '超出数量',
//         width: 80,
//         dataIndex: 'outNum'
//       },
//       {
//         title: '减项退费',
//         width: 80,
//         dataIndex: 'subItemAmount'
//       },
//       {
//         title: '升级差价',
//         width: 80,
//         dataIndex: 'diffPrice'
//       },
//       {
//         title: '操作',
//         width: 80,
//         render: (text, record, index) => {
//           return (
//             <div>
//               <a onClick={() => {
//                 this.removeBillItem(text, record, index)
//               }}
//               >删除
//               </a>
//             </div>
//           )
//         }
//       }
//     ]

//     const data = [
//       {
//         actualNum: 20,
//         brandName: '厨具套装',
//         calculateUnit: 'id nulla',
//         comboStandardNum: 20,
//         diffPrice: 0,
//         extraAmount: 0,
//         groupId: '89',
//         groupName: 'nisi aliquip mollit',
//         groupOrder: 72602198.76727182,
//         id: 261,
//         itemId: 2611,
//         outNum: 20,
//         quotationNo: 'nulla consequat occaecat dolor',
//         quotationRoomId: 8153506.446331307,
//         skuName: 'aliqua irure',
//         skuNo: 'aliqua sint Excepteur',
//         skuRemak: 'Ut cillum quis irure voluptate',
//         standardType: -31091431.96114607,
//         subItemAmount: -8150093.3050203025,
//         threeLevel: 'aute mollit aliqua voluptate',
//         twoLevel: 'aliquip sint Ut ut'
//       },
//       {
//         actualNum: -956424.3426808119,
//         brandName: 'ad voluptate exercitation velit',
//         calculateUnit: 'dolor ullamco Excepteur non',
//         comboStandardNum: -66510747.884498715,
//         diffPrice: 3841358.0439275056,
//         extraAmount: -73347825.3847779,
//         groupId: 'exercitation dolor quis',
//         groupName: 'elit anim aliquip',
//         groupOrder: -37946647.88511053,
//         id: 38602489.21643287,
//         itemId: -51724477.83475689,
//         outNum: 67920863.57290125,
//         quotationNo: 'sint ex veniam ipsum',
//         quotationRoomId: -77264262.94857061,
//         skuName: 'velit in esse',
//         skuNo: 'mollit',
//         skuRemak: 'sint',
//         standardType: -37790888.250822216,
//         subItemAmount: -72684879.79386151,
//         threeLevel: 'magna Excepteur',
//         twoLevel: 'ullamco non'
//       },
//       {
//         actualNum: -69431600.48660557,
//         brandName: 'cupidatat amet',
//         calculateUnit: 'officia consequat occaecat Excepteur',
//         comboStandardNum: -12419592.141143009,
//         diffPrice: 45664751.80876461,
//         extraAmount: -87552272.28021725,
//         groupId: 'magna aute quis',
//         groupName: 'Duis ea',
//         groupOrder: 65985836.42552826,
//         id: 92935523.85950759,
//         itemId: -43395778.832491286,
//         outNum: 68766320.15530327,
//         quotationNo: 'occaecat ad minim consequat',
//         quotationRoomId: -50657533.233659536,
//         skuName: 'exercitation',
//         skuNo: 'ea ut',
//         skuRemak: 'elit',
//         standardType: 20965341.556467503,
//         subItemAmount: -44652106.680901274,
//         threeLevel: 'ea ut ipsum Excepteur laborum',
//         twoLevel: 'occaecat do exercitation dolor anim'
//       },
//       {
//         actualNum: 44124391.46746966,
//         brandName: 'adipisicing laboris',
//         calculateUnit: 'mollit laboris',
//         comboStandardNum: -25826739.003446966,
//         diffPrice: -26272819.65287684,
//         extraAmount: 64334581.744567156,
//         groupId: 'ex laborum Ut in',
//         groupName: 'incididunt adipisicing id',
//         groupOrder: 47245471.107990324,
//         id: -34657604.10942358,
//         itemId: -36903148.27743304,
//         outNum: -82621326.21903321,
//         quotationNo: 'incididunt veniam commodo',
//         quotationRoomId: -83282597.41176805,
//         skuName: 'elit magna dolore eu',
//         skuNo: 'irure aliquip elit enim',
//         skuRemak: 'nisi non aliqua',
//         standardType: -849112.726600647,
//         subItemAmount: -51077619.62825084,
//         threeLevel: 'occaecat',
//         twoLevel: 'eiusmod in dolor cupidatat adipisicing'
//       },
//       {
//         actualNum: 78842030.86496302,
//         brandName: 'Lorem',
//         calculateUnit: 'minim ad',
//         comboStandardNum: -39298776.3126822,
//         diffPrice: -90559190.46509841,
//         extraAmount: 32511739.722987264,
//         groupId: 'est officia nisi',
//         groupName: 'reprehenderit ut anim velit',
//         groupOrder: -13164323.338293597,
//         id: 194356.3859435022,
//         itemId: -72471548.46367465,
//         outNum: 41269491.723337024,
//         quotationNo: 'Ut reprehenderit',
//         quotationRoomId: -96325490.02081014,
//         skuName: 'Excepteur',
//         skuNo: 'sed in magna',
//         skuRemak: 'pariatur dolor laboris officia',
//         standardType: 17774483.609837636,
//         subItemAmount: 41399034.84262124,
//         threeLevel: 'esse officia Lorem id',
//         twoLevel: 'Duis in est incididunt'
//       }
//     ]
//     return <Table columns={columns} dataSource={data} pagination={false} />
//   }

//   const columns = [
//     { title: 'Name', dataIndex: 'name', key: 'name' },
//     { title: 'Platform', dataIndex: 'platform', key: 'platform' },
//     { title: 'Version', dataIndex: 'version', key: 'version' },
//     { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
//     { title: 'Creator', dataIndex: 'creator', key: 'creator' },
//     { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
//     { title: 'Action', key: 'operation', render: () => <a>Publish</a> }
//   ]

//   const data = []
//   for (let i = 0; i < 3; ++i) {
//     data.push({
//       key: i,
//       name: 'Screem',
//       platform: 'iOS',
//       version: '10.3.4.5654',
//       upgradeNum: 500,
//       creator: 'Jack',
//       createdAt: '2014-12-24 23:12:00'
//     })
//   }

//   return (
//     <Table
//       className='components-table-demo-nested'
//       columns={columns}
//       expandedRowRender={(key) => expandedRowRender(key)}
//       dataSource={data}
//     />
//   )
// }

// export default NestedTable
