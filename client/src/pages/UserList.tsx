import React, { Component } from 'react';
import { USERS_LIST }  from "../constant/api";
import { APIServices } from "../services/Common";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";


class UserList extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
        UserListvalue: [], 
        rows: 5,
        }
    };
    componentDidMount() {
        this.getCmsList();
    }
    getCmsList = () => {
        APIServices.getUserData(USERS_LIST).then((res:any) => {
            const data = res.data;
            this.setState({ UserListvalue: data });
            console.log(data);
        });
    };

    onIndex(data: any, props: any) {
        return props.rowIndex + 1;
    }

    setID = (rowData: any) => {
        window.location.replace(`/userdetails/${rowData}`);
    };
    
    actionBodyTemplate = (rowData: any) => {
        return (
          <>
            <Button label="User Details" type="button" onClick={() => this.setID(rowData.id)}>
            </Button>
          </>
        );
      };
    

    render () {
        const { UserListvalue, rows } = this.state;
        return (
            <div>
            <DataTable className="category-dt" value={UserListvalue} responsiveLayout="scroll" paginator rows={rows} paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown" currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" showGridlines >
                <Column field="index" header="Index" body={this.onIndex}></Column>
                <Column field="id" header="ID" sortable></Column>
                <Column field="email" header="Email" sortable></Column> 
                <Column field="username" header="UserName" sortable></Column>
                <Column field="phone" header="Phone No" sortable></Column>
                <Column field="id" header="Action" body={this.actionBodyTemplate}></Column>
            </DataTable>
            </div>
        )
    }
}

export default UserList;