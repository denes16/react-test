import {
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Rating,
    Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RecipeListItem.module.css';

const RecipeListItemComponent = ({ recipe }) => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate(`./${recipe.id}`);
    };
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={clickHandler}>
                <CardMedia
                    component='img'
                    alt={recipe.title}
                    height='140'
                    image={recipe.image}
                />
                <CardContent>
                    <CardHeader
                        title={recipe.title}
                        subheader={recipe.sourceName}
                    ></CardHeader>
                    <Rating
                        readOnly={true}
                        value={recipe.spoonacularScore / 20}
                    ></Rating>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
export const RecipeListItem = React.memo(RecipeListItemComponent);
