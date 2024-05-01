export const getRCRedirectUri = (
  rc_authorize_uri,
  rc_client_Id,
  apiBaseUrl,
  state
) =>
  `${rc_authorize_uri}&client_id=${rc_client_Id}&redirect_uri=${apiBaseUrl}oauth2&state=${state}`;
