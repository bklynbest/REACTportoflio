import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PortfolioCard from "./PortfolioCard";

const styles = theme => ({
  Grid: {
    padding: 1
  }
});
const PortfolioGrid = () => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={6} sm={3}>
        <PortfolioCard />
      </Grid>

      <Grid item xs={6} sm={3}>
        <PortfolioCard />
      </Grid>

      <Grid item xs={6} sm={3}>
        <PortfolioCard />
      </Grid>
      <Grid item xs={6} sm={3}>
        <PortfolioCard />
      </Grid>
    </Grid>
  );
};

export default PortfolioGrid;
