export class Appsetting {

    public static API_ENDPOINT = 'http://localhost:4200';
    public static API_POSTS = '/posts';
    public static API_ONE_POST = '/post/';
}

export class Api {

    public static GET_ONE_POST = Appsetting.API_ENDPOINT + Appsetting.API_ONE_POST;
}
