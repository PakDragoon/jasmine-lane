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
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Policy() {
  return (
    <Page title="Privacy Policy">
      <Container>
        <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
            Privacy Policy
          </Typography>
          <Box sx={{ width: '50vw' }}>
            <Typography sx={{ color: 'text.secondary', marginBottom: '1rem', textAlign: 'justify' }}>
              This Privacy Policy applies to www.jasminelane.com, which is owned and operated by Jasmine Lane. We are
              committed to protecting the privacy of our website visitors and users. This Privacy Policy outlines the
              types of personally identifiable information “Personal Information” that we may collect from our users,
              how we use this information, and the steps we take to protect it. ,,We may collect Personal Information
              from our users when they register for our services, sign up for e-mail newsletters, or participate in
              surveys or other activities. Personal Information we may collect includes name, address, telephone number,
              e-mail address, and other contact information. We may also collect demographic information such as age,
              gender, and preferences. ,,We may use the Personal Information we collect for a variety of purposes,
              including providing our users with access to our services, sending newsletters and other communications,
              responding to customer inquiries, and improving our website. We may also use the information to contact
              users, such as to notify them of changes to our services or to inform them of new products or services.
              ,,We take steps to protect the Personal Information we collect. We use industry-standard security measures
              to protect Personal Information against unauthorized access and use. We also limit access to Personal
              Information to those employees and contractors who need it to perform their job duties. We may share
              Personal Information with third parties in certain circumstances. For example, we may disclose information
              to third parties for the purpose of providing our services, conducting research and analytics, and for
              marketing and advertising purposes. ,,We may also collect anonymous information about our website
              visitors, such as IP addresses, browser types, and the pages visited on our website. This information is
              used to analyze trends and to improve our website. We may update this Privacy Policy from time to time. We
              will notify our users of any changes by posting an updated version of the Privacy Policy on our website.
              If you have any questions or concerns about this Privacy Policy, please contact us at info@JasmineLane.com
            </Typography>
          </Box>
          <Button to="/" size="large" variant="contained" component={RouterLink}>
            Go to Home
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  );
}
