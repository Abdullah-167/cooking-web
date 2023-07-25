import Cards from './Cards'
import CheckDish from './CheckDish'
import Header from './Header'
import RecentRecipes from './RecentRecipes'

const Home = () => {
    return (
        <>
            <Header />
            <Cards />
            <CheckDish />
            <RecentRecipes />
        </>
    )
}

export default Home