import styled from "@emotion/styled";
import {Button, Typography} from "@mui/material";
import Link from "next/link";

export const CustomButton = styled(props => {
    const {sx= {}, ...other} = props;
    return <Button {...other}/>
})(({sx}) => {
    return {
        display: 'inline-flex',
        columnGap: '5px',
        backgroundColor: '#62277d',
        '&:hover': {
            backgroundColor: '#62277d',
        },
        paddingLeft: '10px',
        paddingRight: '10px',
        borderRadius: '10px',
        color: 'white',
        ...sx,
    }
});


export const LogoText = styled(props => {
    const {href, ...other} = props;
    return <Link href={href} {...other}/>
})(() => {
    return {
        fontSize: '24px',
        fontWeight: 600,
        textDecoration: 'none',
        color: '#491361',
    }
});
export const LogoDot = styled(props => {
    return <span {...props}/>
})(() => {
    return {
        color: '#f67924',
    }
});

export const CustomTypography = styled(props => {
    const {sx, variant, paragraph = false, ...other} = props;
    return <Typography variant={variant} paragraph={paragraph} {...other}/>
})(({sx}) => {
    return {
        fontFamily: "Montserrat, sans-serif",
        color: '#4c4450',
        ...sx
    }
});

export const TitleAnchor = styled(props => {
    const {href, ...other} = props;
    return <a href={href} {...other}/>
})(() => {
    return {
        textDecoration: 'none',
        color: '#584f5b',
    }
});

export const WrapperAnchor = styled(props => {
    return <li {...props}/>
})(() => {
    return {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px 5px',
        width: 'auto',
        height: '30px',
        '&:hover': {
            backgroundColor: '#e9e3ec',
            borderRadius: '20px',
        },
    }
})