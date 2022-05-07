import React from 'react'

import Helmet from '../component/Helmet'
import Grid from '../component/Grid'
const Catalog = () => {
  return (
    <Helmet title='sản phẩm'>
      <div className="catalog">
        <div className="catalog_filter"></div>
        <div className="catalog_content"></div>
      </div>
    </Helmet>
  )
}

export default Catalog