import { CustomerTC } from "../../models";

export const customers = CustomerTC.getResolver("findMany");
