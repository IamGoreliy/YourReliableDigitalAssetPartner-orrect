import {Box, Container} from "@mui/material";
import Image from "next/image";
import teamImgHero from '../../../public/images/titlePhoto.png';
import {CustomButton, CustomTypography} from "@/component/StylingComponent";
import {Linkedin} from "../../../public/images/svgIcon/getSvg";

export const MeetTheTeam = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                padding: '80px 0px',
                backgroundColor: 'rgba(249,245,251,1)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '100%',
                    backgroundImage: `url(./images/humanBrain.jpeg)`,
                    backgroundSize: '600px',
                    backgroundRepeat: 'no-repeat',
                    // backgroundPosition: 'top center',
                    // filter: 'blur(10px)',
                    zIndex: -1,
                    borderRadius: '40%'
                },
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
                        mt: '50px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        rowGap: '30px',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '80px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '850px',
                            height: '70%',
                            backgroundImage: `url(./images/humanBrain.jpeg)`,
                            backgroundColor: 'rgba(88, 31, 114, 0.4)',
                            backgroundSize: '900px',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '-45px -30px',
                            // filter: 'blur(5px)',
                            opacity: 0.5,
                            zIndex: 0,
                            borderRadius: '50%',
                            boxShadow: '0px 0px 1000px 200px rgba(88, 31, 114, 0.3), inset 0px 0px 100px 0px rgba(88, 31, 114, 0.6)',
                        },
                    }}
                >
                    <CustomTypography
                        variant='h2'
                        sx={{
                            position: 'relative',
                            fontWeight: 600,
                            zIndex: 1
                        }}
                    >
                        Meet The Team
                    </CustomTypography>
                    <CustomTypography
                        variant='subtitle2'
                        sx={{
                            position: 'relative',
                            zIndex: 1,
                        }}
                    >
                        The industry`s most talented people work for prime.cc
                    </CustomTypography>
                    <CustomButton
                        variant={'contained'}
                    >
                        <Linkedin
                            style={{
                                position: 'relative',
                                width: '25px',
                                height: '25px',
                                fill: 'white',
                                zIndex: 1,
                            }}
                        />
                        Our Linkedin Page
                    </CustomButton>
                </Box>
                <Box
                    sx={{
                        mt: '50px',
                    }}
                >
                    <Box>
                        <Image
                            src='./images/titlePhoto.png'
                            alt=''
                            width={1123}
                            height={476}
                            style={{
                                width: '100%',
                                height: '500px',
                                borderRadius: '15px',
                                position: 'relative',
                                zIndex: 1,
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: '20px',
                            columnGap: '20px',
                        }}
                    >
                        <Box
                            sx={{
                                width: '160px',
                                height: '90px',
                                borderRadius: '100px',
                                backgroundImage: 'url(./images/firstImgMeetTheTeam.png)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '170px',
                                backgroundPosition: 'center'
                            }}
                        >

                        </Box>
                        <Box
                            sx={{
                                width: '160px',
                                height: '90px',
                                borderRadius: '100px',
                                backgroundImage: 'url(./images/secondImgMeetTheTeam.png)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '170px',
                                backgroundPosition: 'center'
                            }}
                        >

                        </Box>
                        <Box
                            sx={{
                                width: '160px',
                                height: '90px',
                                borderRadius: '100px',
                                backgroundImage: 'url(./images/treeImgMeetTheTeam.png)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '180px',
                                backgroundPosition: 'center',
                                padding: '4px',
                                border: '2px solid #5e2378',
                            }}
                        >

                        </Box>
                        <Box
                            sx={{
                                width: '160px',
                                height: '90px',
                                borderRadius: '100px',
                                backgroundImage: 'url(./images/fourImgMeetTheTeam.png)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '170px',
                                backgroundPosition: 'center'
                            }}
                        >

                        </Box>
                        <Box
                            sx={{
                                width: '160px',
                                height: '90px',
                                borderRadius: '100px',
                                backgroundImage: 'url(./images/fiveImgMeetTheTeam.png)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '170px',
                                backgroundPosition: 'center'
                            }}
                        >

                        </Box>

                    </Box>
                </Box>
            </Container>
        </Box>
    )
}