import {Box, Button, Typography} from "@mui/material";
import Image from "next/image";
import titleImgContactUs from '../../../public/images/ImgSectionContactUs.png';
import styled from "@emotion/styled";
import {Twitter, Telegram, MediumBlog} from "../../../public/images/svgIcon/getSvg";
import {CustomTypography} from "@/component/StylingComponent";

const WrapperInput = styled(props => {
    const {sx, ...other} = props;
    return <Box sx={sx} {...other}/>
})(() => {
    return {
        marginTop: '25px'
    }
});

const LabelForInput = styled(props => {
    const {...other} = props;
    return <label {...props}/>
})(() => {
    return {
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        width: '98.5%',
        fontFamily: "Montserrat, sans-serif",
        fontSize: '12px'
    }
});

const InputCustom = styled(props => {
    const {type,width, placeholder, ...other} = props;
    return <input type={type} placeholder={placeholder} {...other}/>
})(({width = '100%'}) => {
    return {
        marginTop: '10px',
        width,
        height: '30px',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 10%)',
        borderColor: 'transparent',
        color: 'white',
        fontFamily: "Montserrat, sans-serif",
        fontSize: '16px',
        '&::placeholder': {
            color: '#584d5b'
        },

    }
});

const TextAriaCustom = styled(props => {
    const {placeholder, ...other} = props;
    return <textarea rows={5} placeholder={placeholder} {...other}/>
})(() => {
    return {
        width: '100.5%',
        resize: 'none',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 10%)',
        borderColor: 'transparent',
        color: 'white',
        marginTop: '10px',
        fontFamily: "Montserrat, sans-serif",
        fontSize: '16px',
        '&::placeholder': {
            color: '#584d5b',
        },
    }
});

const ButtonForSubscribe = styled(props => {
    const {sx, ...other} = props;
    return <Button sx={sx} variant={'contained'} {...other}/>
})(() => {
    return {
        fontSize: '9px',
        width: '125px',
        height: '45px',
        textTransform: 'none',
        backgroundColor: 'rgba(190, 175, 226, 0.3)',
        color: '#491561',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '10px',
        paddingRight: '10px',
    }
})

export const ContactUs = () => {
    return (
        <Box
            id={'contacts'}
            sx={{
                width: '100%',
                marginTop: '100px',
            }}
        >
            <Box
                sx={{
                    backgroundImage: 'url(./images/newBscktgroundContactUs.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    padding: '100px 80px',
                    columnGap: '10px',
                    borderRadius: '10px',

                }}
            >
                <Box
                    sx={{
                        flexBasis: 'calc(100% / 2)',
                        color: 'white',
                    }}
                >
                    <Typography
                        variant='h2'
                    >
                        Contact Us
                    </Typography>
                    <CustomTypography
                        variant='p'
                        sx={{
                            display: 'block',
                            marginTop: '20px',
                            fontSize: '22px',
                            color: 'white',
                            // width: '400px',
                        }}
                    >
                        Have a question or ready to order? Our sales department is always here at your disposal.
                    </CustomTypography>
                </Box>
                <Box
                    sx={{
                        flexBasis: 'calc(100% / 2)',
                    }}
                >
                    <CustomTypography
                        variant='subtitle2'
                        sx={{
                            fontSize: '13px',
                            color: 'white',
                        }}
                    >
                        Please fill our the form to get started. Provide your contact details and one of our sales department managers will get in with you as soon as possible
                    </CustomTypography>
                    <Box
                        component={'form'}
                        sx={{
                            width: '100%'
                        }}
                    >
                        <WrapperInput>
                            <LabelForInput>
                                Your name
                                <InputCustom
                                    type='text'
                                    placeholder={'Enter your full name'}
                                />
                            </LabelForInput>
                        </WrapperInput>
                        <WrapperInput
                            sx={{
                                display: 'flex',
                                columnGap: '20px',
                            }}
                        >
                            <LabelForInput>
                                Your phone number
                                <InputCustom
                                    type='text'
                                    width='97.5%'
                                    placeholder={'Enter your phone number'}

                                />
                            </LabelForInput>
                            <LabelForInput>
                                Telegram ID
                                <InputCustom
                                    type='text'
                                    width='97.5%'
                                    placeholder={'Enter your Telegram ID'}

                                />
                            </LabelForInput>
                        </WrapperInput>
                        <WrapperInput
                            sx={{
                                display: 'flex',
                                columnGap: '20px',
                            }}
                        >
                            <LabelForInput>
                                WhatsApp ID
                                <InputCustom
                                    type='text'
                                    width='97.5%'
                                    placeholder={'Enter your WhatsApp ID'}
                                />
                            </LabelForInput>
                            <LabelForInput>
                                Your e-mail
                                <InputCustom
                                    type='email'
                                    width='97.5%'
                                    placeholder={'Enter your e-mail'}
                                />
                            </LabelForInput>
                        </WrapperInput>
                        <WrapperInput>
                            <LabelForInput>
                                Comments
                                <TextAriaCustom
                                    placeholder={'Enter your comment'}
                                >

                                </TextAriaCustom>
                            </LabelForInput>
                        </WrapperInput>
                        <Button
                            type='submit'
                            variant={'contained'}
                            sx={{
                                display: 'block',
                                mt: '25px',
                                ml: 'auto',
                                width: '194px',
                                backgroundColor: '#60257a',
                                '&:hover': {
                                    backgroundColor: '#60257a',
                                },
                                borderRadius: '10px',
                            }}
                        >
                            Send Your Request
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        width: '550px',
                        height: '100px',
                        borderBottomLeftRadius: '15px',
                        borderBottomRightRadius: '15px',
                        position: 'relative',
                        top: '-6px',
                        marginLeft: '370pt',
                        display: 'flex',
                        transform: 'perspective(400px) rotateX(-35deg)',
                        background: 'radial-gradient(circle, rgba(206,212,252,1) 46%, rgba(172,227,251,1) 57%, rgba(214,195,243,1) 93%)',
                    }}
                >
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 15,
                        left: '385pt',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                    }}
                >
                    <Box>
                        <CustomTypography
                            variant='subtitle1'
                            sx={{
                                lineHeight: 1.19,
                                color: '#491561',
                            }}
                        >
                            Subscribe To <br/> Updates
                        </CustomTypography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            columnGap: '10px',
                        }}
                    >
                        <ButtonForSubscribe>
                            <Twitter
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    fill: '#4a1461',
                                }}
                            />
                            Twitter news and Updates
                        </ButtonForSubscribe>
                        <ButtonForSubscribe>
                            <Telegram
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    fill: '#4a1461',
                                }}
                            />
                            Telegram Channel
                        </ButtonForSubscribe>
                        <ButtonForSubscribe>
                            <MediumBlog
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    fill: '#4a1461',
                                }}
                            />
                            Medium Blog
                        </ButtonForSubscribe>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}