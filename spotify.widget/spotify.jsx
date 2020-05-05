import { css } from 'uebersicht'

export const refreshFrequency = 5000
// export const command = 'spotify.widget/lib/spotify.sh'
export const command = 'osascript spotify.widget/lib/spotify.applescript'

export const className = `
  user-select: none;
  top: 1px;
  left: 112px;
  color: rgba(236, 239, 244, 0.4);
  font-family: FiraCode-Medium;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
`

const styles = {
  seperator: css`
    color: rgba(236, 239, 244, 0.2);
  `,

  artist: css`
    font-family: FiraCode-Light;
  `,
}

export const render = ({ output }) => {
  if (!output) {
    return null
  }

  const [track, artist] = output.split('\n')
  return (
    <div>
      {track}
      <span className={styles.seperator}> · </span>
      <span className={styles.artist}>{artist}</span>
    </div>
  )
}
