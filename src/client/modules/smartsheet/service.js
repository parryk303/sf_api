
import { http } from '@client/shared/services';

const get = (query = "", id = "") => {

  return http.get(`/api/smartsheet${query == null ? id : query}`, {
    withCredentials: true,
  })

};


const Service = {
  get
};

export default Service;