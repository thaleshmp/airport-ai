class BaseException {
    constructor() {
        this.errors = []
    }
}

class BusinessException extends BaseException {
    constructor(error){
        super();
        this.errors = [ error ]
    }
}

class NotFoundException extends BaseException {
    constructor(error){
        super();
        this.errors = [ error ]
    }
}

module.exports = {
    BusinessException,
    NotFoundException
}