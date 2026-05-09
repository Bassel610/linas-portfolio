import { Box } from '@mui/material';
import HeroSlider from './HeroSlider';
import WorkShowcase from './WorkShowcase';
import AboutPreview from './AboutPreview';
import SectionTitle from '../components/SectionTitle';
import ImageCard from '../components/image/ImageCard';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';
import { useMainContext } from '../context';
import { SEO_HOME } from '../constants/seo';
import { SECTION_TITLES } from '../constants/pageContent';

export default function HomePage() {
  const { img10 } = useMainContext();
  return (
    <Box>
      <SEO {...SEO_HOME} />
      <AnimatedSection animation="fadeIn"><HeroSlider /></AnimatedSection>
      <AnimatedSection animation="fadeInUp" delay={200}>
        <SectionTitle title={SECTION_TITLES.ourWork} />
        <WorkShowcase />
      </AnimatedSection>
      <AnimatedSection animation="fadeInUp" delay={400}>
        <SectionTitle title={SECTION_TITLES.aboutMe} />
        <AboutPreview />
      </AnimatedSection>
      <AnimatedSection animation="scaleIn" delay={600}>
        <ImageCard src={img10} margin="40px auto" width="80%" height="400px" alt="Interior design showcase" />
      </AnimatedSection>
    </Box>
  );
}
