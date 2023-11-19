import React from 'react'
import Searchbar from '../../components/Searchbar/Searchbar'
import './Allproperties.css'
import useProperties from '../../../hooks/useProperties'
import {PuffLoader} from 'react-spinners'
import PropertiesCard from '../../components/PropertiesCard/PropertiesCard'
const Allproperties = () => {
  const {data, isError, isLoading} = useProperties()
  if(isError){
    return <div className='flexCenter paddings' >Error while fetching data </div>
  }
  if(isLoading){
    return <div className='flexCenter paddings ' style={{height:'60vh'}} >
      <PuffLoader
      size={100}
      color='#000'
      loading={true}

      />
    </div>
  }
  return (
   <div className="wrapper">
    <div className="flexColCenter paddings innerWidth properties-container">
      <Searchbar />
      <div className="paddings flexCenter properties">
        {
          data.map((card, i) => (<PropertiesCard card ={card} key={i} />

          ))
}
      </div>
    </div>
   </div>
  )
}

export default Allproperties