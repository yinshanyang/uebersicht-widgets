import { css } from 'uebersicht'

export const refreshFrequency = 60 * 1000
export const command = ':' // noop

export const className = `
  user-select: none;
  bottom: 0px;
  left: 16px;
  color: rgba(236, 239, 244, 1);
  font-family: Liga SFMono Nerd Font, JetBrains Mono, FiraCodeNerdFontComplete-Retina;
  font-size: 12px;
  line-height: 16px;
`

const styles = {
  time: css`
    display: inline-block;
    margin-right: 2em;
  `,
  seperatorColon: css`
    position: relative;
    top: -1px;
    color: rgba(236, 239, 244, 0.2);
  `,
}

export const render = () => {
  const times = ['Europe/Warsaw', 'Asia/Calcutta', 'Asia/Singapore'].map(
    (timeZone) =>
      new Date()
        .toLocaleString([], {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
        .split(':')
  )
  return times.map(([hour, minute], index) => (
    <span key={index} className={styles.time}>
      {hour}
      <span className={styles.seperatorColon}>:</span>
      {minute}
    </span>
  ))
}
