import {Box, Container} from "@mui/material";
import Image from "next/image";
import flexiblePrimeCC from '../../../public/images/flexiblePrimeCC.png';
import flexibleLiquidityAccess from '../../../public/images/flexibleLiquidityAccess.png';
import OtcTradingImg from "../../../public/images/OTCTrading.png";
import {CustomButton, CustomTypography} from "@/component/StylingComponent";
import {ChatIcon} from "../../../public/images/svgIcon/getSvg";


export const MarketMakingSolution = () => {

    return (
        <Box
            id={'marketMaking'}
            sx={{
                backgroundColor: '#f3eff5',
                padding: '100px',
            }}
        >
            <Container
                // maxWidth={'xl'}
                sx={{
                    maxWidth: '1440px'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            flexBasis: 'calc(100% / 2)',
                        }}
                    >
                        <CustomTypography
                            variant='h2'
                            sx={{
                                fontWeight: 600,
                            }}
                        >
                            Flexible Market Making Solution
                        </CustomTypography>
                        <CustomTypography
                            variant='p'
                            paragraph={true}
                        >
                            PRIME.CC provides cutting edge market making execution capabilities, building volumes and providing healthy liquidity for projects as a service.
                        </CustomTypography>
                        <CustomTypography
                            variant='p'
                            paragraph={true}
                        >
                            We are integrated with the top 60 exchanges and trade thousands of crypto asset pairs which includes spots and derivatives.
                        </CustomTypography>
                        <CustomTypography
                            variant='p'
                            paragraph={true}
                        >
                            For our partners, we provide high-touch, 24/7 coverage service to trade through the volumes and provide liquidity needed.
                        </CustomTypography>
                        <CustomButton
                            variant={'contained'}
                            sx={{
                                width: '150px',
                                marginTop: '20px',
                            }}
                        >
                            <ChatIcon
                                style={{
                                    transform: 'rotateY(180deg)',
                                    fill: 'white',
                                }}
                            />
                            Contact US
                        </CustomButton>
                    </Box>
                    <Box>
                        <Image
                            src='./images/flexiblePrimeCC.png'
                            alt=''
                            width={621}
                            height={531}
                        />
                    </Box>
                </Box>
                <Box
                    id={'liquidity'}
                >
                    <Image
                        src='./images/flexibleLiquidityAccess.png'
                        alt=''
                        width={1139}
                        height={554}
                        style={{
                            width: '100%',
                            height: '600px'
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box
                        id={'OTCTrading'}
                    >
                        <Image
                            src='./images/OTCTrading.png'
                            alt=''
                            width={567}
                            height={567}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            sx={{
                            }}
                        >
                            <CustomTypography
                                variant='h2'
                                sx={{
                                    fontWeight: 600,
                                }}
                            >
                                OTC Trading
                            </CustomTypography>
                            <CustomTypography
                                variant='p'
                                paragraph={true}
                            >
                                PRIME.CC provides cutting edge market making execution capabilities, building volumes and providing healthy liquidity for projects as a service.
                            </CustomTypography>
                            <CustomTypography
                                variant='p'
                                paragraph={true}
                            >
                                We are integrated with the top 60 exchanges and trade thousands of crypto asset pairs which includes spots and derivatives.
                            </CustomTypography>
                            <CustomTypography
                                variant='p'
                                paragraph={true}
                            >
                                For our partners, we provide high-touch, 24/7 coverage service to trade through the volumes and provide liquidity needed.
                            </CustomTypography>
                            <CustomTypography
                                variant='p'
                                paragraph={true}
                            >
                                PRIME.CC provides cutting edge market making execution capabilities, building volumes and providing healthy liquidity for projects as a service.
                            </CustomTypography>
                            <CustomTypography
                                variant='p'
                                paragraph={true}
                            >
                                We are integrated with the top 60 exchanges and trade thousands of crypto asset pairs which includes spots and derivatives.
                            </CustomTypography>
                            <CustomTypography
                                variant='p'
                                paragraph={true}
                            >
                                For our partners, we provide high-touch, 24/7 coverage service to trade through the volumes and provide liquidity needed.
                            </CustomTypography>
                        </Box>
                        <CustomButton
                            variant={'contained'}
                            sx={{
                                width: '150px',
                                marginTop: '20px',
                            }}
                        >
                            <ChatIcon
                                style={{
                                    transform: 'rotateY(180deg)',
                                    fill: 'white',
                                }}
                            />
                            Contact Us
                        </CustomButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}