import { AbsoluteFill, useCurrentFrame, spring, useVideoConfig, interpolate, Sequence } from 'remotion';
import { brand } from '../styles/brand';

type Props = {
    metricValue: number;
    metricSuffix: string;
    metricLabel: string;
    clientName: string;
};

export const MetricHighlight: React.FC<Props> = ({
    metricValue, metricSuffix, metricLabel, clientName,
}) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const counterProgress = interpolate(frame, [30, 120], [0, 1], { extrapolateRight: 'clamp' });
    const currentValue = Math.round(counterProgress * metricValue);
    const labelSpring = spring({ frame: frame - 60, fps, config: { damping: 12 } });
    const ctaSpring = spring({ frame: frame - 140, fps, config: { damping: 12 } });

    return (
          <AbsoluteFill style={{
                  background: brand.colors.backgroundDark,
                  fontFamily: brand.fonts.heading,
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
          }}>
                  <div style={{
                    width: 500, height: 500, borderRadius: '50%',
                    border: `4px solid ${brand.colors.primary}33`,
                    position: 'absolute',
                    transform: `rotate(${frame * 0.5}deg)`,
          }} />

                  <Sequence from={0}>
                            <div style={{ textAlign: 'center', position: 'absolute', top: 200, width: '100%' }}>
                                        <div style={{ fontSize: 18, color: brand.colors.muted, textTransform: 'uppercase', letterSpacing: 4 }}>
                                                      Results for {clientName}
                                        </div>div>
                            </div>div>
                  </Sequence>Sequence>

                  <Sequence from={30}>
                            <div style={{
                      position: 'absolute', top: 280, width: '100%', textAlign: 'center',
          }}>
                                        <div style={{
                        fontSize: 160, fontWeight: 700,
                        background: brand.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        lineHeight: 1,
          }}>
                                          {currentValue}{metricSuffix}
                                        </div>div>
                            </div>div>
                  </Sequence>Sequence>

                  <Sequence from={60}>
                            <div style={{
                      position: 'absolute', top: 500, width: '100%', textAlign: 'center',
                      opacity: labelSpring,
                      transform: `translateY(${interpolate(labelSpring, [0, 1], [20, 0])}px)`,
          }}>
                                        <div style={{ fontSize: 32, color: brand.colors.textLight }}>
                                          {metricLabel}
                                        </div>div>
                            </div>div>
                  </Sequence>Sequence>

                  <Sequence from={140}>
                            <div style={{
                      position: 'absolute', bottom: 150, width: '100%',
                      display: 'flex', justifyContent: 'center',
                      opacity: ctaSpring,
                      transform: `translateY(${interpolate(ctaSpring, [0, 1], [30, 0])}px)`,
          }}>
                                        <div style={{
                        background: brand.colors.primary,
                        color: 'white', fontSize: 24, fontWeight: 600,
                        padding: '16px 40px', borderRadius: 12,
                        boxShadow: brand.shadow.primary,
          }}>
                                                      Get Your Free Audit
                                        </div>div>
                            </div>div>
                  </Sequence>Sequence>

                  <div style={{
                    position: 'absolute', bottom: 30, fontSize: 14,
                    color: '#475569', fontWeight: 600, letterSpacing: 2,
          }}>
                            PIXEL FORGE STUDIO
                  </div>div>
          </AbsoluteFill>AbsoluteFill>
        );
};
