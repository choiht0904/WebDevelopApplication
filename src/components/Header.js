export default function Header(event) {
    return (
        <Box sx={{flexGrow: 1}} component={"header"}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" onClick={handleLogo}>
                        개가좋다
                    </Typography>
                    <Button color="inherit" sx={{marginLeft: 'auto'}} onClick={handleProduct}>Product</Button>
                    {nav}
                </Toolbar>
            </AppBar>
        </Box>
    );
}*/