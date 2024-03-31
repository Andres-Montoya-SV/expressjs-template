async function Ok(message, data, status){
    return {
        exito: true,
        message,
        status,
        data
    }
}

async function Error(message, data, status, error){
    return {
        exito: false,
        message,
        status,
        data,
        error
    }
}

module.exports = {
    Ok,
    Error
}