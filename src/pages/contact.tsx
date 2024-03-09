import * as React from 'react';
import Container from 'node_modules/@mui/material/Container';
import Typography from 'node_modules/@mui/material/Typography';
import Box from 'node_modules/@mui/material/Box';
import Button from 'node_modules/@mui/material/Button';
import NextLink from 'node_modules/next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';

export default function Contact() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Box sx={{ maxWidth: 'sm' }}>
          <Button variant="contained" component={NextLink} href="/">
            Go to the home page
          </Button>
        </Box>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
