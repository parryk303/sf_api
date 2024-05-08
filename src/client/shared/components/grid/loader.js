import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import Skeleton from '@mui/material/Skeleton';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import React from 'react';

const GridLoader = ({ pageSize = 5, columns: columnsLength = 0 }) => {
	if (pageSize === 0) {
		pageSize = 10;
	}

	const columns = new Array(columnsLength).fill('Loading');
	const rows = new Array(pageSize).fill('Rows Loading');
	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow key={`loader-head-row`}>
						{columns.map((column, columnIndex) => {
							return (
								<TableCell
									key={`loader-head-col-${columnIndex}`}
								>
									<Typography variant='h5'>
										<Skeleton />
									</Typography>
								</TableCell>
							);
						})}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, rowIndex) => {
						return (
							<TableRow key={`loader-row-${rowIndex}`}>
								{columns.map((column, columnIndex) => {
									return (
										<TableCell
											key={`loader-row-${rowIndex}-col-${columnIndex}`}
										>
											<div
												style={{
													width:
														rowIndex % 2 === 0
															? '100px'
															: columnIndex % 2 === 0
															? '50px'
															: 'auto',
												}}
											>
												<Skeleton />
											</div>
										</TableCell>
									);
								})}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default GridLoader;
