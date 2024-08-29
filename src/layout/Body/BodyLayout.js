import {Box} from "@mui/material";

const BodyLayout = ({children}) => {
    return (
        <Box
            sx={{
                minWidth: '1440px',
            }}
        >
            {children}
        </Box>
    )
}

export default BodyLayout;