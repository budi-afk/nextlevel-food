import Link from "next/link";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/meal.grid";

export default function Page() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meal, created{" "}
          <span className={classes.highlight}>By You</span>{" "}
        </h1>

        <p>
          Choose your favorite receipe and cook it yourself. It is easy and fun!
        </p>

        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite receipe</Link>
        </p>
      </header>

      <main className="">
        <MealGrid meals={[]} />
      </main>
    </>
  );
}
