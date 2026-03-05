import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Img, Sequence } from 'remotion';
import { brand } from '../styles/brand';

type Props = {
    clientName: string;
    headline: string;
    subheadline: string;
    screenshotUrl: string;
    ctaText: string;
    metric: string;
    metricLabel: string;
};

export const SaasShowcase: React.FC<Props> = ({
    headline, subheadline, screenshotUrl, ctaText, metric, metricLabel,
}) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleSlide = spring({ frame, fps, config: { damping: 12 } });
    const mockupSlide = spring({ frame: frame - 30, fps, config: { damping: 15 } });
    const metricPop = spring({ frame: frame - 90, fps, config: { damping: 10 } });
    const ctaSlide = spring({ frame: frame - 150, fps, config: { damping: 12 } });
    const bgPulse = interpolate(frame, [0, 300], [0, 360]);

    return (
          <AbsoluteFill style={{
                  background: brand.colors.backgroundDark,
                  fontFamily: brand.fonts.heading,
                  overflow: 'hidden',
          }}>
            {/* Animated gradient orb */}
                  <div style={{
                    position: 'absolute',
                    width: 600, height: 600,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${brand.colors.primary}44, transparent)`,
                    top: -200, right: -200,
                    transform: `rotate(${bgPulse}deg)`,
          }} />

            {/* Headline */}
                  <Sequence from={0}>
                            <div style={{
                      position: 'absolute', top: 80, left: 60, right: 60,
                      transform: `translateY(${interpolate(titleSlide, [0, 1], [60, 0])}px)`,
                      opacity: titleSlide,
          }}>
                                        <div style={{
                        fontSize: 52, fontWeight: 700,
                        background: brand.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        lineHeight: 1.1,
          }}>
                                          {headline}
                                        </div>div>
                                        <div style={{
                        fontSize: 24, color: brand.colors.muted,
                        marginTop: 16,
          }}>
                                          {subheadline}
                                        </div>div>
                            </div>div>
                  </Sequence>Sequence>

            {/* Browser mockup with screenshot */}
                  <Sequence from={30}>
                            <div style={{
                      position: 'absolute', top: 280, left: 60, right: 60,
                      transform: `translateY(${interpolate(mockupSlide, [0, 1], [80, 0])}px) scale(${interpolate(mockupSlide, [0, 1], [0.9, 1])})`,
                      opacity: mockupSlide,
          }}>
                                        <div style={{
                        background: '#1E293B',
                        borderRadius: '12px 12px 0 0',
                        padding: '12px 16px',
                        display: 'flex', gap: 8, alignItems: 'center',
          }}>
                                                      <div style={{ width: 12, height: 12, borderRadius: '50%', background: brand.colors.danger }} />
                                                      <div style={{ width: 12, height: 12, borderRadius: '50%', background: brand.colors.warning }} />
                                                      <div style={{ width: 12, height: 12, borderRadius: '50%', background: brand.colors.success }} />
                                                      <div style={{
                          flex: 1, background: brand.colors.backgroundDark, borderRadius: 6,
                          padding: '6px 12px', fontSize: 13, color: brand.colors.muted,
                          marginLeft: 12,
          }}>
                                                                      yourapp.com
                                                      </div>div>
                                        </div>div>
                                        <div style={{
                        background: brand.colors.background,
                        height: 400,
                        borderRadius: '0 0 12px 12px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        overflow: 'hidden',
          }}>
                                          {screenshotUrl ? (
                          <Img src={screenshotUrl} style={{ width: '100%' }} />
                        ) : (
                          <div style={{ color: brand.colors.muted, fontSize: 18 }}>
                                            [ Client Website Screenshot ]
                          </div>div>
                        )}
                                        </div>div>
                            </div>div>
                  </Sequence>Sequence>

            {/* Metric badge */}
                  <Sequence from={90}>
                            <div style={{
                      position: 'absolute', bottom: 200, right: 80,
                      transform: `scale(${metricPop})`,
                      background: brand.gradient,
                      borderRadius: 16, padding: '20px 32px',
                      textAlign: 'center',
                      boxShadow: brand.shadow.primary,
          }}>
                                        <div style={{ fontSize: 48, fontWeight: 700, color: 'white' }}>
                                          {metric}
                                        </div>div>
                                        <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)' }}>
                                          {metricLabel}
                                        </div>div>
                            </div>div>
                  </Sequence>Sequence>

            {/* CTA */}
                  <Sequence from={150}>
                            <div style={{
                      position: 'absolute', bottom: 60, left: 60, right: 60,
                      display: 'flex', justifyContent: 'center',
                      transform: `translateY(${interpolate(ctaSlide, [0, 1], [40, 0])}px)`,
                      opacity: ctaSlide,
          }}>
                                        <div style={{
                        background: brand.colors.primary,
                        color: 'white', fontSize: 28, fontWeight: 600,
                        padding: '18px 48px', borderRadius: 12,
                        boxShadow: brand.shadow.primary,
          }}>
                                          {ctaText}
                                        </div>div>
                            </div>div>
                  </Sequence>Sequence>

                  <div style={{
                    position: 'absolute', bottom: 20, left: 60,
                    fontSize: 14, color: '#475569', fontWeight: 600,
                    letterSpacing: 2,
          }}>
                            PIXEL FORGE STUDIO
                  </div>div>
          </AbsoluteFill>AbsoluteFill>
        );
};
