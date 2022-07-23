// FOR ANY API URL
const BASE_URL = "https://jsonplaceholder.typicode.com";
const BASE_URL_NEW = "https://lumen-lts.brainvire.dev/admin/api";
const VERSION = "v1";

// **********************API'S USE'S*********************

export const SIGNIN_URL = `${BASE_URL_NEW}/${VERSION}/oauth/signin`;
export const SIGNIN_URL_GET = `${BASE_URL_NEW}/${VERSION}/oauth/signin`;
export const CMS_LIST_URL = `${BASE_URL_NEW}/${VERSION}/content_page/list`;
export const CMS_PUT_URL = `${BASE_URL_NEW}/${VERSION}/content_page/change_status`;
export const CMS_POST_URL = `${BASE_URL_NEW}/${VERSION}/content_page/create`;
export const CMS_PUT_UPDATE_URL = `${BASE_URL_NEW}/${VERSION}/content_page/update`;
export const CMS_DELETE_URL = `${BASE_URL_NEW}/${VERSION}/content_page/delete`;
export const CMS_SHOW_URL = `${BASE_URL_NEW}/${VERSION}/content_page/show`;
export const GET_URL = `${BASE_URL}/comments`;
