import { Meta } from '@/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';

import { Article } from './Article';
import { Footer } from './Footer';
import { Header } from './Header';

const Landing = () => (
  <div className="text-primary-300">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <Article />
    <Footer />
  </div>
);

export { Landing };
