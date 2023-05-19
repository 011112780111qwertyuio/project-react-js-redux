import React from 'react';
import '../styles/Style-home.css';
import  {maxcount,setname,stphone}  from '../myredux/reducer';
import {useSelector,useDispatch} from 'react-redux';
function Home()
{
     const statevalue = useSelector((state)=>{return state});
     const dispatch = useDispatch();
     console.log(statevalue);
    return (
        <div className="style-home">
        <p>{statevalue.myname}</p>
        <button onClick={()=>{
            dispatch(setname("ahmed eldawly"));
        }}>set name</button>
        <br/>
        <br/>
        <p>{statevalue.phone}</p>
        <button onClick={()=>{dispatch(stphone("01155618864"))}}>set phone</button>
        <br/>
        <br/>
        <p>{statevalue.conut}</p>
        <button onClick={()=>{
            dispatch(maxcount(5));
        }}>set count</button>
        </div>
    );
}
export default Home;