import { useCallback, useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DefaultLayout } from '@client/shared/components';
import { AppService } from '@client/shared/services';
import { AppContext } from '@client/shared/contexts';
import Box from '@mui/material/Box';

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

  const subHeaderList = [
    { label: 'Login', to: '/auth/login', isDisabled: false }
  ];

  return (
    <Box>
      <DefaultLayout
        userData={{}}
        version={{}}
        subHeaderList={subHeaderList || []}
      ></DefaultLayout>
      <Box sx={{ mt: '40px' }}>
        {/* {appData.userData ? ( */}
        <Routes>
         
          <Route path='/' element={<Navigate to='/' />} />
         
        </Routes>
        {/* )  : (
          <div>Loading...</div>
        )} */}
      </Box>
    </Box>
  );
};

export default App;