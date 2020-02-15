import { PROD } from './environment-prod.const';

export class Appsetting {

    public static API_ENDPOINT = PROD.APP_ROOT + (PROD.APP_PORT === 8080 || PROD.APP_PORT === 80 ? '' : ':' + PROD.APP_PORT);
    public static API_POSTS = 'posts';
    public static API_ONE_POST = 'post/';
    public static API_ABOUT = 'about/';
}

export class Api {

    public static GET_POSTS = Appsetting.API_ENDPOINT + Appsetting.API_POSTS;
    public static GET_ONE_POST = Appsetting.API_ENDPOINT + Appsetting.API_ONE_POST;
    public static ABOUT_PAGE = Appsetting.API_ENDPOINT + Appsetting.API_ABOUT;
}
