import { useState, useEffect } from 'react';

import './admin.css';
const AdminPage = () => {
    const [api, setApi] = useState("my_work")
    const [myWorks, setMyWork] = useState([]);

    const [data, setData] = useState({
        image:"",
        title:"",
        price:"",
    })

    const handleChangeApi = (event) => {
        setApi(event.target.value);
        console.log(event.target.value);
      };

  useEffect(() => {
   fetch('http://localhost:3000/' + api)
    .then((res) => res.json())
    .then((resJson) => {
      setMyWork(resJson);
    })
  },[api]);
  
  const handleCreateData = (event) => {
    event.preventDefault();
      console.log(data);
      const options = { 
        method : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('http://localhost:3000/' + api,options)
    .then((res) => res.json())
    .then((resJson) => {
        setMyWork((prev) => {
            return [
                ...prev,
                resJson
            ]
        })
        
        console.log(resJson)
    })
  }
  const handleOnchangeData = (event) => {
        setData((prev) => {
            return{
                ...prev,
                [event.target.name] : event.target.value,
            }
           
        });
  };

 const handleDelete = (id) => {
     console.log(id)
    const options = { 
        method : 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
    }
    fetch('http://localhost:3000/' + api +  "/" + id ,options)
    .then((res) => res.json())
    .then((resJson) => {
        setMyWork((prev) => {
            return prev.filter((item) => {
               return item.id !== id
            })
        })
    })
 }
   
  
    return (
        <div>
            <h1>Trang quản lí sản phẩm</h1>
           <div>
               <label>Thay đổi danh sách sản phẩm cần chỉnh sửa</label>
           <select onChange={handleChangeApi} value={api}>
                <option value="my_work">my_work</option>
                <option value="product">product</option>
                <option value="capynbara">capynbara</option>
            </select>
           </div>
            
            <h2>Danh sách sản phẩm</h2>
            <br/>
            <div>
        <table >
            <tbody>
            <tr>
                <td>ID</td>
                <td>Tên sản phẩm</td>
                <td>Ảnh sản phẩm</td>
                <td>Giá sản phẩm</td>
                <td>Action</td>
            </tr>
            </tbody>
           
            <tbody>
                {myWorks.map((myWork) => {
                    return (
                    <tr key={myWork.id}>
                    <td>{myWork.id}</td>
                    <td>{myWork.title}</td>
                    <td><img src={myWork.image} /></td>
                    <td>{myWork.price}</td>
                    <td onClick={(event) => {
                        handleDelete(myWork.id)
                    }}>Xoa</td> 
                </tr>
                    )
                })}
                
            </tbody>
        </table>
    </div>
    <form className="control" onSubmit={handleCreateData}>
        <input 
        type="text" 
        placeholder="Tên sản phẩm" 
        name="title" 
        value={data.title} 
        onChange={handleOnchangeData}
        />
        <input 
        type="text" 
        placeholder="ảnh sản phẩm" 
        name="image" 
        value={data.image} 
        onChange={handleOnchangeData}
        
        />
        <input 
        type="number" 
        placeholder="giá sản phẩm" 
        name="price"
        value={data.price}
        onChange={handleOnchangeData}
        
        />
        <button>Create</button>
        <button >Cập nhật</button>
    </form>
            
        </div>
    );
};
export default AdminPage;