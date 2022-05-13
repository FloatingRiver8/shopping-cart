
/* Esta es una promesa genérica, reutilizable, 
podría también haberla seteado específica para que me traiga mis productos */

let isSendingOk = true;


const promises = (time, task) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSendingOk) {
                resolve(task);
            } else {
                reject('error');
            }
        }, time)
    }
    )}

    export default promises;