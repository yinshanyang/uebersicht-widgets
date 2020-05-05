import { css } from 'uebersicht'

export const refreshFrequency = 60 * 1000
export const command = 'date +%H%M'

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
    top: -1px;
    color: rgba(236, 239, 244, 0.2);
  `
}

export const render = ({ output }) => {
  const hours = output.slice(0, 2)
  const minutes = output.slice(2, 4)
  return (
    <div>
      {hours}
      <span className={styles.seperator}>:</span>
      {minutes}
    </div>
  )
}
