import {axiosService} from "./axios.service";

import {urls} from "../configs";


const UsersService ={
  getAll:() => axiosService.get(urls.users)

}
export {
    UsersService
}