import { FC } from "react";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { Container } from "@chakra-ui/react";

const Layout: FC = ({ children }): JSX.Element => {
  return (
    <Container maxW="container.xl" my={8}>
      <Topbar />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
