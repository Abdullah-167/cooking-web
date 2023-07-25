import Cards from './Cards'
import CheckDish from './CheckDish'
import Header from './Header'
import MostImp from './MostImp'
import NewRecipe from './NewRecipe'
import Newsletter from './Newsletter'
import RecentRecipes from './RecentRecipes'
import Slider from './Slider'

const Home = () => {
    return (
        <>
            <Header />
            <Cards />
            <CheckDish />
            <RecentRecipes />
            <NewRecipe />
            <Slider />
            <MostImp />
            <Newsletter />
        </>
    )
}

export default Home