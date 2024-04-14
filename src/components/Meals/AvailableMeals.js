import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'
import Card from '../UI/Card'
const DummyMeals =[
    {id: 1 ,
     name : 'Sushi' ,
     description : 'Rice rolls with fish and veggies' ,
     price : 50
    } ,
    {
        id: 2 ,
        name : 'Steak' ,
        description : 'Finest cow meat' ,
        price : 99
    } ,
    {id: 3 ,
     name : 'Lobster' ,
     description : 'Finest seafood' ,
     price : 120
    } ,
    {id: 4 ,
     name : 'Caesar salad' ,
     description : 'Scrumptious chicken salad' ,
     price : 25
    }
]

const AvailableMeals = props =>{
    const mealsList = DummyMeals.map(meal=><MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={`$${meal.price}`} />)
    return <section className={classes.meals}>
        <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
    </section>
}
export default AvailableMeals