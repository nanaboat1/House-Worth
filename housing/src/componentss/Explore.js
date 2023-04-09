import classes from "./Explore.module.css"
import ListingCard from "./ListingCard"

export const Explore = () => {
  return (
    <div id= "explore" className= { classes.exploreContainer}>
        <div className={classes.name}>
        Explore ✨ 
        </div>
        <div className={classes.cardListContainer}>

        <div className={classes.cardList}>
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
        </div>
        </div>

    </div>
  )
}
