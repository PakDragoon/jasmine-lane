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
export default function SelecField ({ id, label, options, change }) {
    return (
        <Grid item xs={6}>
          <Item style={{background:'transparent'}}>
            <Autocomplete
              onChange={(event, newValue) => {
                change(newValue.value)
              }}
              disablePortal
              id={id}
              options={options}
              sx={{ width: '100%' }}
              renderInput={(params) => <TextField {...params} label={label} />}
            />
          </Item>
        </Grid>
    )
}