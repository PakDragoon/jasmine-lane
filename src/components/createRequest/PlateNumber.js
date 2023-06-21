import { styled } from '@mui/material/styles';
import { TextField, Autocomplete, Grid, Paper } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
// eslint-disable-next-line
export default function PlateNumber ({ xs, id, label, options, change }) {
    return (
        <Grid item xs={xs}>
          <Item style={{background:'transparent'}}>
            <Autocomplete
              disablePortal
              onChange={(event, newValue) => {
                change(newValue)
              }}
              id={id}
              options={options}
              sx={{ width: '100%' }}
              renderInput={(params) => <TextField {...params} label={label} />}
            />
          </Item>
        </Grid>
    )
}