import styles from './Recipes.module.css';
import { useTranslation } from 'react-i18next';
import { useGetRandomRecipesQuery } from './recipes-service';
import { RecipeListItem } from './components/recipe-list_item/RecipeListItem';
import { Link } from 'react-router-dom';
// import { useSpring, animated } from 'react-spring';
// import { useEffect } from 'react';

export function Recipes() {
    // const [animationProps, animationApi] = useSpring(() => ({
    //     opacity: 0,
    // }));
    const { t } = useTranslation();
    const { data, error, isLoading } = useGetRandomRecipesQuery();
    // useEffect(() => {
    //     animationApi.start();
    // }, [data]);
    return (
        <>
            <Link to='/about'>{t('about')}</Link>
            <div className={styles.titleContainer}>
                <h1>{t('recipes')}</h1>
            </div>
            {isLoading && <div>{t('loading')}</div>}
            {data && (
                <div className={styles.recipesListContainer}>
                    {data &&
                        data.map((recipe) => (
                            <div
                                className={styles.recipesListItem}
                                key={recipe.id}
                            >
                                <RecipeListItem
                                    recipe={recipe}
                                ></RecipeListItem>
                            </div>
                        ))}
                </div>
            )}
        </>
    );
}
