import React from 'react'
import { Box, Card, Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import './StyleDetailHeader.css'
// import Table from './Table/Table'

export default function DetialsHeader({product}) {

    // const {name, image,  brand, price,rating, numReviews,countInStock } =product;    

    return (
        <div className='detail_header'>
            <Card>
                <img src={product.image} alt='' />
            </Card>
            <div className='detail_header__right'>
                <Typography variant="h5" component="h2">
                   {product.name}
                </Typography>
                <br />
                <Typography variant="h6"  component="h3">
                   {product.brand}
                </Typography>
               {/* <Table price={12} countInStock={10}/> */}
                <div className='detials_header__rating'>
                    <Box className='detials_header__box' component="fieldset" mb={3} borderColor="transparent">
                        <Rating name="pristine" value={product.rating} />
                    </Box>
                    <Typography variant="body2" color="textSecondary" component="p">
                        ({product.numReviews}) reviews
                    </Typography>
                </div>
              
            </div>
        </div>
    )
}