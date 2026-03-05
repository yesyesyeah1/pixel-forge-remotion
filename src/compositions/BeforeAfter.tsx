import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Img, Sequence } from 'remotion';
import { brand } from '../styles/brand';

type Props = {
    beforeImage: string;
    afterImage: string;
    clientName: string;
    metric: string;
};

export const BeforeAfter: React.FC<Props> = ({ beforeImage, afterImage, clientName, metric }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const wipeProgress = interpolate(frame, [90, 180], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
    const badgeSpring = spring({ frame: frame - 200, fps, config: { damping: 10 } });
    const titleSpring = spring({ frame, fps, config: { damping: 12 } });

    return (
          <AbsoluteFill style={{
                  background: brand.colors.backgroundDark,
                  fontFamily: brand.fonts.heading,
          }}>
                  <Sequence from={0}>
                            <div style={{
                      position: 'absolute', top: 40, left: 0, right: 0,
                      textAlign: 'center', zIndex: 10,
                      opacity: titleSpring,
                      transform: `translateY(${interpolate(titleSpring, [0, 1], [20, 0])}px)`,
          }}>
                                        <div style={{ fontSize: 20, color: brand.colors.muted, textTransform: 'uppercase', letterSpacing: 3 }}>
                                          {clientName} Redesign
                                        </div>div>
                            </div>div>
                  </Sequence>Sequence>

                  <div style={{
                    position: 'absolute', top: 100, left: 40, right: 40, bottom: 140,
                    borderRadius: 16, overflow: 'hidden',
          }}>
                            <div style={{
                      width: '100%', height: '100%',
                      background: '#1E293B',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
                              {beforeImage ? <Img src={beforeImage} style={{ width: '100%' }} /> : (
                        <div style={{ color: '#475569', fontSize: 24 }}>[ Before Screenshot ]</div>div>
                      )}
                            </div>div>

                            <div style={{
                      position: 'absolute', top: 0, left: 0, bottom: 0,
                      width: `${wipeProgress * 100}%`,
                      overflow: 'hidden',
                      borderRight: `3px solid ${brand.colors.accent}`,
          }}>
                                        <div style={{
                        width: 1000, height: '100%',
                        background: '#0F172A',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
                                          {afterImage ? <Img src={afterImage} style={{ width: '100%' }} /> : (
                          <div style={{ color: brand.colors.accent, fontSize: 24 }}>[ After Screenshot ]</div>div>
                        )}
                                        </div>div>
                            </div>div>

                            <div style={{
                      position: 'absolute', bottom: 16, left: 16,
                      background: `${brand.colors.danger}99`, color: 'white', padding: '6px 16px',
                      borderRadius: 8, fontSize: 16, fontWeight: 600,
          }}>Before</div>div>

                    {wipeProgress > 0.5 && (
                      <div style={{
                                    position: 'absolute', bottom: 16, right: 16,
                                    background: `${brand.colors.success}99`, color: 'white', padding: '6px 16px',
                                    borderRadius: 8, fontSize: 16, fontWeight: 600,
                      }}>After</div>div>
                    )}
                  </div>div>

                  <Sequence from={200}>
                            <div style={{
                      position: 'absolute', bottom: 40, left: 0, right: 0,
                      display: 'flex', justifyContent: 'center',
                      transform: `scale(${badgeSpring})`,
          }}>
                                        <div style={{
                        background: brand.gradient,
                        padding: '14px 36px', borderRadius: 12,
                        fontSize: 28, fontWeight: 700, color: 'white',
                        boxShadow: brand.shadow.primary,
          }}>
                                          {metric}
                                        </div>div>
                            </div>div>
                  </Sequence>Sequence>
          </AbsoluteFill>AbsoluteFill>
        );
};
