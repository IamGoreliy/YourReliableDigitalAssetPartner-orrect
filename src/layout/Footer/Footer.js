import {Box, Container} from "@mui/material";
import Link from "next/link";
import styled from "@emotion/styled";
import {Telegram, Twitter} from "../../../public/images/svgIcon/getSvg";
import {CustomTypography, LogoDot, LogoText} from "@/component/StylingComponent";


const CustomLink = styled(props => {
    const {href, ...other} = props
    return <Link href={href} {...other}/>
})(() => {
    return {
        display: 'flex',
        alignItems: 'center',
        color: '#491361',
        textDecoration: 'none',
        fontSize: '18px',
        columnGap: '5px',
    }
})

export const Footer = () => {
    return (
        <Box
            sx={{
                padding: '80px 100px',
                backgroundColor: '#f9f5fb',
            }}
        >
            <Container
                sx={{
                    maxWidth: '1440px'
                }}
            >
                <LogoText
                    href={''}
                >
                    prime<LogoDot>.</LogoDot>cc
                </LogoText>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: '20px 0px'
                    }}
                >
                    <Box>
                        <CustomTypography
                            variant='subtitle2'
                        >
                            (с) 2023-2024 New Age Services s.r.o.
                        </CustomTypography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            columnGap: '15px',
                        }}
                    >
                        <CustomLink
                            href=''
                        >
                            <Twitter
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    fill: '#491361',
                                }}
                            />
                            Twitter
                        </CustomLink>
                        <CustomLink
                            href=''
                        >
                            <Telegram
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    fill: '#491361',
                                }}
                            />
                            Telegram Channel
                        </CustomLink>
                        <CustomLink
                            href=''
                        >
                            <Telegram
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    fill: '#491361',
                                }}
                            />
                            Telegram Group
                        </CustomLink>
                    </Box>
                </Box>
                <CustomTypography
                    variant='p'
                    paragraph={true}
                >
                    DISCLAIMER: Domain name PRIME.CC is full owned and operated by New Age Services s.r.o. New Age Services s.r.o. is proprietary trading firm involved in liquidity provision, investment and derivatives trading. Neither PRIME.CC or New Age Services s.r.o. accept investments from external parties and does not provide service to retail customers.
                </CustomTypography>
                <CustomTypography
                    variant='p'
                    paragraph={true}
                >
                    In addition, please note that New Age Services s.r.o. does not offer services for managing or safeguarding cryptocurrency assets or traditional currencies on behalf of third parties, investor, or customers. It is not authorized, exempted, or regulated by any regulatory authority. Any counterparty trading with New Age Services s.r.o. would not benefit from the protections of various regulated entity schemes.
                </CustomTypography>
                <CustomTypography
                    variant='p'
                    paragraph={true}
                >
                    The material on this site is for informational purposes only and does not constitute an offer or solicitation for purchasing any cryptocurrency assets, securities or derivatives. It is not intended for access or distribution in jurisdictions where it violates local laws or regulations, in particular and not limited to counterparties that is U.S Person. Users accessing this site must comply with all applicable laws.
                </CustomTypography>
                <CustomTypography
                    variant='p'
                    paragraph={true}
                >
                    Prior to participating in any cryptocurrency, derivative, or investment activities, it is strongly advised to exercise caution and consult with independent advisors. New Age Services s.r.o. disclaims liability for any losses or damages resulting from reliance on the provided information or interactions with New Age Services s.r.o..
                </CustomTypography>
            </Container>
        </Box>
    )
}