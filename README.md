# 自定义单选/多选
## 表格头部自定义组件
在columnDefs中增加一列自定义单元格
```js
{
    // 自定义表头组件:CustomHeader
    headerComponentFramework: CustomHeader,
    //渲染CustomHeader所需要的参数
    headerComponentParams: {
        selectedAll: selectedAll,
        unSelectedAll: unSelectedAll
    },
    //自定义单元格: Check
    cellRendererFramework: Check,
    //渲染单元格Check需要的参数
    cellRendererParams: {
    }
}
```
isRowSelectable: 指定当前行是否可以选择，返回true，但需要在里面设置当前行初始值是选中还是不选中
```js
const isRowSelectable = (node) => {
    //初始化row是选中还是未选中    
    node.selected = node.data.required || node.data.recommend
    return true
  }
```
在Check组件中，使用state里面checked属性管理是否选中，为了保证数据与UI的一致性，需要在对应的时机调用`selectionService.onRowSelected(myEvent)`去更新aggride内部管理的选中数据。

# 动态改变行高
```js
if (event.target.checked) {
    //改变高度
    this.props.node.setRowHeight(100)
} else {
    this.props.node.setRowHeight(40)
}
//触发UI刷新
this.props.node.beans.gridApi.onRowHeightChanged()
```