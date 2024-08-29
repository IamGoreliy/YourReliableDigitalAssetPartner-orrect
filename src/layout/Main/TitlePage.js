import {Box, Container, Typography, Button} from "@mui/material";
import styled from "@emotion/styled";
import {ChatIcon} from "../../../public/images/svgIcon/getSvg";
import {CustomButton, CustomTypography} from "@/component/StylingComponent";

const CustomLi = styled(props => {
    const {style, ...other} = props;
    return <li {...other}/>
})(({style}) => {
    return {
        borderRadius: '15px',
        padding: '6px',
        ...style,
    }
})



export const TitlePage = () => {
    return (
        <Box
            id={'titlePage'}
            sx={{
                padding: '100px',
                backgroundImage: 'url(./images/titleBackground.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundColor: '#ededed',
            }}
        >
            <Container
                // maxWidth={'xl'}
                sx={{
                    maxWidth: '1440px'
                }}
            >
                <CustomTypography
                    variant='h1'
                    sx={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        textAlign: 'center',
                        fontWeight: 600,
                        fontSize: '58px',
                        width: '550px'
                    }}
                >
                    Your Reliable Digital Asset Partner
                </CustomTypography>
                <Box
                    component={'ul'}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: 0,
                        listStyle: 'none',
                        columnGap: '10px'
                    }}
                >
                    <CustomLi
                        style={{
                            background: 'radial-gradient(circle at 0% 87%, rgba(198, 224, 243, 1) 0%, rgba(255, 255, 255, 0.3) 18%, rgba(255, 255, 255, 0.3) 100%), radial-gradient(circle at 67% 0%, rgba(198, 224, 243, 1) 6%, rgba(255, 255, 255, 0.3) 20%, rgba(255, 255, 255, 0.3) 100%)',
                            color: '#2ba1e4',
                            border: '1px solid #2ba1e4',
                        }}
                    >
                        MARKET MAKING
                    </CustomLi>
                    <CustomLi
                        style={{
                            background: 'radial-gradient(circle at 6% 2%, rgba(105, 102, 226, 0.28) 0%, rgba(255, 255, 255, 0.3) 11%, rgba(255, 255, 255, 0.3) 100%), radial-gradient(circle at 61% 100%, rgba(105, 102, 226, 0.28) 0%, rgba(255, 255, 255, 0.3) 24%, rgba(255, 255, 255, 0.3) 100%)',
                            color: '#6966e2',
                            border: '1px solid #6966e2'
                        }}
                    >
                        OTC TRADING
                    </CustomLi>
                    <CustomLi
                        style={{
                            background: 'radial-gradient(circle at 28% 0%, rgba(232, 142, 92, 0.28) 0%, rgba(255, 255, 255, 0.5) 18%, rgba(255, 255, 255, 0.5) 100%), radial-gradient(circle at 70% 100%, rgba(232, 142, 92, 0.38) 0%, rgba(255, 255, 255, 0.5) 18%, rgba(255, 255, 255, 0.5) 100%)',
                            border: '1px solid #e88e5c',
                            color: '#e88e5c',
                        }}
                    >
                        LIQUIDITY PROVIDER
                    </CustomLi>
                    <CustomLi
                        style={{
                            background: 'radial-gradient(circle at 4% 90%, rgba(140, 143, 169, 0.35) 0%, rgba(255, 255, 255, 0.5) 13%, rgba(255, 255, 255, 0.5) 100%), radial-gradient(circle at 92% 29%, rgba(140, 143, 169, 0.33) 0%, rgba(255, 255, 255, 0.5) 17%, rgba(255, 255, 255, 0.5) 100%)',
                            color: '#8c8fa9',
                            border: '1px solid #8c8fa9',
                        }}
                    >
                        ...AND MORE
                    </CustomLi>
                </Box>
                <Box
                    sx={{
                        width: '580px',
                        ml: 'auto',
                        mr: 'auto',
                        textAlign: 'center',
                    }}
                >
                    <CustomTypography
                        variant='p'
                        sx={{
                            fontSize: '20px',
                            lineHeight: 1.39,
                        }}
                    >
                        We offer a wide variety of business-to-business digital asset trading services. From the most flexible market making solutions to OTC trading and liquidity aggregation, we`&apos;`ve got you covered.
                    </CustomTypography>
                </Box>
                <CustomButton
                    variant={'contained'}
                    sx={{
                        display: 'flex',
                        marginLeft: 'auto',
                        marginRight: 'auto',
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
            </Container>
        </Box>
    )
}