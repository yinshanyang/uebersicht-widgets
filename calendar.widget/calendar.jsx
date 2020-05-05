import { css } from 'uebersicht'

export const refreshFrequency = 15 * 60 * 1000
export const command = 'calendar.widget/lib/get.sh'

export const className = `
  user-select: none;
  top: 24px;
  left: 16px;
`

const styles = {
  calendar: css`
    font-family: FiraCode-Medium;
    color: rgba(236, 239, 244, 0.2);
    font-size: 12px;
    line-height: 24px;
  `,
  cell: css`
    position: absolute;
    height: 24px;
    text-align: right;
    font-family: FiraCode-Medium;
    color: rgba(236, 239, 244, 0.2);
    font-size: 12px;
    line-height: 24px;
  `,
}

export const render = ({ output }) => {
  if (!output) {
    return null
  }

  const parts = output.split('***').map((d) => d.trim())

  // find events
  const events = output
    .split('\n')
    .filter((d) => d)
    .map((d) => d.split(':')[1])
    .filter((d) => d)
    .map((d) => d.slice(6, 8))
    .map((d) => d.replace(/^0/, ''))
    .reduce((memo, d) => ({ ...memo, [d]: true }), {})

  // find today
  const today = new Date().getDate().toString()

  // populate cells
  const calendar = parts[1].split('\n').slice(2).join('\n')
  const pad = ~~(calendar.indexOf('1') / 3)
  const dates = calendar
    .replace(/\s+/g, ' ')
    .replace(/((?![\s0-9]).)*/g, '')
    .trim()
    .split(' ')
    .filter((d) => d)
  const cells = [...Array(pad).fill(-1), ...dates].map((d) => ({
    date: d,
    today: d === today,
    event: events[d],
  }))

  return (
    <pre className={styles.calendar}>
      {cells.map(({ date, today, event }, index) => {
        const text = date === -1 ? '  ' : date.padStart(2, '0')
        const spacing = ' '
        const newline = (index + 1) % 7 === 0 ? '\n' : ''
        const el =
          today || event ? (
            <span
              style={{
                fontFamily: today ? 'FiraCode-Bold' : '',
                color: today ? '#eceff4' : event ? '#81a1c1' : '',
                textDecoration: today && event ? 'underline' : '',
              }}
            >
              {text}
            </span>
          ) : (
            text
          )
        return [el, spacing, newline]
      })}
    </pre>
  )
}
