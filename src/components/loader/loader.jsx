import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import "./loader.css"

const data = [
 
];

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid container wrap="wrap">
      {(loading ? Array.from(new Array(6)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 380, marginRight: 0.5, my: 5,mx:4 }}>
          <Skeleton variant="rectangular" width={380} height={248} />
          {item ? (
            <Box sx={{ pr: 2 }}>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function YouTube() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media loading />
      <Media />
    </Box>
  );
}
