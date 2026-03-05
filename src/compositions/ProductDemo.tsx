import { AbsoluteFill, useCurrentFrame, spring, useVideoConfig, interpolate, Sequence } from 'remotion';
import { brand } from '../styles/brand';

type Props = {
    clientName: string;
    tagline: string;
    screenshotUrls: string[];
    features: string[];
};

export const ProductDemo: React.FC<Props> = ({ clientName, tagline, features }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleSpring = spring({ frame, fps, config: { damping: 12 } });

    return (
          <AbsoluteFill style={{
                  background: brand.colors.backgroundDark,
                  fontFamily: brand.fonts.heading,
                  overflow: 'hidden',
          }}>
            {/* Background gradient orbs */}
                  <div style={{
                    position: 'absolute', width: 800, height: 800, borderRadius: '50%',
                    background: `radial-gradient(circle, ${brand.colors.primary}22, transparent)`,
                    top: -400, left: -200,
          }} />
                  <div style={{
                    position: 'absolute', width: 600, height: 600, borderRadius: '50%',
                    background: `radial-gradient(circle, ${brand.colors.accent}15, transparent)`,
                    bottom: -300, right: -100,
          }} />

            {/* Title */}
                  <Sequence from={0}>
                            <div style={{
                      position: 'absolute', top: 80, left: 80, right: 80,
                      opacity: titleSpring,
                      transform: `translateY(${interpolate(titleSpring, [0, 1], [40, 0])}px)`,
          }}>
                                        <div style={{
                        fontSize: 64, fontWeight: 700,
                        background: brand.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
          }}>
                                          {clientName}
                                        </div>div>
                                        <div style={{ fontSize: 28, color: brand.colors.muted, marginTop: 8 }}>
                                          {tagline}
                                        </div>div>
                            </div>div>
                  </Sequence>Sequence>

            {/* Feature pills */}
                  <Sequence from={60}>
                            <div style={{
                      position: 'absolute', top: 260, left: 80,
                      display: 'flex', gap: 16, flexWrap: 'wrap',
          }}>
                              {features.map((feature, i) => {
                        const featureSpring = spring({
                                        frame: frame - 60 - i * 15,
                                        fps,
                                        config: { damping: 12 },
                        });
                        return (
                                        <div key={i} style={{
                                                          background: `${brand.colors.primary}22`,
                                                          border: `1px solid ${brand.colors.primary}44`,
                                                          color: brand.colors.accent,
                                                          padding: '12px 24px', borderRadius: 100,
                                                          fontSize: 20, fontWeight: 500,
                                                          opacity: featureSpring,
                                                          transform: `translateX(${interpolate(featureSpring, [0, 1], [30, 0])}px)`,
                                        }}>
                                          {feature}
                                        </div>div>
                                      );
          })}
                            </div>div>
                  </Sequence>Sequence>

            {/* Browser mockup area */}
                  <Sequence from={45}>
                            <div style={{
                      position: 'absolute', top: 360, left: 80, right: 80, bottom: 80,
                      opacity: spring({ frame: frame - 45, fps, config: { damping: 15 } }),
                      transform: `translateY(${interpolate(
                                    spring({ frame: frame - 45, fps, config: { damping: 15 } }),
                                    [0, 1], [60, 0]
                                  )}px)`,
          }}>
                                        <div style={{
                        background: '#1E293B', borderRadius: '12px 12px 0 0',
                        padding: '10px 16px', display: 'flex', gap: 8, alignItems: 'center',
          }}>
                                                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: brand.colors.danger }} />
                                                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: brand.colors.warning }} />
                                                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: brand.colors.success }} />
                                                      <div style={{
                          flex: 1, background: brand.colors.backgroundDark, borderRadius: 6,
                          padding: '4px 12px', fontSize: 12, color: brand.colors.muted, marginLeft: 12,
          }}>
                                                                      app.{clientName.toLowerCase().replace(/\s/g, '')}.com
                                                      </div>div>
                                        </div>div>
                                        <div style={{
                        background: brand.colors.background, flex: 1, height: '100%',
                        borderRadius: '0 0 12px 12px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
                                                      <div style={{ color: brand.colors.muted, fontSize: 24 }}>
                                                                      [ Product Screenshots Cycle Here ]
                                                      </div>div>
                                        </div>div>
                            </div>div>
                  </Sequence>Sequence>

            {/* Watermark */}
                  <div style={{
                    position: 'absolute', bottom: 20, right: 40,
                    fontSize: 14, color: '#475569', fontWeight: 600, letterSpacing: 2,
          }}>
                            PIXEL FORGE STUDIO
                  </div>div>
          </AbsoluteFill>AbsoluteFill>
        );
};
