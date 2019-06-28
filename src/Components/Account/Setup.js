import React from 'react';
import { Grid, Button } from '@material-ui/core';
import Flash from 'react-reveal/Flash';
function Setup() {
  return (
    <section>
      <Grid container style={{ margin: '50px 0px' }}>
        <Grid item lg={3} />
        <Grid item lg={6}>
          <section className="setup-section">
            <Grid container>
              <Grid item lg={12}>
                <h2 style={{ textAlign: 'center', marginTop: '100px' }}>
                  Welcome to one of the most active crypto exchanges in the
                  world
                </h2>
                <Flash>
                  <Button
                    size="large"
                    variant="contained"
                    style={{
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginTop: '50px',
                      background: '#23cc89',
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  >
                    {' '}
                    Set up Trading Account{' '}
                  </Button>
                </Flash>
                <Button
                  size="large"
                  style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '20px',
                    color: '#303f4d',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}
                >
                  {' '}
                  Already a memner ?{' '}
                  <span style={{ color: '#23cc89' }}> Sign in </span>
                </Button>
              </Grid>
            </Grid>{' '}
          </section>
        </Grid>
        <Grid item lg={3} />
      </Grid>
    </section>
  );
}
export default Setup;
