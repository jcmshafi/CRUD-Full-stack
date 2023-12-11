import { useEffect, useState } from "react";
import {Delete,Read} from "../APIServices/CRUDServices";
import FullScreenLoader from "../Helper/FullScreenLoader";
import {ErrorToast, SuccessToast} from "../Helper/ValidationHelper";
import { useNavigate } from "react-router";

const ListTable = () => {
    
    let [DataList,SetDataList]=useState([]);
    let [Loading,SetLoading]=useState(false);
    const navigate = useNavigate();
    useEffect(()=>{

        Read().then((Result)=>{
            SetDataList(Result)
        })
    },[Loading]);

    const DeleteItem=(id)=>{
        SetLoading(true);
        Delete(id).then((result)=>{
            if(result===true){
                SuccessToast("Delete Successfully")
                SetLoading(false);
            }
            else{
                ErrorToast("Request Fail Try Again");
                SetLoading(false);
            }
        })
    }

    const UpdateItem=(id)=>{
        navigate('/update/'+id)
    }


    if(DataList.length>=0){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card list-card">
                            <div className="card-header pb-0">
                                <h4>Product List</h4>
                            </div>
                            <div className="card-body">
                                <table className="table tab-content">
                                    <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Image</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Product Name</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Product Code</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Unit Price</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Qty</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Total Price</th>
                                        <th className="text-secondary opacity-7">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {
                                             DataList.map((item,index)=>{
                                                 return(
                                                     <tr key={index}>
                                                         <td><img className="list-img" src={item.Img} alt="image"/></td>
                                                         <td>{item.ProductName}</td>
                                                         <td>{item.ProductCode}</td>
                                                         <td>{item.UnitPrice}</td>
                                                         <td>{item.Qty}</td>
                                                         <td>{item.TotalPrice}</td>
                                                         <td>
                                                         <div className="btn-group animated fadeInUp" role="group" aria-label="Basic example">
                                                            <button onClick={DeleteItem.bind(this,item._id)} className="btn btn-danger "><i className="fa fa-trash-alt"/></button>
                                                            <button onClick={UpdateItem.bind(this,item._id)} className="btn  btn-success "><i className="fa fa-edit"/></button>
                                                        </div>
                                                         </td>
                                                     </tr>
                                                 )
                                             })
                                        }

                                    </tbody>
    
                                </table>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }else{
        return (
            <div>
                <FullScreenLoader/>
            </div>
        )
    }


    };

export default ListTable;