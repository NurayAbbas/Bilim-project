import { Container } from "../Container";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Backimg } from "../BackImg/BackImg";


export const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Header />
        <Backimg />
      
      </Container>

      <Container>{children}</Container>
  
      <Footer />
    </>
  );
};
