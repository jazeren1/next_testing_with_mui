import { AppProps } from 'node_modules/next/app';
import Layout from '../components/Layout';
import BasicMenu from '@/components/BasicMenu';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (


<Layout>
<Component {...pageProps} />
</Layout>
);

};

export default MyApp;
