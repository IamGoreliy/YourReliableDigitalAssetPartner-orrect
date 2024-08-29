import {Box, Container, Typography, Grid} from "@mui/material";
import Image from "next/image";
import azbitImg from '../../../public/images/azbit.png';
import copyCashImg from '../../../public/images/copyCash.png';
import crypto2cloudImg from '../../../public/images/crypto2cloud.png';
import hetznerImg from '../../../public/images/hetzner.png';
import coinzillaImg from '../../../public/images/coinzilla.png';
import amazonImg from '../../../public/images/amazon.png';
import cloudflareImg from '../../../public/images/cloudflare.png';
import vmwareImg from '../../../public/images/vmware.png';
import styled from "@emotion/styled";
import {CustomTypography} from "@/component/StylingComponent";

const IconPartners = styled(props => {
    const {sx, ...other} = props;
    return <Grid
        item
        xl={3}
        md={12}
        xs={12}
        {...other}
    />
})(({sx}) => {
    return {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeft: '2px dotted #dbd0e0',
        borderTop: '2px dotted #dbd0e0',
        height: '120px',
        ...sx,
    }
})

const imgPartner = [azbitImg, copyCashImg, crypto2cloudImg, hetznerImg, coinzillaImg, amazonImg, cloudflareImg, vmwareImg];
export const Partnerships = () => {
    return (
        <Box
            id={'partners'}
            sx={{
                backgroundColor: '#f3eff5',
                padding: '100px',
                border: '1px solid #d7d0db'
            }}
        >
            <Container
                sx={{
                    maxWidth: '1440px'
                }}
            >
                <CustomTypography
                    variant='h2'
                    sx={{
                        textAlign: 'center',
                        fontWeight: 600,
                    }}
                >
                    Partnerships
                </CustomTypography>
                <Grid
                    container
                    spacing={0}
                    sx={{
                        borderBottom: '2px dotted #dbd0e0',
                        borderRight: '2px dotted #dbd0e0',
                        mt: '50px',
                        // minWidth: '440px'
                    }}
                >
                    <IconPartners
                        sx={{
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: '-60px',
                                left: '-2px',
                                display: 'block',
                                width: '1px',
                                height: '60px',
                                borderLeft: '2px dotted #dbd0e0'
                            },
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: '-2px',
                                left: '-60px',
                                display: 'block',
                                width: '60px',
                                height: '2px',
                                borderTop: '2px dotted #dbd0e0'
                            },
                        }}
                    >
                        <Image
                            src='./images/azbit.png'
                            alt=''
                            width={194}
                            height={71}
                        />
                    </IconPartners>
                    <IconPartners
                    >
                        <Image
                            src='./images/copyCash.png'
                            alt=''
                            width={194}
                            height={71}
                        />
                    </IconPartners>
                    <IconPartners

                    >
                        <Image
                            src='./images/crypto2cloud.png'
                            alt=''
                            width={194}
                            height={71}
                        />
                    </IconPartners>
                    <IconPartners
                        sx={{
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: '-60px',
                                right: '-2px',
                                display: 'block',
                                width: '1px',
                                height: '60px',
                                borderRight: '2px dotted #dbd0e0'
                            },
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: '-2px',
                                right: '-60px',
                                display: 'block',
                                width: '60px',
                                height: '2px',
                                borderTop: '2px dotted #dbd0e0'
                            },
                        }}
                    >
                        <Image
                            src='./images/hetzner.png'
                            alt=''
                            width={194}
                            height={71}
                        />
                    </IconPartners>
                    <IconPartners

                        sx={{
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                bottom: '-60px',
                                left: '-2px',
                                display: 'block',
                                width: '1px',
                                height: '60px',
                                borderRight: '2px dotted #dbd0e0',
                            },
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: '-2px',
                                left: '-60px',
                                display: 'block',
                                width: '60px',
                                height: '2px',
                                borderBottom: '2px dotted #dbd0e0'
                            },
                        }}
                    >
                        <Image
                            src='./images/coinzilla.png'
                            alt=''
                            width={159}
                            height={71}
                        />
                    </IconPartners>
                    <IconPartners

                    >
                        <Image
                            src='./images/amazon.png'
                            alt=''
                            width={159}
                            height={71}
                        />
                    </IconPartners>
                    <IconPartners

                    >
                        <Image
                            src='./images/cloudflare.png'
                            alt=''
                            width={159}
                            height={71}
                        />
                    </IconPartners>
                    <IconPartners

                        sx={{
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                bottom: '-60px',
                                right: '-2px',
                                display: 'block',
                                width: '1px',
                                height: '60px',
                                borderRight: '2px dotted #dbd0e0'
                            },
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: '-2px',
                                right: '-60px',
                                display: 'block',
                                width: '60px',
                                height: '2px',
                                borderBottom: '2px dotted #dbd0e0'
                            },
                        }}
                    >
                        <Image
                            src='./images/vmware.png'
                            alt=''
                            width={159}
                            height={71}
                        />
                    </IconPartners>
                </Grid>
            </Container>
        </Box>
    )
}
