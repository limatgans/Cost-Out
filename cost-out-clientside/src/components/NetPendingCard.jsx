import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
	depositContext: {
		flex: 1,
	},
});

export default function NetPendingCard() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Title>Net Pending</Title>
			<Typography component="p" variant="h4">
				- ₹ 3,024.00
			</Typography>
			<Typography color="textSecondary" className={classes.depositContext}>
				as on 15 March, 2019
			</Typography>
			<div>
				<Link color="primary" href="javascript:;">
					View balance
				</Link>
			</div>
		</React.Fragment>
	);
}