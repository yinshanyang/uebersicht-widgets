refreshFrequency: 60 * 1000

command: "date '+%H|%M'"

render: (output) -> """
  #{output}
"""

style: """
  user-select: none
  top: 0px
  right: 12px
  color: #a89984
  font-family: 'Fira Code Medium'
  font-size: 12px
  line-height: 1em
  -webkit-font-smoothing: antialiased
"""
