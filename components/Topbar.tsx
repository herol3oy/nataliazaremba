import { FC } from "react";
import NextLink from "next/link";
import Image from "next/image";
import {
  Text,
  Flex,
  Icon,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { SocialMediaLinks } from "@/models/social-media-links";
import { NavigationLink } from "@/models/navigation-link";
import { DrawerModal } from "./DrawerModa";
import { SOCIAL_MEDIA_LINKS } from "@/lib/social-media-links";
import { NAV_LINKS } from "@/lib/nav-links";

const Topbar: FC = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex h="100px" alignItems="center" justifyContent="space-between">
      <Flex>
        <NextLink href="/" passHref>
          <Image
            src="/natalia-zaremba-website-logo.svg"
            width={75}
            height={75}
            alt="Website logo"
          />
        </NextLink>
      </Flex>
      <Flex
        gap={[0, 10]}
        alignItems="center"
        display={["none", "none", "flex", "flex"]}
      >
        {NAV_LINKS.map(
          (navLink: NavigationLink): JSX.Element => (
            <Link key={navLink.name} href={navLink.href} passHref>
              <Text fontSize={20} fontWeight="black" lineHeight={1.2}>
                {navLink.name}
              </Text>
            </Link>
          )
        )}
        {SOCIAL_MEDIA_LINKS.map(
          (socialIconName: SocialMediaLinks): JSX.Element => (
            <Link
              key={socialIconName.name.toString()}
              href={socialIconName.url}
              passHref
            >
              <Icon boxSize={8} as={socialIconName.name} />
            </Link>
          )
        )}
      </Flex>
      <Button
        onClick={() => onOpen()}
        display={["flex", "flex", "none", "none"]}
        leftIcon={<GiHamburgerMenu size={"2em"} />}
        colorScheme="black"
        variant="ghost"
      ></Button>
      <DrawerModal onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
};

export default Topbar;