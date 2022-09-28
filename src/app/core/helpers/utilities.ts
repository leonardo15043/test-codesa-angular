export function statusHttp( status:number | string, message?:any ):string{
    let response:string = "";
    switch (status) {
        case 400:
            response = "Los datos enviados son incorrectos";
            break;
        case 409:
            response = message;
            break;
        default:
            response = "Ocurrio un error, intente más tarde";
            break;
    }
    return response;
}