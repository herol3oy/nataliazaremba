import { FC } from "react";
import NextLink from "next/link";
import Image from "next/image";
import {
  Text,
  Flex,
  Icon,
  Button,
  useDisclosure,
  DrawerOverlay,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaInstagram } from "react-icons/fa";
import { SiBehance } from "react-icons/si";
import { ImLinkedin } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/router";

const Topbar: FC = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  const handleClick = (navLink: NavigationLink) => {
    router.push(navLink.href)
    onClose()
  }

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
      <Drawer onClose={onClose} isOpen={isOpen} size='full'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex
              height='100%'
              flexDir='column'
              justifyContent='center'
              justifyItems='center'
              gap={24}>
              <Flex gap={24} flexDir='column'>
                {NAV_LINKS.map(
                  (navLink: NavigationLink): JSX.Element => (
                    <Link
                      key={navLink.name}
                      href={navLink.href}
                      onClick={() => handleClick(navLink)} passHref>
                      <Text fontSize={28} fontWeight="black" lineHeight={1.2}>
                        {navLink.name}
                      </Text>
                    </Link>
                  )
                )}
              </Flex>
              <Flex gap={24}>
                {SOCIAL_MEDIA_LINKS.map(
                  (socialIconName: SocialMediaLinks): JSX.Element => (
                    <Link
                      key={socialIconName.name.toString()}
                      href={socialIconName.url}
                      passHref
                    >
                      <Icon boxSize={12} as={socialIconName.name} />
                    </Link>
                  )
                )}
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Topbar;

interface SocialMediaLinks {
  name: IconType;
  url: string;
}

const SOCIAL_MEDIA_LINKS: SocialMediaLinks[] = [
  {
    name: SiBehance,
    url: "https://www.behance.net/natzaremba",
  },
  {
    name: FaInstagram,
    url: "https://www.instagram.com/nat.designer/",
  },

  {
    name: ImLinkedin,
    url: "https://www.linkedin.com/in/natzar/",
  },
];

interface NavigationLink {
  name: string;
  href: string;
  variant: string;
  colorScheme?: string;
}

const NAV_LINKS: NavigationLink[] = [
  {
    name: "ABOUT",
    href: "/about",
    variant: "ghost",
  },
  {
    name: "SAY HI!",
    href: "mailto:natz.projects@gmail.com",
    variant: "ghost",
  },
];
