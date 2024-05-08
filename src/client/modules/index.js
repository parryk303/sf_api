import { useCallback, useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DefaultLayout } from '@client/shared/components';
import { Grid } from '@client/shared/components';
// import { AppService } from '@client/shared/services';
// import { AppContext } from '@client/shared/contexts';
import Monday from './monday';
import SmartSheet from './smartsheet';
import AccessDenied from './access-denied';
import Box from '@mui/material/Box';
import { Typography, Tooltip } from '@mui/material';

const App = () => {
  // const { setAppData, appData } = useContext(AppContext);
  // const fetchUserData = useCallback(async () => {
  //   const { data, error } = await AppService.getUserDetails();
  //   return error ? {} : data?.user || {};
  // }, []);

  // const fetchVersion = useCallback(async () => {
  //   const { data, error } = await AppService.getVersion();
  //   return error ? {} : data || {};
  // }, []);

  // const initializeApp = useCallback(async () => {
  //   const userData = await fetchUserData();
  //   const version = await fetchVersion();
  //   setAppData('userData', {
  //     ...userData,
  //     isAdmin: (userData?.role?.[0]?.name || '').toLowerCase() === 'admin',
  //     isCustomer:
  //       (userData?.role?.[0]?.name || '').toLowerCase() === 'customer',
  //   });
  //   setAppData('version', version);
  //   // TODO: Fix page config methods and set theme and layout
  //   // setPageConfig(PAGE_KEYS.GLOBAL, {
  //   //   theme: data.user?.theme || THEME_VARIANT.LIGHT,
  //   //   layout: data.user?.layout,
  //   // });
  // }, [fetchUserData, fetchVersion]);

  const state = {
    entries: [
      { name: 'A', description: 'test' },
      { name: 'B', description: 'test' },
      { name: 'C', description: 'test' },


    ]
  }

  const subHeaderList = [
    { label: 'Login', to: '/auth/login', isDisabled: false },
    { label: 'Monday', to: '/Monday', isDisabled: false },
    { label: 'SmartSheet', to: '/SmartSheet', isDisabled: false },
  ];

  let columnConfig = [
    {
      id: "name",
      label: "Connectivity Type",
      canSort: true,
      field: "name",
      render: (row) => {
        const accountId = row.rcAccountId ? `(${row.rcAccountId})` : "";
        return (
          <Tooltip
            title={row.name + "  " + accountId}
            placement="left"
            arrow
          >
            <Typography
              variant="body2"
              sx={{ fontFamily: "inter_semibold", cursor: "pointer" }}
            >
              {row.name + "  " + accountId}
            </Typography>
          </Tooltip>
        );
      },
    },
    {
      id: "description",
      label: "Description",
      canSort: true,
      field: "description",
      render: (row) => (
        // <Tooltip title={row.description} placement="top-start">
        <Typography
          variant="body2"
          sx={{ fontFamily: "inter_semibold", cursor: "pointer" }}
        >
          {row.description}
        </Typography>
        // </Tooltip>
      ),
    }
  ];

  return (
    <Box>
      <DefaultLayout
        userData={{}}
        version={{}}
        subHeaderList={subHeaderList || []}
      >
      </DefaultLayout>
      <Box sx={{ mt: '40px' }}>
        <Typography>Test</Typography>
        <Grid
          columns={columnConfig}
          rows={state.entries}
          hasSelection={false}
          hasPagination={false}
        />
        {/* {appData.userData ? ( */}
        <Routes>

          <Route path='/' element={<Navigate to='/' />} />
          <Route path='/Monday' element={<Monday />} />
          <Route path='/SmartSheet' element={<SmartSheet />} />

        </Routes>
        {/* )  : (
          <div>Loading...</div>
        )} */}
      </Box>
    </Box>
  );
};

export default App;