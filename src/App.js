import React, {useState} from 'react';
import { AgGridReact} from 'ag-grid-react';


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './App.css'
import CustomHeader from './CustomHeader'
import Check from './Check';


const App = () => {
   const rowData = [
       {make: "Toyota", model: "Celica", price: 35000, required:1},
       {make: "Ford", model: "Mondeo", price: 32000, recommend:1},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Toyota", model: "Celica", price: 35000, required:1},
       {make: "Ford", model: "Mondeo", price: 32000, recommend:1},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Toyota", model: "Celica", price: 35000, required:1},
       {make: "Ford", model: "Mondeo", price: 32000, recommend:1},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Toyota", model: "Celica", price: 35000, required:1},
       {make: "Ford", model: "Mondeo", price: 32000, recommend:1},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       {make: "Porsche", model: "Boxter", price: 72000},
       
   ];
   let gridApi = null
   let gridColumnApi = null
   const onGridReady = (params) => {
    gridApi = params.api;
    gridColumnApi = params.columnApi;
   }
  const click = () => {
    console.log(gridApi.getSelectedNodes())
  }
  
  const selectedAll =() => {
    gridApi.selectionService.selectAllRowNodes()
    gridApi.refreshCells()
    
  }
  const unSelectedAll = () => {
    gridApi.selectionService.deselectAllRowNodes()
    gridApi.refreshCells()
  }

  const isRowSelectable = (node) => {
    //初始化row是选中还是未选中    
    node.selected = node.data.required || node.data.recommend
    return true
  }

  return (
       <div className="ag-theme-alpine center" style={{height: 400, width: 800}}>
           <AgGridReact
              onGridReady = {onGridReady}
               rowData={rowData}
               isRowSelectable = {isRowSelectable}
               columnDefs={[
                 {
                   filed: 'check',
                   width: 30,
                   headerComponentFramework: CustomHeader,
                   headerComponentParams: {
                    selectedAll: selectedAll,
                    unSelectedAll: unSelectedAll
                   },
                   cellRendererFramework: Check,
                   cellRendererParams: {
                   }
                 },
                {
                  field:'make',
                },
                {
                  field:'model',
                },
                {
                  field:'model',
                },
               ]}
               >
           </AgGridReact>
            <div onClick={click}>获取表单数据</div>
       </div>
   );
};

export default App;