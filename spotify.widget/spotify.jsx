import { css } from 'uebersicht'

export const refreshFrequency = 1000
export const command = 'osascript spotify.widget/lib/spotify.applescript'

export const className = `
  user-select: none;
  top: 0px;
  left: 112px;
  color: rgba(236, 239, 244, 0.4);
  font-family: Liga SFMono Nerd Font, JetBrains Mono, FiraCodeNerdFontComplete-Retina;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
`

const styles = {
  seperator: css`
    color: rgba(236, 239, 244, 0.2);
  `,

  track: css`
    font-weight: 600;
  `,

  artist: css`
    font-weight: 100;
  `,

  state: css`
    color: rgba(236, 239, 244, 1);
  `,
}

export const render = ({ output }) => {
  if (!output) {
    return null
  }

  const [track, artist, state] = output.split('\n')
  return (
    <div>
      <span className={styles.track}>{track}</span>
      <span className={styles.seperator}> · </span>
      <span className={styles.artist}>{artist}</span>
      {state === 'playing' && <span className={styles.state}> {'->'} </span>}
    </div>
  )
}
