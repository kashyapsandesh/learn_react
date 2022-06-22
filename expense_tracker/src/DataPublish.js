import React from 'react'
import DataPublishdate from './DataPublishdate'
import Datapublishprice from './Datapublishprice'
import Datapublishtitle from './Datapublishtitle'
import DataStore from './DataStore'

const DataPublish = (props) => {
    
  return (
    <div className='data-publish'>
        <Datapublishtitle title={props.title}            
        />
        <Datapublishprice amount={props.amount}/>
        <DataPublishdate date={props.date}/>
        <DataStore/>
    </div>
  )
}

export default DataPublish