import { Suspense } from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/meal.grid";
import { getMeals } from "@/lib/meals";

async function Meals() {
  const meals = await getMeals();

  return <MealGrid meals={meals} />;
}

export default async function Page() {
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

      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching Data...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
