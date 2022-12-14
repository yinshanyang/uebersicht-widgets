import { css } from 'uebersicht'

export const refreshFrequency = 60 * 1000
export const command = ':' // noop

export const className = `
  user-select: none;
  top: 0px;
  left: 16px;
  color: rgba(236, 239, 244, 1);
  font-family: Liga SFMono Nerd Font, JetBrains Mono, FiraCodeNerdFontComplete-Retina;
  font-size: 12px;
  line-height: 16px;
`

const styles = {
  seperator: css`
    position: relative;
    color: rgba(236, 239, 244, 0.2);
  `,
  seperatorColon: css`
    position: relative;
    top: -1px;
    color: rgba(236, 239, 244, 0.2);
  `,
}

export const render = ({ output }) => {
  const date = new Date().toLocaleString([], {
    month: '2-digit',
    day: '2-digit',
  })
  const time = new Date().toLocaleString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  const [day, month] = date.split('/')
  const [hour, minute] = time.split(':')
  return (
    <div>
      {month}
      <span className={styles.seperator}>-</span>
      {day}
      <span className={styles.seperator}>T</span>
      {hour}
      <span className={styles.seperatorColon}>:</span>
      {minute}
    </div>
  )
}
