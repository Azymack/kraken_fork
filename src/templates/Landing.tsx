import { Meta } from '@/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';

import { Article } from './Article';
import { Footer } from './Footer';
import { Header } from './Header';

const Landing = () => (
  <div className="text-primary-300">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <div className="relative z-10"></div>
    <div className="flex flex-col bg-purple"></div>
    <Header />
    <Article />
    <Footer />
  </div>
);

export { Landing };
