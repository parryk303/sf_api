import { useCallback, useContext, useEffect, useState } from 'react';
// import { AppContext } from '@client/shared/contexts';

import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { toast } from 'react-toastify';
import MondayView from './view';
import Service from './service';

// const DEFAULT_PAGE_SIZE = 10;
// const defaultState = {
//   entries: [],
//   totalEntries: 0,
//   pageSize: DEFAULT_PAGE_SIZE,
//   filters: [],
//   searchFilter: [],
//   order: null,
//   orderBy: null,
// };

const Monday = () => {
  // const { appData } = useContext(AppContext);
  // const isCustomer = appData?.userData?.isCustomer;
  // const isAdmin = appData?.userData?.isAdmin;

  // const [state, setState] = useState(defaultState);

  // const fetchEntries = useCallback(
  //   async (
  //     pageSize = DEFAULT_PAGE_SIZE,
  //     filters = [],
  //     searchFilter = [],
  //     order = null,
  //     orderBy = ""
  //   ) => {
  //     const sortingOrder =
  //       order === "DESC" ? "-1" : order === "ASC" ? "1" : order;
  //     const queryString = queryStringBuilder(
  //       pageSize,
  //       0,
  //       searchFilter,
  //       filters,
  //       { field: orderBy, order: sortingOrder }
  //     );

  //     const { data, error } = await Service.get(queryString);
  //     if (error) {
  //       toast.error(Array.isArray(error) ? error[0]?.message : error);
  //     } else {
  //       setState((prevState) => ({
  //         ...prevState,
  //         entries: data?.connectivityTypes || defaultState.entries,
  //         totalEntries: data?.count || defaultState.totalEntries,
  //       }));
  //     }
  //   },
  //   []
  // );

  // const handleLoadMore = () => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     pageSize: prevState.pageSize + DEFAULT_PAGE_SIZE,
  //   }));
  // };

  // const handleSorting = useCallback((fieldObj, order) => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     order,
  //     orderBy: order ? fieldObj.field || fieldObj.fieldName : null,
  //   }));
  // }, []);

  // let columnConfig = [
  //   {
  //     id: "name",
  //     label: "Connectivity Type",
  //     canSort: true,
  //     field: "name",
  //     render: (row) => {
  //       const accountId = row.rcAccountId ? `(${row.rcAccountId})` : "";
  //       return (
  //         <Tooltip
  //           title={row.name + "  " + accountId}
  //           placement="left"
  //           arrow
  //         >
  //           <Typography
  //             variant="body2"
  //             sx={{ fontFamily: "inter_semibold", cursor: "pointer" }}
  //           >
  //             {row.name + "  " + accountId}
  //           </Typography>
  //         </Tooltip>
  //       );
  //     },
  //   },
  //   {
  //     id: "description",
  //     label: "Description",
  //     canSort: true,
  //     field: "description",
  //     render: (row) => (
  //       // <Tooltip title={row.description} placement="top-start">
  //       <Typography
  //         variant="body2"
  //         sx={{ fontFamily: "inter_semibold", cursor: "pointer" }}
  //       >
  //         {row.description}
  //       </Typography>
  //       // </Tooltip>
  //     ),
  //   },
  //   {
  //     id: "usecase",
  //     label: "Usecase",
  //     canSort: true,
  //     field: "usecase",
  //     render: (row) => (
  //       // <Tooltip title={row.usecases} placement="top-start">
  //         <Typography
  //           variant="body2"
  //           sx={{ fontFamily: "inter_semibold", cursor: "pointer" }}
  //         >
  //           {row.usecase}
  //         </Typography>
  //       // </Tooltip>
  //     ),
  //   },
  // ];

  // if (isCustomer) {
  //   columnConfig = columnConfig.filter(
  //     (config) => config.id !== "customerName"
  //   );
  // }

  // useEffect(() => {
  //   fetchEntries(
  //     state.pageSize,
  //     state.filters,
  //     state.searchFilter,
  //     state.order,
  //     state.orderBy
  //   );
  // }, [
  //   state.pageSize,
  //   state.filters,
  //   state.order,
  //   state.orderBy,
  //   state.searchFilter,
  // ]);

  return (
    <MondayView
      // columnConfig={columnConfig}
      // entries={state.entries}
      // totalEntries={state.totalEntries}
      // order={state.order}
      // orderBy={state.orderBy}
      // isCustomer={isCustomer}
      // isAdmin={isAdmin}
      // handleLoadMore={handleLoadMore}
      // handleSorting={handleSorting}
    />
  );
};

export default Monday;