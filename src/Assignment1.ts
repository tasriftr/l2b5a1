function formatString(str: string, toUpper: boolean = true): string {
  return toUpper ? str.toUpperCase() : str.toLowerCase();
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter(({ rating }) => rating >= 4);
}

function concatenateArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}
class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  gatModel(): string {
    return `model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  return products.reduce((previous, current) =>
    previous.price > current.price ? previous : current
  );
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayName(day: Day): string {
  return day >= Day.Monday && day <= Day.Friday ? "Weekday" : "Weekend";
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) reject(new Error("Negative number not allowed"));
      else resolve(n * n);
    }, 1000);
  });
}
