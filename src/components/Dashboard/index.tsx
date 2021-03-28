import { Sumarry } from "../Sumarry";
import { TransactionTable } from "../TransactionTable";

import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Sumarry />
      <TransactionTable />
    </Container>
  )
};