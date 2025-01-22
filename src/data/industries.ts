import { ecommerce } from "./industries/ecommerce";
import { lawFirms } from "./industries/law-firms";
import { healthcare } from "./industries/healthcare";
import { construction } from "./industries/construction";
import { startups } from "./industries/startups";
import { homeServices } from "./industries/home-services";
import { nonProfits } from "./industries/non-profits";
import { franchises } from "./industries/franchises";
import { restaurants } from "./industries/restaurants";
import { realEstate } from "./industries/real-estate";
import { churches } from "./industries/churches";
import { insurance } from "./industries/insurance";
import { Industry } from "./industries/types";

export const industries: Industry[] = [
  ecommerce,
  lawFirms,
  healthcare,
  construction,
  startups,
  homeServices,
  nonProfits,
  franchises,
  restaurants,
  realEstate,
  churches,
  insurance,
];

export type { Industry } from "./industries/types";