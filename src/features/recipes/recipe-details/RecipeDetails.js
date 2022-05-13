import styles from './RecipeDetails.module.css';
import { Alert, Button, CircularProgress, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetRecipeDetailsQuery } from '../recipes-service';
export const RecipeDetails = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetRecipeDetailsQuery(id);
    return (
        <>
            {isLoading && <CircularProgress></CircularProgress>}
            {error && <Alert severity='error'>{error.message}</Alert>}
            {data && (
                <div>
                    <Typography align='center' variant='h5'>
                        {data.title}
                    </Typography>
                    <div className={styles.imageContainer}>
                        <img src={data.image} alt='' />
                    </div>
                    <div
                        className={styles.summaryContainer}
                        dangerouslySetInnerHTML={{ __html: data.summary }}
                    ></div>
                    <Typography variant='h6'>Ingredients</Typography>
                    <div className={styles.ingredientsContainer}>
                        {data.extendedIngredients.map((ingredient, index) => (
                            <div key={ingredient.id}>
                                <Typography variant='body1'>
                                    {ingredient.original}
                                </Typography>
                                <img
                                    alt='ingredient'
                                    src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                                ></img>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
