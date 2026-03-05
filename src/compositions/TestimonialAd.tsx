import { AbsoluteFill, useCurrentFrame, spring, useVideoConfig, interpolate, Sequence } from 'remotion';
import { brand } from '../styles/brand';

type Props = {
    quote: string;
    author: string;
    role: string;
    metric: string;
};

export const TestimonialAd: React.FC<Props> = ({ quote, author, role, metric }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const quoteSpring = spring({ frame: frame - 15, fps, config: { damping: 12 } });
    const authorSpring = spring({ frame: frame - 60, fps, config: { damping: 12 } });
    const metricSpring = spring({ frame: frame - 120, fps, config: { damping: 10 } });

    return (
          <AbsoluteFill style={{
                  background: brand.colors.backgroundDark,
                  fontFamily: brand.fonts.heading,
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  padding: 80,
          }}>
                  <div style={{
                    position: 'absolute', top: 120, left: 60,
                    fontSize: 200, color: `${brand.colors.primary}22`,
                    fontFamily: 'Georgia', lineHeight: 1,
          }}>&ldquo;</div>div>

                  <Sequence from={15}>
                            <div style={{
                      fontSize: 36, color: brand.colors.textLight,
                      lineHeight: 1.5, textAlign: 'center',
                      fontStyle: 'italic', maxWidth: 800,
                      opacity: quoteSpring,
                      transform: `translateY(${interpolate(quoteSpring, [0, 1], [30, 0])}px)`,
          }}>
                                        &ldquo;{quote}&rdquo;
                            </div>div>
                  </Sequence>Sequence>

                  <Sequence from={60}>
                            <div style={{
                      marginTop: 40, textAlign: 'center',
                      opacity: authorSpring,
          }}>
                                        <div style={{ fontSize: 22, fontWeight: 600, color: brand.colors.accent }}>{author}</div>div>
                                        <div style={{ fontSize: 16, color: brand.colors.muted, marginTop: 4 }}>{role}</div>div>
                            </div>div>
                  </Sequence>Sequence>

                  <Sequence from={120}>
                            <div style={{
                      marginTop: 50,
                      transform: `scale(${metricSpring})`,
                      background: brand.gradient,
                      padding: '16px 40px', borderRadius: 12,
                      boxShadow: brand.shadow.primary,
          }}>
                                        <div style={{ fontSize: 32, fontWeight: 700, color: 'white' }}>{metric}</div>div>
                            </div>div>
                  </Sequence>Sequence>

                  <div style={{
                    position: 'absolute', bottom: 30,
                    fontSize: 14, color: '#475569', fontWeight: 600, letterSpacing: 2,
          }}>
                            PIXEL FORGE STUDIO
                  </div>div>
          </AbsoluteFill>AbsoluteFill>
        );
};
