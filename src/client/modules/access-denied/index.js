import { getRCRedirectUri } from '@client/utils';
import AccessDeniedView from './view';
import config from '@client/config';

const AccessDenied = ({ open = false }) => {
  const { rc_client_Id, rc_authorize_uri, apiBaseUrl } = config;

  const redirectToLogin = () => {
    if (typeof window !== "undefined") {
      window.location.replace(
        getRCRedirectUri(
          rc_authorize_uri,
          rc_client_Id,
          apiBaseUrl,
          window.location.origin
        )
      );
    }
  };
  return <AccessDeniedView isOpen={open} redirectToLogin={redirectToLogin} />;
};
export default AccessDenied;
