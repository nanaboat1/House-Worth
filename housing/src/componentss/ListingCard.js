import classes from "./ListingCard.module.css"

const ListingCard = () => {
  return (
    <div className={classes.card}>
        <div className={classes.left}></div>
        <div className={classes.rightBg} ></div>
        <div className={classes.right}>
          <p className={classes.price}> $3200</p>
          <p className={classes.desc}>A nice house with blah bakah A nice house with blah bakah</p>
          <p className={classes.btn}>&gt;</p>
        </div>
    </div>
  )
}

export default ListingCard