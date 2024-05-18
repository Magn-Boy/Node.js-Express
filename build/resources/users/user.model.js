var uuidv4 = require('uuid').v4;
var User = /** @class */ (function () {
    function User(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? uuidv4() : _c, _d = _b.name, name = _d === void 0 ? 'USER' : _d, _e = _b.login, login = _e === void 0 ? 'user' : _e, _f = _b.password, password = _f === void 0 ? 'P@55w0rd' : _f;
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
    }
    User.toResponse = function (user) {
        var id = user.id, name = user.name, login = user.login;
        return { id: id, name: name, login: login };
    };
    return User;
}());
export default User;
//# sourceMappingURL=user.model.js.map