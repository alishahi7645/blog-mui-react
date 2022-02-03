import { Card, CardActionArea, CardMedia, Typography, CardContent, CardActions, Button } from '@material-ui/core';
import React from 'react'
import useStyle from '../../styles/postsStyles'
function Post() {
    const classes = useStyle();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/3076431/pexels-photo-3076431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title=" پست اول "  
                />
                <CardContent>
                    <Typography variant='h5' gutterBottom>این پست اول است</Typography>
                    <Typography variant='body'>لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' color='primary'>بیشتر بخوانید</Button>
                    <Button size='small' color='primary'>اشتراک گذاری</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default Post;
