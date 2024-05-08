
import React, { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import { Grid } from '@client/shared/components';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import axios from 'axios';

const SmartSheetView = ({
  // isAdmin,
  // isCustomer,
  // columnConfig = [],
  // entries = [],
  // totalEntries = 0,
  // order = null,
  // orderBy = null,
  // handleLoadMore = noop,
  // handleSorting = noop,
}) => {
  // const renderLoadMoreLoader = () => {
  //   return [...new Array(1)].map(() => <Skeleton height="42px" />);
  // };

  const [get, setGet] = useState(true);
  const [data, setData] = useState();

  // useEffect(() => {

  //   const setDocumentation = async () => {
  //     try {
  //       const { data } = await axios.get(`${process.env.REACT_APP_APP_URL}getDocumentation`);
  //       setData(data);
  //       setGet(false);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };
  //   if (get) {
  //     setDocumentation()
  //   } else {
  //     setGet(false)
  //   }
  // }, [data, get]);


  return (
    data &&
    <Container>

      <Box sx={{ position: 'absolute', left: '40vw', top: '260px', textAlign: 'center', width: '60vw', backgroundColor: 'blue' }}>
        <Typography sx={{ fontFamily: "inter_bold" }} variant="h5">
          SmartSheet
        </Typography>
        {/* <InfiniteScroll
          dataLength={entries.length}
          next={handleLoadMore}
          hasMore={entries.length < totalEntries}
          loader={renderLoadMoreLoader()}
          height={560}
          endMessage={
            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                fontFamily: "inter_bold",
              }}
            >
              {!totalEntries ? "" : "You have seen it all!"}
            </Typography>
          }
        >
          <Grid
            columns={columnConfig}
            rows={entries}
            totalRows={totalEntries}
            hasSelection={false}
            hasPagination={false}
            onSortChange={handleSorting}
            order={order}
            orderBy={orderBy}
          />
        </InfiniteScroll> */}
      </Box>

    </Container>
  );
};

export default SmartSheetView;