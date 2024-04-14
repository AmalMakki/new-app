import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealSummary";
const Meal = props =>{
    return <Fragment>
        <MealSummary/>
        <AvailableMeals/>
    </Fragment>
}
export default Meal