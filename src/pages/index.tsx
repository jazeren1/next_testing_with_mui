import * as React from 'react';
import Container from 'node_modules/@mui/material/Container';
import Typography from 'node_modules/@mui/material/Typography';
import Box from 'node_modules/@mui/material/Box';
import Link from 'node_modules/@mui/material/Link';
import NextLink from 'node_modules/next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';

export default function Home() {
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
          Material UI - Next.js App Router example in TypeScript
        </Typography>
        <Link href="/about" color="secondary" component={NextLink}>
          Go to the about page
        </Link>
        <Link href="/contact" color="secondary" component={NextLink}>
          Go to the contact page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
