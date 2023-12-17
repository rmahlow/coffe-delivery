import { Banner } from "./components/Banner";
import { Products } from "./components/Products";
import { HomeContainer } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <Products />
    </HomeContainer>
  );
}
