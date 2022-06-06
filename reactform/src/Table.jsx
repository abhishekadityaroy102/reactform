import React from 'react'
import Tablelist from './Tablelist'
import styles from './styles.module.css'
const Table = ({data,deletedata}) => {
  return (
    <div>
        <table>
            <tr className={styles.tr}>
                <th>username</th>
                <th>age</th>
                <th>ADDRESS</th>
                <th>SALARY</th>
                <th>DEPARTMENT</th>
            </tr>
            {data.map((el)=>
               ( <Tablelist datapart={el} deletedata={deletedata}/>)
            )
        }
        </table>
    </div>
  )
}

export default Table