import { FC } from "react";
import { Divider, Box } from "@chakra-ui/react";

import Link from "next/link";

const Footer: FC = (): JSX.Element => {
  return (
    <Box marginTop="28" py="1rem">
      <Divider marginTop="24" marginBottom="4" />
      <Link href="https://github.com/herol3oy" passHref>
        Developed by Hamed Sedighi
      </Link>
    </Box>
  );
};

export default Footer;
