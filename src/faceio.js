/*global faceIO*/
/*eslint no-undef: "error"*/
import {getFaceKey} from "./keys"
export const getFaceIO =()=>{
    return new faceIO(getFaceKey())
}