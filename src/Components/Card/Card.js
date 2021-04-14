import React from 'react'

import { useHistory } from "react-router-dom";


import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';



export default function ProductCard({product}) {
    const history = useHistory()

    const goToDetailPage = () =>{
        // template string '' ``
        history.push(`/products/${product.id}`)

    }
    // const x =12;
    // console.log(`I am Mohamed ${x}`)
    
    // const {name, numReviews,rating, price,image, _id} = product;
    return (
        <div>
            <Card style={{width: 350, margin:20, marginTop : '2rem'}} onClick={()=> goToDetailPage()} > 
                <CardActionArea>
                    <CardMedia 
                        style={{height: 250}}
                        image={product.image}
                        title={product.name}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.name}
                        </Typography>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Rating name="pristine" value={product.rating} />
                        </Box>
                        <div style={{display: 'flex', justifyContent:'space-between'}}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                ({product.numReviews}) reviews
                            </Typography>
                            <Typography color="textSecondary" variant="h5" component="h2">
                              ${product.price}
                            </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color='default' >
                        View
                    </Button>
                </CardActions>
            </Card>
        </div>
   
    )
}