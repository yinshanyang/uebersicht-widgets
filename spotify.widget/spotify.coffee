command: 'spotify.widget/lib/spotify.sh'

refreshFrequency: 5000

render: (output) ->
  return output

style: """
  user-select: none
  top: 0px
  right: 72px
  color: #a89984
  font-family: 'Fira Code Medium'
  font-size: 12px
  line-height: 1em
  text-transform: uppercase
  -webkit-font-smoothing: antialiased
"""
