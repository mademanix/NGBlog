import { ENVIRONMENT } from '../../environment';

export class Appsetting {

    public static ENDPOINT = ENVIRONMENT.APP_ROOT;
    public static POSTS = 'posts';
    public static ONE_POST = 'post/';
    public static ABOUT = 'about/';
    public static API_MYSQL_ENDPOINT = ENVIRONMENT.API_MYSQL_ROOT;
}

export class Api {

    public static ROOT = Appsetting.ENDPOINT;
    public static API_MYSQL_GET_POSTS = Appsetting.API_MYSQL_ENDPOINT + '/' + Appsetting.POSTS;
    public static API_MYSQL_GET_ONE_POST = Appsetting.API_MYSQL_ENDPOINT + '/' + Appsetting.ONE_POST;
    public static GET_POSTS = Appsetting.ENDPOINT + Appsetting.POSTS;
    public static GET_ONE_POST = Appsetting.ENDPOINT + Appsetting.ONE_POST;
    public static ABOUT_PAGE = Appsetting.ENDPOINT + Appsetting.ABOUT;
}
