import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0)
}));

const terms = [
    "Users of this website must be at least 18 years of age.",
    "All information provided by the user must be accurate and up-to-date.",
    "Users must not use the website for any illegal activities.",
    "All information provided by the user for analysis must be their own or collected with the permission of the data owner.",
    "The user is responsible for any actions taken on the basis of the analysis provided by this website.",
    "Users must not share any confidential information or data that could compromise the security of the website.",
    "The website is not liable for any errors or omissions in the analysis provided.",
    "You must not copy, reproduce, modify, distribute or make available any part of this website for any purpose without the prior written consent of the website owner.",
    "You must not use any automated system or software to extract information from this website for any purpose without the prior written consent of the website owner.",
    "The website may collect anonymized data related to the usage of the website.",
    "The website may be updated, modified or discontinued at any time.",
    "We may suspend or terminate your access to this website at any time without prior notice.",
    "By using this website, the user agrees to be bound by these terms and conditions.",
    "We may take any legal action we deem necessary against any person or entity that breaches these Terms and Conditions of Use."
]

// ----------------------------------------------------------------------

export default function Terms() {
  return (
    <Page title="Terms & Condition">
      <Container>
        <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
            Terms & Conditions
          </Typography>

          <Box sx={{textAlign: 'left', width: '45vw', padding: '1rem'}}>
            {terms.map((text, index) => {
                return (
                    <Typography key={index} sx={{ color: 'text.secondary', marginBottom: '0.75rem' }}>
                        {index+1}.{"\xa0\xa0"}{text}
                    </Typography>
                )
            })}
          </Box>          

          <Button to="/" size="large" variant="contained" component={RouterLink}>
            Go to Home
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  );
}
