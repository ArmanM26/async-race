// import type { Car } from "../types/types";

// const API_URL = "http://localhost:3000/garage";

// // fetch cars with pagination
// export async function fetchCars(page: number, limit: number) {
//   const res = await fetch(`${API_URL}?_page=${page}&_limit=${limit}`);
//   if (!res.ok) throw new Error("Failed to fetch cars");
//   const cars: Car[] = await res.json();
//   const total = Number(res.headers.get("X-Total-Count")) || cars.length;
//   return { cars, total };
// }

// // create car
// export async function createCar(car: Omit<Car, "id">) {
//   const res = await fetch(API_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(car),
//   });
//   if (!res.ok) throw new Error("Failed to create car");
//   return res.json();
// }
