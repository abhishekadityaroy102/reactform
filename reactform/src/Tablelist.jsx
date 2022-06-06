import React from 'react'
import styles from './styles.module.css'
const Tablelist = ({datapart,deletedata}) => {
    const {username,age,department,salary,address,id}=datapart;
  return (
    <tr className={styles.tr}>
         <td>{username}</td>
         <td>{age}</td>
         <td>{address}</td>
         <td>{salary}</td>
         <td>{department}</td>
         <td>
           <button onClick={()=>deletedata(id)}>X</button>
         </td>
    </tr>
  )
}

export default Tablelist