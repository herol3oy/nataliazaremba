import Link from "next/link";
import { useRouter } from "next/router";
import { NavigationLink } from "@/models/navigation-link"
import { SocialMediaLinks } from "@/models/social-media-links";
import { SOCIAL_MEDIA_LINKS } from "@/lib/social-media-links";
import { NAV_LINKS } from "@/lib/nav-links";
import {
    Text,
    Flex,
    Icon,
    DrawerOverlay,
    Drawer,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
} from "@chakra-ui/react";

export const DrawerModal = ({ onClose, isOpen }: { onClose: () => void, isOpen: boolean }) => {
    const router = useRouter()

    const handleClick = (navLink: NavigationLink) => {
        router.push(navLink.href)
        onClose()
    }

    return (
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
    )
}