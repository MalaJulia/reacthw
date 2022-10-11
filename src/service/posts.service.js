import {axiosService} from "./axios.service";

import {urls} from "../configs";


const PostsService ={
    getAll:() => axiosService.get(urls.posts)

}
export {
  PostsService
}