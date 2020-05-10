import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 100,
  },
  title: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    fontSize: '11px',
    fontWeight: 'bold',
  },
}))

export default useStyles
