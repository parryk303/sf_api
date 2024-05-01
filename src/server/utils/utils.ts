export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const sendSuccessResponse = ({ res, data = {}, message, statusCode, count, clearCookie = false }: any) => {
  if (count) {
    data.count = count;
  }

  let response = {
    data,
  };

  if (clearCookie) {
    res.clearCookie('accessToken');
  }
  return res.status(statusCode).json(response);
};