import {Box, Button, Container} from "@mui/material";
import {ChatIcon} from "../../../public/images/svgIcon/getSvg";
import {CustomButton, LogoDot, LogoText, TitleAnchor, WrapperAnchor} from '@/component/StylingComponent';



export const HeaderLayout = () => {
    return (
        <Box
            component={'header'}
            sx={{
                backgroundColor: '#f3eff5',
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    maxWidth: '1440px',
                    color: '#6b636f',
                }}
            >
                <LogoText
                    href={''}
                >
                    prime<LogoDot>.</LogoDot>cc
                </LogoText>
                <Box
                    component={"ul"}
                    sx={{
                        display: 'flex',
                        listStyle: 'none',
                        columnGap: '10px',
                    }}
                >
                    <WrapperAnchor>
                        <TitleAnchor
                            href={'/#titlePage'}
                        >
                            Home
                        </TitleAnchor>
                    </WrapperAnchor>
                    <WrapperAnchor>
                        <TitleAnchor
                            href={'/#marketMaking'}
                        >
                            Market making
                        </TitleAnchor>
                    </WrapperAnchor>
                    <WrapperAnchor>
                        <TitleAnchor
                            href={'/#liquidity'}
                        >
                            liquidity
                        </TitleAnchor>
                    </WrapperAnchor>
                    <WrapperAnchor>
                        <TitleAnchor
                            href={'/#OTCTrading'}
                        >
                            OTC trading
                        </TitleAnchor>
                    </WrapperAnchor>
                    <WrapperAnchor>
                        <TitleAnchor
                            href={'/#partners'}
                        >
                            Partners
                        </TitleAnchor>
                    </WrapperAnchor>
                    <WrapperAnchor>
                        <TitleAnchor
                            href={'/#contacts'}
                        >
                            Contacts
                        </TitleAnchor>
                    </WrapperAnchor>
                </Box>
                <CustomButton
                    variant={'contained'}
                >
                    <ChatIcon
                        style={{
                            transform: 'rotateY(180deg)',
                            fill: 'white',
                        }}
                    />
                    Get in Touch
                </CustomButton>
            </Container>
        </Box>
    )
}