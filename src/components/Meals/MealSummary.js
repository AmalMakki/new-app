import classes from './MealSummary.module.css'
const MealSummary = props => {
    return (
    <section className={classes.summary}>
        <h1>Delicious food , delivered to you!</h1>
        <p> Choose your favourite meal from our broad selection of
         available meals and enjoy a scrumptious breakfast ,
          lunch or dinner at home!</p>
          <p>Our meals are cooked with high-quality ingredients ,
            just-in-time by experienced chefs!
          </p>
    </section> )
}
export default MealSummary