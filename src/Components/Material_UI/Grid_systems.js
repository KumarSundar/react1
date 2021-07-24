import React, { Component } from 'react'
import { Grid,Box, CardContent ,Card, CardHeader, Button,CardActions} from "@material-ui/core"
export class Grid_systems extends Component {
  render() {
    return (
      <div>
        <Grid container style={{ border: "3px solid red" }}>
          <Grid item xs={12} md={6} lg={4} >
            {/* <Box boxShadow={3} m={2} p={3}>
              The responsive grid focuses on consistent spacing widths, rather than column width. Material Design margins and columns follow an 8px square baseline grid. The spacing property is an integer between 0 and 10 inclusive. By default, the spacing between two grid items follows a linear function: output(spacing) = spacing * 8px, e.g. spacing={2} creates a 16px wide gap.
            </Box> */}
            <Card>
            <CardHeader
              title="card one"
            />
              <CardContent>
              The responsive grid focuses on consistent spacing widths, rather than column width. Material Design margins and columns follow an 8px square baseline grid. The spacing property is an integer between 0 and 10 inclusive. By default, the spacing between two grid items follows a linear function: output(spacing) = spacing * 8px, e.g. spacing={2} creates a 16px wide gap.
              </CardContent>
              <CardActions>
                <Button size="medium" color="primary" variant="contained">Read More</Button>
              </CardActions>

            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4} >
          <Box boxShadow={3} m={2} p={3}>
              The responsive grid focuses on consistent spacing widths, rather than column width. Material Design margins and columns follow an 8px square baseline grid. The spacing property is an integer between 0 and 10 inclusive. By default, the spacing between two grid items follows a linear function: output(spacing) = spacing * 8px, e.g. spacing={2} creates a 16px wide gap.
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4} >
          <Box boxShadow={3} m={2} p={3}>
              The responsive grid focuses on consistent spacing widths, rather than column width. Material Design margins and columns follow an 8px square baseline grid. The spacing property is an integer between 0 and 10 inclusive. By default, the spacing between two grid items follows a linear function: output(spacing) = spacing * 8px, e.g. spacing={2} creates a 16px wide gap.
            </Box>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Grid_systems
