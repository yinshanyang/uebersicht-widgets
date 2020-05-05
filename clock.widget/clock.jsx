import { css } from 'uebersicht'

export const refreshFrequency = 60 * 1000
export const command = 'date +%m%d%H%M'

export const className = `
  user-select: none;
  top: 1px;
  left: 16px;
  color: rgba(236, 239, 244, 1);
  font-family: FiraCode-Medium;
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
  const month = output.slice(0, 2)
  const day = output.slice(2, 4)
  const hour = output.slice(4, 6)
  const minute = output.slice(6, 8)
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
