import { Composition } from 'remotion';
import { SaasShowcase } from './compositions/SaasShowcase';
import { BeforeAfter } from './compositions/BeforeAfter';
import { MetricHighlight } from './compositions/MetricHighlight';
import { TestimonialAd } from './compositions/TestimonialAd';
import { ProductDemo } from './compositions/ProductDemo';

export const RemotionRoot: React.FC = () => {
    return (
          <>
                <Composition
                          id="SaasShowcase"
                          component={SaasShowcase}
                          durationInFrames={300}
                          fps={30}
                          width={1080}
                          height={1080}
                          defaultProps={{
                                      clientName: 'Your SaaS',
                                      headline: 'Your App Deserves a Website That Converts',
                                      subheadline: 'We design high-converting SaaS sites in 14 days',
                                      screenshotUrl: '',
                                      ctaText: 'Book a Free Audit',
                                      metric: '+247%',
                                      metricLabel: 'conversion rate increase',
                          }}
                        />
                <Composition
                          id="BeforeAfter"
                          component={BeforeAfter}
                          durationInFrames={360}
                          fps={30}
                          width={1080}
                          height={1080}
                          defaultProps={{
                                      beforeImage: '',
                                      afterImage: '',
                                      clientName: 'ClientCo',
                                      metric: '3.2x more signups',
                          }}
                        />
                <Composition
                          id="MetricHighlight"
                          component={MetricHighlight}
                          durationInFrames={240}
                          fps={30}
                          width={1080}
                          height={1080}
                          defaultProps={{
                                      metricValue: 247,
                                      metricSuffix: '%',
                                      metricLabel: 'increase in trial signups',
                                      clientName: 'Acme SaaS',
                          }}
                        />
                <Composition
                          id="TestimonialAd"
                          component={TestimonialAd}
                          durationInFrames={300}
                          fps={30}
                          width={1080}
                          height={1080}
                          defaultProps={{
                                      quote: 'Pixel Forge redesigned our site and signups went through the roof.',
                                      author: 'Jane Smith',
                                      role: 'CEO, AcmeSaaS',
                                      metric: '+180% signups',
                          }}
                        />
                <Composition
                          id="ProductDemo"
                          component={ProductDemo}
                          durationInFrames={450}
                          fps={30}
                          width={1920}
                          height={1080}
                          defaultProps={{
                                      clientName: 'Demo SaaS',
                                      tagline: 'See it in action',
                                      screenshotUrls: [],
                                      features: ['Lightning Fast', 'Beautiful UI', 'Converts Like Crazy'],
                          }}
                        />
          </>>
        );
};</>
