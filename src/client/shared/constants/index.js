export * from "./styles";

export const ROLES = {
  CUSTOMER: "customer",
  INTERNAL: "internal",
  INTERNAL_ADMIN: "internal-admin",
};

export const PROJECT_STATUS = {
  DEPLOYED: "deployed",
  INPROGRESS: "in progress",
  PENDING: "pending",
  BUILDING: "building",
  APPROVED: "approved",
};

export const PROJECT_STATUS_CONFIG = {
  DEPLOYED: {
    label: "Deployed",
    color: "#1D70AC",
  },
  INPROGRESS: {
    label: "In Progress",
    color: "#EAF5FE",
  },
  PENDING: {
    label: "Pending",
    color: "#E97502",
  },
  BUILDING: {
    label: "Building",
    color: "#AF02E9",
  },
  APPROVED: {
    label: "Approved",
    color: "#4caf50",
  }
};

export const PROJECT_REQUEST_STATUS = {
  APPROVED: "approved",
  REJECTED: "rejected",
  PENDING: "pending",
};

export const PROJECT_REQUEST_STATUS_CONFIG = {
  APPROVED: {
    label: "Approved",
    color: "#4caf50",
  },
  REJECTED: {
    label: "Rejected",
    color: "#f44336",
  },
  PENDING: {
    label: "Pending",
    color: "#9e9e9e",
  },
};

export const THEME_VARIANT = {
  DARK: "dark",
  LIGHT: "light",
};

export const CHART_ELEM_TYPE = {
  START: "start",
  STEP: "step",
  CONDITION: "condition",
  STOP: "stop",
};

export const noop = () => {};
export const sessionExpireMsg = "Redirecting to login, please wait...";
export const DEFAULT_ERROR_MESSAGE =
  "Something went wrong, please contact system administrator.";
export const DEFAULT_WAIT_MESSAGE =
  "It is taking longer than expected, please wait.";
export const ACCESS_DENIED_MESSAGE =
  "You don't have permission to perform this action. Please contact system administrator";

export const PhoneRegexE164 = /^$|^\+\d{11,13}$/;

export const VALIDATIONS = {
  ALPHANUMERIC: "alphanumeric",
  MAX_LENGTH: "maxLength",
  MIN_LENGTH: "minLength",
  MAX: "max",
  MIN: "min",
  INTEGER: "integer",
  FLOAT: "float",
  NUMBER: "number",
  REQUIRED: "required",
  EMAILS: "emails",
  REGEX: "regex",
  PHONE: "phone",
};

export const RC_USER_ID = ["259437004", "37439510"];

export const PAGE_KEYS = {
  NOTIFICATIONS: "notifications",
  WHITELIST_CLIENTS: "whitelist-clients",
  USER_PERMISSION: "user_permission",
  ADMIN_USER: "admin_user",
  ACTIVITY: "activity",
  USERS: "users",
  SETTINGS: "settings",
};

export const DELIVERY_TYPE = {
  EMAIL: "emails",
  SMS: "sms_to",
  WEBHOOK: "webhook",
  GLIP: "glip_teams",
  VOICEMAIL_READ_CONDITION: "voicemail-read-condition",
  DELAY: "delay",
  REPEAT: "goto",
  STOP: "stop",
  RINGOUT: "ringout",
};

export const SUPPORTED_COUNTRIES = [
  {
    callingCode: "1",
    isoCode: "US",
    name: "United States",
    postalRegExp: /^[0-9]{5}$/,
  },
  {
    callingCode: "1",
    isoCode: "CA",
    name: "Canada",
    postalRegExp: /^[A-Z]{1}[0-9]{1}[A-Z]{1} [0-9]{1}[A-Z]{1}[0-9]{1}$/,
  },
  {
    callingCode: "33",
    isoCode: "FR",
    name: "France",
    postalRegExp: /^[0-9]{5}$/,
  },
  {
    callingCode: "44",
    isoCode: "GB",
    name: "United Kingdom",
    postalRegExp: /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/,
  },
  {
    callingCode: "61",
    isoCode: "AU",
    name: "Australia",
    postalRegExp: /^[0-9]{4}$/,
  },
];

export const TOAST_TYPES = {
  INFO: "info",
  ERROR: "error",
  WARNING: "warning",
  SUCCESS: "success",
};

export const REGEX = {
  IP: /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\:?(\d{1,5})?$/,
  CIDR: "^([0-9]{1,3}.){3}[0-9]{1,3}($^|/(0?[1-9]|[12][0-9]|3[02]))$",
};

export const isValidDate = (dateString) => {
  const isValidDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  return isValidDateRegex.test(dateString);
};

const fieldKeysPrefix = "_";
export const getFieldLabelFromFieldName = (fieldName) => {
  const fieldNameWithoutPrefix = fieldName.replace(fieldKeysPrefix, "");
  const words = fieldNameWithoutPrefix
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/\s+/);
  const fieldLabelWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  const fieldLabel = fieldLabelWords.join(" ");
  return fieldLabel;
};

export const splitAndPushToFinalArray = (arr, chunkSize) => {

  const finalArray = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    const subArray = arr.slice(i, i + chunkSize);
    finalArray.push(subArray);
  }

  return finalArray;
}



export const customSortByFieldLabel = (a, b, type) => {
  const connectivity = [
    'E',
    'A',
    'D',
    'B',
    'C'
  ];
  const project = [
    'Customer Production Endpoints',
    'Customer Dev/Test Endpoints',
    'Description of Integration',
    'Application Credentials',
    'AWS Region Main',
    'AWS Region Backup',
    'AWS Secret Main',
    'AWS Secret Backup',
    'AWS Key Main',
    'AWS Key Backup',
    'UAT Start Date',
    'UAT End Date',
    'Expiry Date',
    'Renewal Date',
  ];

  const aIndex = type === 'connecticity' ? connectivity.indexOf(a.fieldLabel) : project.indexOf(a.fieldLabel);
  const bIndex = type === 'connecticity' ? connectivity.indexOf(b.fieldLabel) : project.indexOf(a.fieldLabel);

  return aIndex - bIndex;
};

export const formatDate = (dateString) => {
  const inputDate = new Date(dateString);

  const year = inputDate.getFullYear();
  const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
  const day = inputDate.getDate().toString().padStart(2, '0');

  const formattedDate = `${month}-${day}-${year}`;
  return formattedDate;
}
