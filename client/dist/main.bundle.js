webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/about-me-edit/about-me-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"update()\">\n\n    <input type=\"text\" name=\"aboutMeTitle\" [(ngModel)]=\"userEdit.aboutMeTitle\">\n    <textarea name=\"aboutMe\"  rows=\"4\" [(ngModel)]=\"userEdit.aboutMe\"></textarea>\n    <div class=\"form-group\">\n        <select class=\"form-control form-control-sm\" name=\"backgroud\" [(ngModel)]=\"userEdit.myImg\">\n            <option *ngFor=\"let image of images\" value=\"{{image.src}}\">{{image.name}}</option>\n        </select>\n    </div>\n    <input type=\"submit\" value=\"update\">\n    \n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/about-me-edit/about-me-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/about-me-edit/about-me-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_1 = __webpack_require__("../../../../../src/app/server/models/user.ts");
var AboutMeEditComponent = /** @class */ (function () {
    function AboutMeEditComponent() {
        this.updateUserEvent = new core_1.EventEmitter();
        this.userEdit = new user_1.User();
    }
    AboutMeEditComponent.prototype.ngOnInit = function () {
        Object.assign(this.userEdit, this.currentUser);
    };
    AboutMeEditComponent.prototype.update = function () {
        this.userEdit.canEditAboutMe = false;
        console.log(this.userEdit);
        this.updateUserEvent.emit(this.userEdit);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", user_1.User)
    ], AboutMeEditComponent.prototype, "currentUser", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AboutMeEditComponent.prototype, "images", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AboutMeEditComponent.prototype, "updateUserEvent", void 0);
    AboutMeEditComponent = __decorate([
        core_1.Component({
            selector: 'app-about-me-edit',
            template: __webpack_require__("../../../../../src/app/admin/about-me-edit/about-me-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/about-me-edit/about-me-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeEditComponent);
    return AboutMeEditComponent;
}());
exports.AboutMeEditComponent = AboutMeEditComponent;


/***/ }),

/***/ "../../../../../src/app/admin/about-me/about-me.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"card\">\n    <img class=\"card-img-top img-fluid\" src=\"{{currentUser.myImg}}\" alt=\"some image\">\n    <div class=\"card-body\">\n      <h5>{{currentUser.aboutMeTitle}}</h5>\n      <p>{{currentUser.aboutMe}}</p>\n    </div>\n    <div class=\"card-footer\">\n      <button class=\"btn btn-info\" (click)=\"currentUser.canEditAboutMe = !currentUser.canEditAboutMe\">edit</button>\n    </div>\n  </div>\n</div>\n<app-about-me-edit [currentUser]=\"currentUser\" (updateUserEvent)=\"update($event)\" [images]=\"images\" *ngIf=\"currentUser.canEditAboutMe\"></app-about-me-edit>"

/***/ }),

/***/ "../../../../../src/app/admin/about-me/about-me.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/about-me/about-me.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
        this.updateUserEvent = new core_1.EventEmitter();
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent.prototype.update = function (user) {
        this.updateUserEvent.emit(user);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AboutMeComponent.prototype, "currentUser", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AboutMeComponent.prototype, "images", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AboutMeComponent.prototype, "updateUserEvent", void 0);
    AboutMeComponent = __decorate([
        core_1.Component({
            selector: 'app-about-me',
            template: __webpack_require__("../../../../../src/app/admin/about-me/about-me.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/about-me/about-me.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());
exports.AboutMeComponent = AboutMeComponent;


/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"currentUser != null\">\n    <div class=\"col-sm-6 col-md-4 col-lg-3 col-xl-2\">\n        <app-img-upload [images]=\"images\" (destroyImageEvent)=\"destroyImg($event)\" (createNewImageEvent)=\"uploadImg($event)\"></app-img-upload>\n    </div>\n\n    <div class=\"col-sm-6 col-md-8 col-lg-9 col-xl-10\">\n        <app-header [images]=\"images\" [currentUser]=\"currentUser\" (updateUserEvent)=\"updateUser($event)\" ></app-header>\n        <app-summary [images]=\"images\" [currentUser]=\"currentUser\" (updateUserEvent)=\"updateUser($event)\"></app-summary>\n        <app-stacks (destroySkillEvent)=\"destroyStack($event)\" (updateStackEvent)=\"updateStack($event)\" [images]=\"images\" [currentUser]=\"currentUser\" (createStackEvent)=\"createStack($event)\"></app-stacks>\n        <app-about-me [images]=\"images\" [currentUser]=\"currentUser\" (updateUserEvent)=\"updateUser($event)\"></app-about-me>\n        <app-projects (destroyProjectEvent)=\"destroyProject($event)\" (updateProjectEvent)=\"updateProject($event)\" [images]=\"images\" [currentUser]=\"currentUser\" (createProjectEvent)=\"createProject($event)\"></app-projects>\n        <app-other [images]=\"images\" [currentUser]=\"currentUser\" (updateUserEvent)=\"updateUser($event)\"></app-other>\n        <app-link (destroyLinkEvent)=\"destroyLink($event)\" (updateLinkEvent)=\"updateLink($event)\" [images]=\"images\" [currentUser]=\"currentUser\"\n        (createLinkEvent)=\"createLink($event)\"></app-link>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imgUploadComponent {\n  width: 300px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var image_service_1 = __webpack_require__("../../../../../src/app/server/controllers/image.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var skill_service_1 = __webpack_require__("../../../../../src/app/server/controllers/skill.service.ts");
var project_service_1 = __webpack_require__("../../../../../src/app/server/controllers/project.service.ts");
var link_service_1 = __webpack_require__("../../../../../src/app/server/controllers/link.service.ts");
var AdminComponent = /** @class */ (function () {
    function AdminComponent(_userService, _imageService, _stackService, _projectService, _linkService, _router) {
        this._userService = _userService;
        this._imageService = _imageService;
        this._stackService = _stackService;
        this._projectService = _projectService;
        this._linkService = _linkService;
        this._router = _router;
        this.images = [];
        this.currentUser = null;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getImages();
        this.getUser();
        console.log(this.currentUser);
    };
    // User
    AdminComponent.prototype.updateUser = function (user) {
        var _this = this;
        this._userService.update(user)
            .then(function (status) { return _this.getUser(); })
            .catch(function (err) { return console.log(err); });
    };
    AdminComponent.prototype.getUser = function () {
        var _this = this;
        this._userService.getCurrentUser()
            .then(function (user) {
            if (user == null) {
                _this._router.navigateByUrl("/admin");
            }
            else {
                _this.currentUser = user;
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    // image CRUD
    AdminComponent.prototype.getImages = function () {
        var _this = this;
        this._imageService.getImages()
            .then(function (images) { return _this.images = images; })
            .catch(function (err) { return console.log(err); });
    };
    AdminComponent.prototype.uploadImg = function (image) {
        var _this = this;
        this._imageService.createImage(image)
            .then(function (status) { return _this.getImages(); })
            .catch(function (err) { return console.log(err); });
    };
    AdminComponent.prototype.destroyImg = function (id) {
        var _this = this;
        this._imageService.deleteImg(id)
            .then(function (status) { return _this.getImages(); })
            .catch(function (err) { return console.log(err); });
    };
    // Stack CRUD
    AdminComponent.prototype.createStack = function (skill) {
        var _this = this;
        this._stackService.createSkill(skill)
            .then(function (status) { return _this.getUser(); })
            .catch(function (err) { return console.log(err); });
    };
    AdminComponent.prototype.destroyStack = function (id) {
        var _this = this;
        this._stackService.deleteSkill(id)
            .then(function (status) { return _this.getUser(); })
            .catch(function (err) { return console.log(err); });
    };
    AdminComponent.prototype.updateStack = function (stack) {
        var _this = this;
        this._stackService.update(stack)
            .then(function (status) { return _this.getUser(); })
            .catch(function (err) { return console.log(err); });
    };
    // Project CRUD
    AdminComponent.prototype.createProject = function (project) {
        var _this = this;
        this._projectService.createProject(project)
            .then(function (status) { return _this.getUser(); })
            .catch(function (err) { return console.log(err); });
    };
    AdminComponent.prototype.destroyProject = function (id) {
        var _this = this;
        this._projectService.deleteProject(id)
            .then(function (status) { return _this.getUser(); })
            .catch(function (err) { return console.log(err); });
    };
    AdminComponent.prototype.updateProject = function (project) {
        var _this = this;
        this._projectService.updateProject(project)
            .then(function (satus) { return _this.getUser(); })
            .catch(function (err) { return console.log(err); });
    };
    // Link CRUD
    AdminComponent.prototype.createLink = function (link) {
        var _this = this;
        this._linkService.createLink(link)
            .then(function (status) { return _this.getUser(); })
            .catch(function (err) { return console.log(err); });
    };
    AdminComponent.prototype.destroyLink = function (id) {
        var _this = this;
        this._linkService.deleteLink(id)
            .then(function (status) { return _this.getUser(); })
            .catch(function (err) { return console.log(err); });
    };
    AdminComponent.prototype.updateLink = function (link) {
        var _this = this;
        this._linkService.updateLink(link)
            .then(function (status) { return _this.getUser(); })
            .catch(function (err) { return console.log(err); });
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            image_service_1.ImageService,
            skill_service_1.SkillService,
            project_service_1.ProjectService,
            link_service_1.LinkService,
            router_1.Router])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;


/***/ }),

/***/ "../../../../../src/app/admin/header-edit/header-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"update()\">\n  <div class=\"form-row\">\n    <div class=\"col\">\n      <label for=\"Title\">Title</label>\n      <input class=\"form-control form-control-sm\" type=\"text\" name=\"title\" [(ngModel)]=\"userEdit.title\">\n    </div>\n    <div class=\"col\"> \n      <label for=\"subTitle\">Subtitle</label> \n      <input type=\"text\" class=\"form-control form-control-sm\" name=\"subTitle\" [(ngModel)]=\"userEdit.subTitle\">\n    </div>\n  </div>\n  \n  <div class=\"form-row\">\n    <div class=\"col\">  \n      <input class=\"form-control form-control-sm\" type=\"text\" name=\"leftG\" [(ngModel)]=\"userEdit.leftG\">\n      <label ><small>rgba left</small></label>\n    </div>\n    <div class=\"col\">\n      <input class=\"form-control form-control-sm\" type=\"text\" name=\"rightG\" [(ngModel)]=\"userEdit.rightG\">\n      <label ><small>rgba right</small></label>      \n    </div>\n  </div>\n  \n  <div class=\"form-group\">\n    <select class=\"form-control form-control-sm\" name=\"backgroud\" [(ngModel)]=\"userEdit.headerImg\">\n      <option *ngFor=\"let image of images\" value=\"{{image.src}}\">{{image.name}}</option>\n    </select>\n  </div>\n\n    <input class=\"btn btn-primary\" type=\"submit\" value=\"update\">  \n  \n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/header-edit/header-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/header-edit/header-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_1 = __webpack_require__("../../../../../src/app/server/models/user.ts");
var HeaderEditComponent = /** @class */ (function () {
    function HeaderEditComponent() {
        this.updateUserEvent = new core_1.EventEmitter();
        this.userEdit = new user_1.User();
    }
    HeaderEditComponent.prototype.ngOnInit = function () {
        Object.assign(this.userEdit, this.currentUser);
    };
    HeaderEditComponent.prototype.update = function () {
        this.userEdit.canEditHeader = false;
        this.updateUserEvent.emit(this.userEdit);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", user_1.User)
    ], HeaderEditComponent.prototype, "currentUser", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HeaderEditComponent.prototype, "images", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], HeaderEditComponent.prototype, "updateUserEvent", void 0);
    HeaderEditComponent = __decorate([
        core_1.Component({
            selector: 'app-header-edit',
            template: __webpack_require__("../../../../../src/app/admin/header-edit/header-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/header-edit/header-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderEditComponent);
    return HeaderEditComponent;
}());
exports.HeaderEditComponent = HeaderEditComponent;


/***/ }),

/***/ "../../../../../src/app/admin/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\n  <div id=\"header\" class=\"card text-center\" [ngStyle]=\"{'background-image': 'linear-gradient(to right bottom, rgba(' + currentUser.leftG + '), rgba(' + currentUser.rightG + ')), url(' + currentUser.headerImg + ')'}\" >\n    <div class=\"card-body\">\n      <h1 class=\"text-light\">{{currentUser.title}}</h1>\n    </div>  \n    <div class=\"card-body text-light\">\n      <h1 class=\"text-light\">{{currentUser.subTitle}}</h1>\n    </div>\n    <button class=\"btn btn-info\" (click)=\"currentUser.canEditHeader = !currentUser.canEditHeader\">Edit</button>\n  </div>\n  <app-header-edit [currentUser]=\"currentUser\" [images]=\"images\" (updateUserEvent)=\"update($event)\" *ngIf=\"currentUser.canEditHeader\"></app-header-edit>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#header {\n  height: 350px;\n  background-size: cover;\n  background-position: top;\n  position: relative; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.updateUserEvent = new core_1.EventEmitter();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.update = function (user) {
        this.updateUserEvent.emit(user);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "currentUser", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "images", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "updateUserEvent", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/admin/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "../../../../../src/app/admin/img-list/img-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngFor=\"let img of images\">\n  <img class=\"card-img-top img-fluid\" src=\"{{img.src}}\" alt=\"{{img.name}}\">\n  <div class=\"card-body\">\n    <p class=\"card-text\">{{img.name}}</p>\n    <button class=\"btn btn-danger\" (click)='deleteImg(img._id)'>X</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/img-list/img-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/img-list/img-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ImgListComponent = /** @class */ (function () {
    function ImgListComponent() {
        this.deleteImgEvent = new core_1.EventEmitter;
    }
    ImgListComponent.prototype.ngOnInit = function () {
    };
    ImgListComponent.prototype.deleteImg = function (id) {
        this.deleteImgEvent.emit(id);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ImgListComponent.prototype, "images", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ImgListComponent.prototype, "deleteImgEvent", void 0);
    ImgListComponent = __decorate([
        core_1.Component({
            selector: 'app-img-list',
            template: __webpack_require__("../../../../../src/app/admin/img-list/img-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/img-list/img-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ImgListComponent);
    return ImgListComponent;
}());
exports.ImgListComponent = ImgListComponent;


/***/ }),

/***/ "../../../../../src/app/admin/img-upload/img-upload.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <form (submit)=\"uploadImg()\">\n    <image-upload buttonCaption=\"Add a Image\" dropBoxMessage=\"10Mb Limit\" [max]=\"1\" [maxFileSize]=\"1000000000\" (uploadFinished)=\"onUploadStatus($event)\"></image-upload>\n    <input class=\"btn btn-info btn-block\" type=\"submit\" value=\"upload\">\n  </form>\n  <div *ngIf=\"images[0]\">\n    <button (click)=\"images[0].editable = !images[0].editable\">\n      <small>show images</small>\n    </button>\n    <app-img-list *ngIf=\"images[0].editable\" (deleteImgEvent)=\"deleteImg($event)\" [images]=\"images\"></app-img-list>\n  </div>\n \n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/admin/img-upload/img-upload.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/img-upload/img-upload.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var image_1 = __webpack_require__("../../../../../src/app/server/models/image.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var ImgUploadComponent = /** @class */ (function () {
    function ImgUploadComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.image = new image_1.Image;
        this.currentUser = null;
        this.destroyImageEvent = new core_1.EventEmitter();
        this.createNewImageEvent = new core_1.EventEmitter();
    }
    ImgUploadComponent.prototype.ngOnInit = function () {
    };
    ImgUploadComponent.prototype.onUploadStatus = function ($event) {
        this.img = $event;
    };
    ImgUploadComponent.prototype.uploadImg = function () {
        this.image.name = this.img['file'].name;
        this.image.src = this.img.src;
        this.createNewImageEvent.emit(this.image);
        this.image = new image_1.Image();
        this.img = "";
    };
    ImgUploadComponent.prototype.deleteImg = function (id) {
        this.destroyImageEvent.emit(id);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ImgUploadComponent.prototype, "images", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ImgUploadComponent.prototype, "destroyImageEvent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ImgUploadComponent.prototype, "createNewImageEvent", void 0);
    ImgUploadComponent = __decorate([
        core_1.Component({
            selector: 'app-img-upload',
            template: __webpack_require__("../../../../../src/app/admin/img-upload/img-upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/img-upload/img-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router])
    ], ImgUploadComponent);
    return ImgUploadComponent;
}());
exports.ImgUploadComponent = ImgUploadComponent;


/***/ }),

/***/ "../../../../../src/app/admin/link-edit/link-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"updatelink()\">\n  <input type=\"text\" name=\"title\" [(ngModel)]=\"linkEdit.title\">\n  <textarea name=\"summary\" rows=\"3\" [(ngModel)]=\"linkEdit.summary\"></textarea>\n  <div class=\"form-group\">\n    <select class=\"form-control form-control-sm\" name=\"img\" [(ngModel)]=\"linkEdit.img\">\n      <option *ngFor=\"let image of images\" value=\"{{image.src}}\">{{image.name}}</option>\n    </select>\n  </div>\n  <input class=\"btn btn-primary\" type=\"submit\" value=\"update\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/link-edit/link-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/link-edit/link-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var link_1 = __webpack_require__("../../../../../src/app/server/models/link.ts");
var LinkEditComponent = /** @class */ (function () {
    function LinkEditComponent() {
        this.updateLinkEvent = new core_1.EventEmitter;
        this.linkEdit = new link_1.Link();
    }
    LinkEditComponent.prototype.ngOnInit = function () {
        Object.assign(this.linkEdit, this.link);
    };
    LinkEditComponent.prototype.updateLink = function () {
        this.linkEdit.editable = false;
        this.updateLinkEvent.emit(this.linkEdit);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LinkEditComponent.prototype, "images", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LinkEditComponent.prototype, "link", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], LinkEditComponent.prototype, "updateLinkEvent", void 0);
    LinkEditComponent = __decorate([
        core_1.Component({
            selector: 'app-link-edit',
            template: __webpack_require__("../../../../../src/app/admin/link-edit/link-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/link-edit/link-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LinkEditComponent);
    return LinkEditComponent;
}());
exports.LinkEditComponent = LinkEditComponent;


/***/ }),

/***/ "../../../../../src/app/admin/link/link.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-3 col-md-6\" *ngFor=\"let link of currentUser._link\">\n    <div class=\"card\">\n      <img class=\"card-img-top img-fluid\" src=\"{{link.img}}\" alt=\"some image\">\n      <div class=\"card-body\">\n        <p class=\"card-title\"> <a href=\"{{link.title}}\">{{link.title}}</a> </p>\n        <p class=\"card-title\"> <small>{{link.description}}</small> </p>\n        \n      </div>\n      <div class=\"card-footer\">\n        <button (click)=\"deleteLink(link._id)\">X</button>\n        <button (click)=\"link.editable = !link.editable\">\n          <small>edit</small>\n        </button>\n      </div>\n    </div>\n    <app-link-edit [link]=\"link\" [images]=\"images\" (updateLinkEvent)=\"updateLink($event)\" *ngIf=\"link.editable\"></app-link-edit>\n  </div>\n  <div class=\"col-lg-3 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form (submit)=\"createLink()\">\n          <div class=\"form-group\">\n            <select class=\"form-control form-control-sm\" name=\"img\" [(ngModel)]=\"newLink.img\">\n              <option *ngFor=\"let image of images\" value=\"{{image.src}}\">{{image.name}}</option>\n            </select>\n          </div>\n          <input type=\"text\" name=\"title\" [(ngModel)]=\"newLink.title\" placeholder=\"Title\">\n          <input type=\"text\" name=\"description\" [(ngModel)]=\"newLink.description\" placeholder=\"description\">\n          <input class=\"btn btn-success\" type=\"submit\" value=\"create\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/link/link.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/link/link.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var link_1 = __webpack_require__("../../../../../src/app/server/models/link.ts");
var link_service_1 = __webpack_require__("../../../../../src/app/server/controllers/link.service.ts");
var LinkComponent = /** @class */ (function () {
    function LinkComponent(_linkServer) {
        this._linkServer = _linkServer;
        this.newLink = new link_1.Link();
        this.createLinkEvent = new core_1.EventEmitter;
        this.destroyLinkEvent = new core_1.EventEmitter;
        this.updateLinkEvent = new core_1.EventEmitter;
    }
    LinkComponent.prototype.ngOnInit = function () {
    };
    LinkComponent.prototype.createLink = function (link) {
        this.createLinkEvent.emit(this.newLink);
        this.newLink = new link_1.Link();
    };
    LinkComponent.prototype.deleteLink = function (link) {
        this.destroyLinkEvent.emit(link);
    };
    LinkComponent.prototype.updateLink = function (link) {
        this.updateLinkEvent.emit(link);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LinkComponent.prototype, "currentUser", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LinkComponent.prototype, "images", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], LinkComponent.prototype, "createLinkEvent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], LinkComponent.prototype, "destroyLinkEvent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], LinkComponent.prototype, "updateLinkEvent", void 0);
    LinkComponent = __decorate([
        core_1.Component({
            selector: 'app-link',
            template: __webpack_require__("../../../../../src/app/admin/link/link.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/link/link.component.scss")]
        }),
        __metadata("design:paramtypes", [link_service_1.LinkService])
    ], LinkComponent);
    return LinkComponent;
}());
exports.LinkComponent = LinkComponent;


/***/ }),

/***/ "../../../../../src/app/admin/other-edit/other-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"update()\">\n  <div class=\"form-group\">\n    <div class=\"form-group\">\n      <select class=\"form-control form-control-sm\" name=\"img\" [(ngModel)]=\"userEdit.otherImg\">\n        <option *ngFor=\"let image of images\" value=\"{{image.src}}\">{{image.name}}</option>\n      </select>\n    </div>\n    <input type=\"text\" name=\"other\" [(ngModel)]=\"userEdit.other\">\n    <input type=\"text\" name=\"experience\" [(ngModel)]=\"userEdit.experience\">\n    \n  </div>\n  <input class=\"btn btn-primary\" type=\"submit\" value=\"update\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/other-edit/other-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/other-edit/other-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_1 = __webpack_require__("../../../../../src/app/server/models/user.ts");
var OtherEditComponent = /** @class */ (function () {
    function OtherEditComponent() {
        this.updateUserEvent = new core_1.EventEmitter();
        this.userEdit = new user_1.User();
    }
    OtherEditComponent.prototype.ngOnInit = function () {
        Object.assign(this.userEdit, this.currentUser);
    };
    OtherEditComponent.prototype.update = function () {
        this.userEdit.canEditOther = false;
        console.log(this.userEdit);
        this.updateUserEvent.emit(this.userEdit);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", user_1.User)
    ], OtherEditComponent.prototype, "currentUser", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], OtherEditComponent.prototype, "images", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], OtherEditComponent.prototype, "updateUserEvent", void 0);
    OtherEditComponent = __decorate([
        core_1.Component({
            selector: 'app-other-edit',
            template: __webpack_require__("../../../../../src/app/admin/other-edit/other-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/other-edit/other-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OtherEditComponent);
    return OtherEditComponent;
}());
exports.OtherEditComponent = OtherEditComponent;


/***/ }),

/***/ "../../../../../src/app/admin/other/other.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\">\n  <img class=\"card-img-top\" src=\"{{currentUser.otherImg}}\" alt=\"some other image\">\n  <div class=\"card-body\">\n    <h4 class=\"card-text\">{{currentUser.other}}</h4>\n    <p class=\"card-text\">{{currentUser.experience}}</p>\n  </div>\n  <div class=\"card-footer\">\n    <button class=\"btn btn-info\" (click)=\"currentUser.canEditOther = !currentUser.canEditOther\">Edit</button>\n  </div>\n  <app-other-edit [currentUser]=\"currentUser\" [images]=\"images\" (updateUserEvent)=\"update($event)\" *ngIf=\"currentUser.canEditOther\"></app-other-edit>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/other/other.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/other/other.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var OtherComponent = /** @class */ (function () {
    function OtherComponent() {
        this.updateUserEvent = new core_1.EventEmitter;
    }
    OtherComponent.prototype.ngOnInit = function () {
    };
    OtherComponent.prototype.update = function (user) {
        this.updateUserEvent.emit(user);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], OtherComponent.prototype, "images", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], OtherComponent.prototype, "currentUser", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], OtherComponent.prototype, "updateUserEvent", void 0);
    OtherComponent = __decorate([
        core_1.Component({
            selector: 'app-other',
            template: __webpack_require__("../../../../../src/app/admin/other/other.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/other/other.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OtherComponent);
    return OtherComponent;
}());
exports.OtherComponent = OtherComponent;


/***/ }),

/***/ "../../../../../src/app/admin/project-edit/project-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"updateProject()\">\n  <input type=\"text\" name=\"title\" [(ngModel)]=\"projectEdit.title\">\n  <input type=\"text\" name=\"subTitle\" [(ngModel)]=\"projectEdit.subTitle\">\n  <textarea name=\"summary\"  rows=\"3\" [(ngModel)]=\"projectEdit.summary\"></textarea>\n  <div class=\"form-group\">\n    <select class=\"form-control form-control-sm\" name=\"img\" [(ngModel)]=\"projectEdit.img\">\n      <option *ngFor=\"let image of images\" value=\"{{image.src}}\">{{image.name}}</option>\n    </select>\n  </div>\n  <input class=\"btn btn-primary\" type=\"submit\" value=\"update\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/project-edit/project-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/project-edit/project-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var project_1 = __webpack_require__("../../../../../src/app/server/models/project.ts");
var image_1 = __webpack_require__("../../../../../src/app/server/models/image.ts");
var ProjectEditComponent = /** @class */ (function () {
    function ProjectEditComponent() {
        this.updateProjectEvent = new core_1.EventEmitter();
        this.projectEdit = new project_1.Project();
    }
    ProjectEditComponent.prototype.ngOnInit = function () {
        Object.assign(this.projectEdit, this.project);
    };
    ProjectEditComponent.prototype.updateProject = function () {
        this.projectEdit.editable = false;
        this.updateProjectEvent.emit(this.projectEdit);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", project_1.Project)
    ], ProjectEditComponent.prototype, "project", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", image_1.Image)
    ], ProjectEditComponent.prototype, "images", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ProjectEditComponent.prototype, "updateProjectEvent", void 0);
    ProjectEditComponent = __decorate([
        core_1.Component({
            selector: 'app-project-edit',
            template: __webpack_require__("../../../../../src/app/admin/project-edit/project-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/project-edit/project-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectEditComponent);
    return ProjectEditComponent;
}());
exports.ProjectEditComponent = ProjectEditComponent;


/***/ }),

/***/ "../../../../../src/app/admin/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-3 col-md-6\" *ngFor=\"let project of currentUser._project\">\n    <div class=\"card\">\n      <img class=\"card-img-top img-fluid\" src=\"{{project.img}}\" alt=\"some image\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{project.title}}</h5>\n        <p class=\"card-text\">{{project.subTitle}}</p>\n        <p class=\"card-text\"><small>{{project.summary}}</small></p>\n      </div>\n      <div class=\"card-footer\">\n        <button (click)=\"deleteProject(project._id)\">X</button>\n        <button (click)=\"project.editable = !project.editable\">\n          <small>edit</small>\n        </button>\n      </div>\n    </div>\n    <app-project-edit [project]=\"project\" [images]=\"images\" (updateProjectEvent)=\"updateProject($event)\" *ngIf=\"project.editable\"></app-project-edit>\n  </div>\n  <div class=\"col-lg-3 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form (submit)=\"createProject()\">\n          <div class=\"form-group\">\n            <select class=\"form-control form-control-sm\" name=\"img\" [(ngModel)]=\"newProject.img\">\n              <option *ngFor=\"let image of images\" value=\"{{image.src}}\">{{image.name}}</option>\n            </select>\n          </div>\n          <input type=\"text\" name=\"title\" [(ngModel)]=\"newProject.title\" placeholder=\"Title\">\n          <input type=\"text\" name=\"subTitle\" [(ngModel)]=\"newProject.subTitle\" placeholder=\"Sub Title\">\n          <input type=\"text\" name=\"description\" [(ngModel)]=\"newProject.description\" placeholder=\"description\">\n          <input type=\"text\" name=\"summary\" [(ngModel)]=\"newProject.summary\" placeholder=\"summary\">          \n          <input class=\"btn btn-success\" type=\"submit\" value=\"create\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/projects/projects.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/projects/projects.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var project_1 = __webpack_require__("../../../../../src/app/server/models/project.ts");
var project_service_1 = __webpack_require__("../../../../../src/app/server/controllers/project.service.ts");
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(_projectService) {
        this._projectService = _projectService;
        this.newProject = new project_1.Project();
        this.destroyProjectEvent = new core_1.EventEmitter;
        this.updateProjectEvent = new core_1.EventEmitter;
        this.createProjectEvent = new core_1.EventEmitter;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent.prototype.createProject = function (project) {
        this.createProjectEvent.emit(this.newProject);
        this.newProject = new project_1.Project();
    };
    ProjectsComponent.prototype.deleteProject = function (project) {
        console.log("delete");
        this.destroyProjectEvent.emit(project);
    };
    ProjectsComponent.prototype.updateProject = function (project) {
        this.updateProjectEvent.emit(project);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProjectsComponent.prototype, "currentUser", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProjectsComponent.prototype, "images", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ProjectsComponent.prototype, "destroyProjectEvent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ProjectsComponent.prototype, "updateProjectEvent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ProjectsComponent.prototype, "createProjectEvent", void 0);
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/admin/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [project_service_1.ProjectService])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;


/***/ }),

/***/ "../../../../../src/app/admin/stack-edit/stack-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"updateStack()\">\n  <input type=\"text\" name=\"title\" [(ngModel)]=\"stackEdit.title\">\n  <input class=\"btn btn-primary\" type=\"submit\" value=\"update\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/stack-edit/stack-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/stack-edit/stack-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var skill_1 = __webpack_require__("../../../../../src/app/server/models/skill.ts");
var StackEditComponent = /** @class */ (function () {
    function StackEditComponent() {
        this.updateStackEvent = new core_1.EventEmitter();
        this.stackEdit = new skill_1.Skill();
    }
    StackEditComponent.prototype.ngOnInit = function () {
        Object.assign(this.stackEdit, this.stack);
    };
    StackEditComponent.prototype.updateStack = function () {
        this.stackEdit.editable = false;
        this.updateStackEvent.emit(this.stackEdit);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", skill_1.Skill)
    ], StackEditComponent.prototype, "stack", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], StackEditComponent.prototype, "updateStackEvent", void 0);
    StackEditComponent = __decorate([
        core_1.Component({
            selector: 'app-stack-edit',
            template: __webpack_require__("../../../../../src/app/admin/stack-edit/stack-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/stack-edit/stack-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StackEditComponent);
    return StackEditComponent;
}());
exports.StackEditComponent = StackEditComponent;


/***/ }),

/***/ "../../../../../src/app/admin/stacks/stacks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-3 col-md-6\" *ngFor=\"let stack of currentUser._skill\">\n    <div class=\"card\">\n      <img class=\"card-img-top img-fluid\" src=\"{{stack.img}}\" alt=\"some image\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{stack.title}}</h5>\n        <p class=\"card-text\">{{stack.subTitle}}</p>\n      </div>\n      <div class=\"card-footer\">\n        <button (click)=\"deleteStack(stack._id)\">X</button>\n        <button (click)=\"stack.editable = !stack.editable\"><small>edit</small></button>\n      </div>\n    </div>\n    <app-stack-edit [stack]=\"stack\" (updateStackEvent)=\"updateStack($event)\" *ngIf=\"stack.editable\"></app-stack-edit>\n  </div>\n  <div class=\"col-lg-3 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n          <form (submit)=\"createStack()\">\n            <div class=\"form-group\">\n              <select class=\"form-control form-control-sm\" name=\"img\" [(ngModel)]=\"newStack.img\">\n                <option *ngFor=\"let image of images\" value=\"{{image.src}}\">{{image.name}}</option>\n              </select>\n            </div>\n            <input type=\"text\" name=\"title\" [(ngModel)]=\"newStack.title\" placeholder=\"Title\">\n            <input type=\"text\" name=\"subTitle\" [(ngModel)]=\"newStack.subTitle\" placeholder=\"Sub Title\">\n            <input type=\"text\" name=\"description\" [(ngModel)]=\"newStack.description\" placeholder=\"description\">\n            <input class=\"btn btn-success\" type=\"submit\" value=\"create\">    \n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/admin/stacks/stacks.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/stacks/stacks.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var skill_1 = __webpack_require__("../../../../../src/app/server/models/skill.ts");
var skill_service_1 = __webpack_require__("../../../../../src/app/server/controllers/skill.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var StacksComponent = /** @class */ (function () {
    function StacksComponent(_skillService, _router) {
        this._skillService = _skillService;
        this._router = _router;
        this.newStack = new skill_1.Skill();
        this.createStackEvent = new core_1.EventEmitter;
        this.destroySkillEvent = new core_1.EventEmitter;
        this.updateStackEvent = new core_1.EventEmitter;
    }
    StacksComponent.prototype.ngOnInit = function () {
    };
    StacksComponent.prototype.createStack = function (stack) {
        this.createStackEvent.emit(this.newStack);
        this.newStack = new skill_1.Skill();
    };
    StacksComponent.prototype.deleteStack = function (stack) {
        this.destroySkillEvent.emit(stack);
    };
    StacksComponent.prototype.updateStack = function (stack) {
        this.updateStackEvent.emit(stack);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], StacksComponent.prototype, "currentUser", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], StacksComponent.prototype, "images", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], StacksComponent.prototype, "createStackEvent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], StacksComponent.prototype, "destroySkillEvent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], StacksComponent.prototype, "updateStackEvent", void 0);
    StacksComponent = __decorate([
        core_1.Component({
            selector: 'app-stacks',
            template: __webpack_require__("../../../../../src/app/admin/stacks/stacks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/stacks/stacks.component.scss")]
        }),
        __metadata("design:paramtypes", [skill_service_1.SkillService,
            router_1.Router])
    ], StacksComponent);
    return StacksComponent;
}());
exports.StacksComponent = StacksComponent;


/***/ }),

/***/ "../../../../../src/app/admin/summary-edit/summary-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"update()\">\n  <div class=\"form-group\">\n    <label for=\"summary\">Summary</label>\n    <textarea class=\"form-control\"  name=\"summary\" rows=\"3\" [(ngModel)]=\"userEdit.summary\"></textarea>\n  </div>\n  <input class=\"btn btn-primary\" type=\"submit\" value=\"update\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/summary-edit/summary-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/summary-edit/summary-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_1 = __webpack_require__("../../../../../src/app/server/models/user.ts");
var SummaryEditComponent = /** @class */ (function () {
    function SummaryEditComponent() {
        this.updateUserEvent = new core_1.EventEmitter();
        this.userEdit = new user_1.User();
    }
    SummaryEditComponent.prototype.ngOnInit = function () {
        Object.assign(this.userEdit, this.currentUser);
    };
    SummaryEditComponent.prototype.update = function () {
        this.userEdit.canEditSummary = false;
        console.log(this.userEdit);
        this.updateUserEvent.emit(this.userEdit);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", user_1.User)
    ], SummaryEditComponent.prototype, "currentUser", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SummaryEditComponent.prototype, "images", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SummaryEditComponent.prototype, "updateUserEvent", void 0);
    SummaryEditComponent = __decorate([
        core_1.Component({
            selector: 'app-summary-edit',
            template: __webpack_require__("../../../../../src/app/admin/summary-edit/summary-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/summary-edit/summary-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SummaryEditComponent);
    return SummaryEditComponent;
}());
exports.SummaryEditComponent = SummaryEditComponent;


/***/ }),

/***/ "../../../../../src/app/admin/summary/summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\">\n  <div class=\"card-body\">\n    <h5 class=\"card-text\">{{currentUser.summary}}</h5>\n  </div>\n  <div class=\"card-footer\">\n      <button class=\"btn btn-info\" (click)=\"currentUser.canEditSummary = !currentUser.canEditSummary\">Edit</button>\n  </div>\n  <app-summary-edit [currentUser]=\"currentUser\" [images]=\"images\" (updateUserEvent)=\"update($event)\" *ngIf=\"currentUser.canEditSummary\"></app-summary-edit>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/summary/summary.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/summary/summary.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var SummaryComponent = /** @class */ (function () {
    function SummaryComponent() {
        this.updateUserEvent = new core_1.EventEmitter();
    }
    SummaryComponent.prototype.ngOnInit = function () {
    };
    SummaryComponent.prototype.update = function (user) {
        this.updateUserEvent.emit(user);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SummaryComponent.prototype, "currentUser", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SummaryComponent.prototype, "images", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SummaryComponent.prototype, "updateUserEvent", void 0);
    SummaryComponent = __decorate([
        core_1.Component({
            selector: 'app-summary',
            template: __webpack_require__("../../../../../src/app/admin/summary/summary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/summary/summary.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SummaryComponent);
    return SummaryComponent;
}());
exports.SummaryComponent = SummaryComponent;


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var login_body_component_1 = __webpack_require__("../../../../../src/app/login-body/login-body.component.ts");
var porfolio_body_component_1 = __webpack_require__("../../../../../src/app/porfolio-body/porfolio-body.component.ts");
var registration_component_1 = __webpack_require__("../../../../../src/app/login-body/registration/registration.component.ts");
var admin_component_1 = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
var routes = [
    {
        path: 'admin', component: login_body_component_1.LoginBodyComponent, children: [
            { path: '', component: registration_component_1.RegistrationComponent }
        ]
    },
    {
        path: '', component: porfolio_body_component_1.PorfolioBodyComponent, children: []
    },
    {
        path: 'superAdmin', component: admin_component_1.AdminComponent, children: []
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var angular2_image_upload_1 = __webpack_require__("../../../../angular2-image-upload/index.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var login_body_component_1 = __webpack_require__("../../../../../src/app/login-body/login-body.component.ts");
var registration_component_1 = __webpack_require__("../../../../../src/app/login-body/registration/registration.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login-body/login/login.component.ts");
var porfolio_body_component_1 = __webpack_require__("../../../../../src/app/porfolio-body/porfolio-body.component.ts");
var navbar_component_1 = __webpack_require__("../../../../../src/app/porfolio-body/navbar/navbar.component.ts");
var admin_component_1 = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var img_upload_component_1 = __webpack_require__("../../../../../src/app/admin/img-upload/img-upload.component.ts");
var image_service_1 = __webpack_require__("../../../../../src/app/server/controllers/image.service.ts");
var header_component_1 = __webpack_require__("../../../../../src/app/admin/header/header.component.ts");
var header_edit_component_1 = __webpack_require__("../../../../../src/app/admin/header-edit/header-edit.component.ts");
var summary_component_1 = __webpack_require__("../../../../../src/app/admin/summary/summary.component.ts");
var summary_edit_component_1 = __webpack_require__("../../../../../src/app/admin/summary-edit/summary-edit.component.ts");
var stacks_component_1 = __webpack_require__("../../../../../src/app/admin/stacks/stacks.component.ts");
var stack_edit_component_1 = __webpack_require__("../../../../../src/app/admin/stack-edit/stack-edit.component.ts");
var skill_service_1 = __webpack_require__("../../../../../src/app/server/controllers/skill.service.ts");
var about_me_component_1 = __webpack_require__("../../../../../src/app/admin/about-me/about-me.component.ts");
var about_me_edit_component_1 = __webpack_require__("../../../../../src/app/admin/about-me-edit/about-me-edit.component.ts");
var projects_component_1 = __webpack_require__("../../../../../src/app/admin/projects/projects.component.ts");
var project_edit_component_1 = __webpack_require__("../../../../../src/app/admin/project-edit/project-edit.component.ts");
var project_service_1 = __webpack_require__("../../../../../src/app/server/controllers/project.service.ts");
var img_list_component_1 = __webpack_require__("../../../../../src/app/admin/img-list/img-list.component.ts");
var other_component_1 = __webpack_require__("../../../../../src/app/admin/other/other.component.ts");
var other_edit_component_1 = __webpack_require__("../../../../../src/app/admin/other-edit/other-edit.component.ts");
var link_component_1 = __webpack_require__("../../../../../src/app/admin/link/link.component.ts");
var link_edit_component_1 = __webpack_require__("../../../../../src/app/admin/link-edit/link-edit.component.ts");
var link_service_1 = __webpack_require__("../../../../../src/app/server/controllers/link.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_body_component_1.LoginBodyComponent,
                registration_component_1.RegistrationComponent,
                login_component_1.LoginComponent,
                porfolio_body_component_1.PorfolioBodyComponent,
                navbar_component_1.NavbarComponent,
                admin_component_1.AdminComponent,
                img_upload_component_1.ImgUploadComponent,
                header_component_1.HeaderComponent,
                header_edit_component_1.HeaderEditComponent,
                summary_component_1.SummaryComponent,
                summary_edit_component_1.SummaryEditComponent,
                stacks_component_1.StacksComponent,
                stack_edit_component_1.StackEditComponent,
                about_me_component_1.AboutMeComponent,
                about_me_edit_component_1.AboutMeEditComponent,
                projects_component_1.ProjectsComponent,
                project_edit_component_1.ProjectEditComponent,
                img_list_component_1.ImgListComponent,
                other_component_1.OtherComponent,
                other_edit_component_1.OtherEditComponent,
                link_component_1.LinkComponent,
                link_edit_component_1.LinkEditComponent,
            ],
            imports: [
                ng_bootstrap_1.NgbModule.forRoot(),
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular2_image_upload_1.ImageUploadModule.forRoot(),
            ],
            providers: [
                user_service_1.UserService,
                image_service_1.ImageService,
                skill_service_1.SkillService,
                project_service_1.ProjectService,
                link_service_1.LinkService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/login-body/login-body.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  login-body works!\n</p>\n<app-login></app-login>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/login-body/login-body.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-body/login-body.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var LoginBodyComponent = /** @class */ (function () {
    function LoginBodyComponent() {
    }
    LoginBodyComponent.prototype.ngOnInit = function () {
    };
    LoginBodyComponent = __decorate([
        core_1.Component({
            selector: 'app-login-body',
            template: __webpack_require__("../../../../../src/app/login-body/login-body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-body/login-body.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginBodyComponent);
    return LoginBodyComponent;
}());
exports.LoginBodyComponent = LoginBodyComponent;


/***/ }),

/***/ "../../../../../src/app/login-body/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>Register</legend>\n  <form (submit)=\"userLogin()\">\n    <label for=\"email\">Email: </label>\n    <br>\n    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n      <p *ngIf=\"email.errors.required\" style=\"color: red;\">Email is required</p>\n      <p *ngIf=\"email.errors.email && !email.errors.required\" style=\"color: red;\">Invalid Email format</p>\n    </div>\n    <input type=\"text\" name=\"email\" class=\"form-control\" required email [(ngModel)]=\"user.email\" #email=\"ngModel\">\n    <br>\n\n    <label for=\"password\">Password: </label>\n    <br>\n    <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" required [(ngModel)]=\"user.password\" #password=\"ngModel\">\n    <br>\n    <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n      <div *ngIf=\"password.errors.required\">\n        <p style=\"color: red;\">Password is required</p>\n      </div>\n    </div>\n\n    <input type=\"submit\" value=\"Login\">\n  </form>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/login-body/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-body/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_1 = __webpack_require__("../../../../../src/app/server/models/user.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.user = new user_1.User();
        this.errors = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.userLogin = function () {
        var _this = this;
        this._userService.login(this.user, function (res) {
            if (res.json().errors) {
                console.log(res.json());
            }
            else {
                _this._router.navigateByUrl('/superAdmin');
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login-body/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-body/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/login-body/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>Register</legend>\n  <form (submit)=\"createUser()\">\n\n    <label>Email:</label>\n    <br>\n    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n      <p *ngIf=\"email.errors.required\" style=\"color: red;\">Email is required</p>\n      <p *ngIf=\"email.errors.email && !email.errors.required\" style=\"color: red;\">Invalid Email format</p>\n    </div>\n    <input type=\"email\" name=\"email\" required email [(ngModel)]=\"newUser.email\" #email=\"ngModel\">\n    <br>\n\n    <label>First Name:</label>\n    <br>\n    <div *ngIf=\"firstName.invalid && (firstName.dirty || firstName.touched)\">\n      <p *ngIf=\"firstName.errors.required\" style=\"color: red;\">First name is required</p>\n      <p *ngIf=\"firstName.errors.minlength\" style=\"color: red;\">First name must be at least 2 characters</p>\n    </div>\n    <input type=\"text\" name=\"first_name\" required minlength=\"2\" [(ngModel)]=\"newUser.first_name\" #firstName=\"ngModel\">\n    <br>\n\n    <label>Last Name:</label>\n    <br>\n    <div *ngIf=\"lastName.invalid && (lastName.dirty || lastName.touched)\">\n      <p *ngIf=\"lastName.errors.required\" style=\"color: red;\">Last name is required</p>\n      <p *ngIf=\"lastName.errors.minlength\" style=\"color: red;\">Last name must be at least 2 characters</p>\n    </div>\n    <input type=\"text\" name=\"last_name\" required minlength=\"2\" [(ngModel)]=\"newUser.last_name\" #lastName=\"ngModel\">\n    <br>\n\n    <label>Password:</label>\n    <small>(Password requires at least 1 capital letter, 1 number, and 1 special character )</small>\n    <br>\n    <input type=\"password\" name=\"password\" required minlength=\"8\" [(ngModel)]=\"newUser.password\" #password=\"ngModel\">\n    <br>\n    <div *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n      <p *ngIf=\"password.errors.required\" style=\"color: red;\">Password is required</p>\n      <p *ngIf=\"password.errors.minlength\">Password must be at least 8 characters</p>\n    </div>\n\n    <label>Comfirmation:</label>\n    <br>\n    <input type=\"password\" name=\"pwConfirm\" required [(ngModel)]=\"newUser.password_confirm\" #pwConfirm=\"ngModel\">\n    <br>\n    <div *ngIf=\"pwConfirm.invalid && (pwConfirm.dirty || pwConfirm.touched)\">\n      <p *ngIf=\"pwConfirm.errors.required\" style=\"color: red;\">Comfirmation Password is required</p>\n    </div>\n    <input type=\"submit\" value=\"Register\">\n  </form>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/login-body/registration/registration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-body/registration/registration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_1 = __webpack_require__("../../../../../src/app/server/models/user.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.newUser = new user_1.User();
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.createUser = function () {
        var _this = this;
        this._userService.create(this.newUser).subscribe(function (res) {
            console.log(res.json().errors);
            if (res.json().errors == null) {
                console.log("im getting here ;D");
                _this._router.navigateByUrl('/superAdmin');
            }
        });
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/login-body/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-body/registration/registration.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;


/***/ }),

/***/ "../../../../../src/app/porfolio-body/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Features</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Pricing</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">About</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button id=\"btn\" class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/porfolio-body/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/porfolio-body/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/porfolio-body/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/porfolio-body/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "../../../../../src/app/porfolio-body/porfolio-body.component.html":
/***/ (function(module, exports) {

module.exports = "<body id=\"home\" *ngIf=\"primaryUser != null\">\n    <nav class=\"navbar navbar-expand-sm navbar-light fixed-top py-2\">\n        <div class=\"container\">\n            <a href=\"#\" class=\"navbar-brand\">\n                <!-- <img src=\"img/mlogo.png\" width=\"50\" height=\"50\" alt=\"\"> -->\n                <h3 class=\"d-inline align-middle\">Jimenez</h3>\n            </a>\n            <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbarNav\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n                <ul class=\"navbar-nav ml-auto\">\n                    <li class=\"nav-item\">\n                        <a href=\"#summary\" class=\"nav-link\">Summary</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a href=\"#about\" class=\"nav-link\">About</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a href=\"#authors\" class=\"nav-link\">Meet The Authors</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a href=\"#contact\" class=\"nav-link\">Contact</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n\n    <!-- SHOWCASE -->\n    <section id=\"showcase\" class=\"py-5\" [ngStyle]=\"{'background-image': 'linear-gradient(to right bottom, rgba(' + primaryUser.leftG + '), rgba(' + primaryUser.rightG + ')),\n    url(' + primaryUser.headerImg + ')'}\">\n        <div class=\"text-white\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-6 text-center\">\n                        <h1 class=\"display-2 text-white mt-5 pt-5\">\n                            {{primaryUser.title}}\n                        </h1>\n                        <p id=\"summary\" class=\"lead\">{{primaryUser.subTitle}}</p>\n                        <a href=\"#\" class=\"btn btn-outline-secondary btn-lg text-white\">\n                            <i class=\"fa fa-arrow-right\"></i> Read More</a>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <!-- <img src=\"{{primaryUser.}}\" alt=\"\" class=\"img-fluid d-none d-lg-block\"> -->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Summary -->\n    <section  class=\"bg-dark text-white py-5\">\n        <div class=\"container text-center\">\n            <h4 class=\"text-white\">{{primaryUser.summary}}</h4>\n        </div>\n    </section>\n\n    <!-- Stacks -->\n    <section id=\"boxes\" class=\"py-5\">\n        <div class=\"container\">\n            <div class=\"info-header text-center mb-3\">\n                <h1 class=\"text-primary pb-3\">\n                    {{primaryUser.other}}\n                </h1>\n                <p class=\"lead pb-3\">\n                    {{primaryUser.experience}}\n                </p>\n            </div>\n            <div class=\"row\">\n                <div *ngFor=\"let stack of primaryUser._skill\" class=\"col-md\">\n                    <div class=\"card text-center border-primary\">\n                        <div class=\"card-body\">\n                            <h3 class=\"text-primary\">{{stack.title}}</h3>\n                            <p class=\"text-muted\">{{stack.subTitle}}</p>\n                        </div>\n                    </div>\n                </div>\n                \n            </div>\n        </div>\n    </section>\n\n    <!-- ABOUT / WHY SECTION -->\n    <section id=\"about\" class=\"py-5 text-center bg-light\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <!-- ACCORDION -->\n                    <div id=\"accordion\" role=\"tablist\">\n\n                        <div class=\"card\" *ngFor=\"let stack of primaryUser._skill\">\n                            <div class=\"card-header\" id=\"heading1\">\n                                <h5 class=\"mb-0\">\n                                    <div [attr.href]=\"'#'+stack._id\" data-toggle=\"collapse\" data-parent=\"#accordion\">\n                                        <i class=\"fa fa-arrow-circle-down\"></i> {{stack.title}}\n                                    </div>\n                                </h5>\n                            </div>\n\n                            <div id=\"{{stack._id}}\" class=\"collapse\">\n                                <div class=\"card-body\">\n                                    {{stack.description}}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- AUTHORS -->\n    <section id=\"authors\" class=\"my-5 text-center\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"info-header mb-5\">\n                        <h1 class=\"text-primary pb-3\">\n                            Projects\n                        </h1>\n                        <p class=\"lead pb-3\">\n                            <!--  -->\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div *ngFor=\"let project of primaryUser._project\" class=\"col-lg-3 col-md-6\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <img src=\"{{project.img}}\" alt=\"\" class=\"img-fluid rounded-circle w-50 mb-3\">\n                            <h3>{{project.title}}</h3>\n                            <h5 class=\"text-muted\">{{project.subTitle}}</h5>\n                            <p>{{project.description}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- CONTACT -->\n    <section id=\"contact\" class=\"bg-light py-5\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-9\">\n                    <h3>Get In Touch</h3>\n                    <p class=\"lead\">If you have any questions, please don’t hesitate to contact using form below…</p>\n                    <form>\n                        <div class=\"form-group\">\n                            <div class=\"input-group input-group-lg\">\n                                <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-user\"></i>\n                                </span>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"input-group input-group-lg\">\n                                <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-envelope\"></i>\n                                </span>\n                                <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"input-group input-group-lg\">\n                                <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-pencil\"></i>\n                                </span>\n                                <textarea class=\"form-control\" placeholder=\"Message\" rows=\"5\"></textarea>\n                            </div>\n                        </div>\n                        <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block btn-lg\">\n                    </form>\n                </div>\n                <div class=\"col-lg-3 align-self-center\">\n                    <!-- <img src=\"img/mlogo.png\" alt=\"\" class=\"img-fluid\"> -->\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <footer id=\"main-footer\" class=\"py-5 bg-primary text-white\">\n        <div class=\"container\">\n            <div class=\"row text-center\">\n                <div class=\"col-md-6 ml-auto\">\n                    <p class=\"lead\">Copyright &copy; 2017</p>\n                </div>\n            </div>\n        </div>\n    </footer>\n\n</body>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/porfolio-body/porfolio-body.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin-top: 55px; }\n\n.navbar {\n  -webkit-box-shadow: 2px 2px 5px #3292a6;\n          box-shadow: 2px 2px 5px #3292a6;\n  opacity: 0.9;\n  background: #fff; }\n\n.navbar .nav-item {\n    font-size: 1.4rem;\n    padding-right: 20px; }\n\n#showcase {\n  position: relative;\n  background-position: top;\n  min-height: 600px; }\n\n.info-header {\n  width: 50%;\n  margin: auto;\n  border-bottom: 1px #ddd solid; }\n\n#authors img {\n  margin-top: -50px; }\n\n#authors .fa {\n  font-size: 25px; }\n\n#authors .card:hover {\n  background: #3292a6;\n  color: #fff; }\n\n#authors .card:hover .fa {\n    color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/porfolio-body/porfolio-body.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var PorfolioBodyComponent = /** @class */ (function () {
    function PorfolioBodyComponent(_userServices) {
        this._userServices = _userServices;
        this.users = null;
        this.primaryUser = null;
    }
    PorfolioBodyComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    PorfolioBodyComponent.prototype.getUsers = function () {
        var _this = this;
        this._userServices.getUsers()
            .then(function (users) {
            _this.users = users;
            _this.primaryUser = users[0];
        })
            .catch(function (err) { return console.log(err); });
    };
    PorfolioBodyComponent = __decorate([
        core_1.Component({
            selector: 'app-porfolio-body',
            template: __webpack_require__("../../../../../src/app/porfolio-body/porfolio-body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/porfolio-body/porfolio-body.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], PorfolioBodyComponent);
    return PorfolioBodyComponent;
}());
exports.PorfolioBodyComponent = PorfolioBodyComponent;


/***/ }),

/***/ "../../../../../src/app/server/controllers/image.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/Rx.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var ImageService = /** @class */ (function () {
    function ImageService(_http) {
        this._http = _http;
    }
    ImageService.prototype.createImage = function (newImg) {
        return this._http.post("/upload", newImg).map(function (data) { return data.json(); }).toPromise();
    };
    ImageService.prototype.getImages = function () {
        return this._http.get('/images').map(function (data) { return data.json(); }).toPromise();
    };
    ImageService.prototype.deleteImg = function (id) {
        return this._http.delete("/image/" + id).map(function (data) { return data.json(); }).toPromise();
    };
    ImageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;


/***/ }),

/***/ "../../../../../src/app/server/controllers/link.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/Rx.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var LinkService = /** @class */ (function () {
    function LinkService(_http) {
        this._http = _http;
    }
    LinkService.prototype.createLink = function (newLink) {
        return this._http.post("/link/create", newLink).map(function (data) { return data.json(); }).toPromise();
    };
    LinkService.prototype.getLinks = function () {
        return this._http.get("/links").map(function (data) { return data.json(); }).toPromise();
    };
    LinkService.prototype.getOneLink = function (id) {
        return this._http.get("/link/" + id).map(function (data) { return data.json(); }).toPromise();
    };
    LinkService.prototype.deleteLink = function (id) {
        return this._http.delete("/link/delete/" + id).map(function (data) { return data.json(); }).toPromise();
    };
    LinkService.prototype.updateLink = function (link) {
        return this._http.put("/link/update/" + link._id, link).map(function (data) { return data.json(); }).toPromise();
    };
    LinkService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LinkService);
    return LinkService;
}());
exports.LinkService = LinkService;


/***/ }),

/***/ "../../../../../src/app/server/controllers/project.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/Rx.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var ProjectService = /** @class */ (function () {
    function ProjectService(_http) {
        this._http = _http;
    }
    ProjectService.prototype.createProject = function (newProject) {
        return this._http.post("/project/create", newProject).map(function (data) { return data.json(); }).toPromise();
    };
    ProjectService.prototype.getPrjects = function () {
        return this._http.get("/projects").map(function (data) { return data.json(); }).toPromise();
    };
    ProjectService.prototype.getOneProject = function (id) {
        return this._http.get("/project/" + id).map(function (data) { return data.json(); }).toPromise();
    };
    ProjectService.prototype.deleteProject = function (id) {
        return this._http.delete("/project/delete/" + id).map(function (data) { return data.json(); }).toPromise();
    };
    ProjectService.prototype.updateProject = function (project) {
        return this._http.put("/project/update/" + project._id, project).map(function (data) { return data.json(); }).toPromise();
    };
    ProjectService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;


/***/ }),

/***/ "../../../../../src/app/server/controllers/skill.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/Rx.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var SkillService = /** @class */ (function () {
    function SkillService(_http) {
        this._http = _http;
    }
    SkillService.prototype.createSkill = function (newSkill) {
        return this._http.post("/skill/create", newSkill).map(function (data) { return data.json(); }).toPromise();
    };
    SkillService.prototype.getSkills = function () {
        return this._http.get("/skills").map(function (data) { return data.json(); }).toPromise();
    };
    SkillService.prototype.getOneSkill = function (id) {
        return this._http.get("/skill/" + id).map(function (data) { return data.json(); }).toPromise();
    };
    SkillService.prototype.deleteSkill = function (id) {
        return this._http.delete("/skill/delete/" + id).map(function (data) { return data.json(); }).toPromise();
    };
    SkillService.prototype.update = function (stack) {
        return this._http.put("/skill/update/" + stack._id, stack).map(function (data) { return data.json(); }).toPromise();
    };
    SkillService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], SkillService);
    return SkillService;
}());
exports.SkillService = SkillService;


/***/ }),

/***/ "../../../../../src/app/server/controllers/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/Rx.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    // get current user that is login
    UserService.prototype.getCurrentUser = function () {
        return this._http.get("/user").map(function (data) { return data.json(); }).toPromise();
    };
    // get all users
    UserService.prototype.getUsers = function () {
        return this._http.get("/users").map(function (data) { return data.json(); }).toPromise();
    };
    // update current user 
    UserService.prototype.update = function (user) {
        return this._http.put("/user/update", user).map(function (data) { return data.json(); }).toPromise();
    };
    // create a user
    UserService.prototype.create = function (user) {
        return this._http.post("/user/create", user);
    };
    // login
    UserService.prototype.login = function (user, callback) {
        this._http.post("/user/login", user).subscribe(function (res) {
            callback(res);
        }, function (err) {
            callback(err);
        });
    };
    // logout
    UserService.prototype.logout = function () {
        return this._http.delete("/user/logout");
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/app/server/models/image.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Image = /** @class */ (function () {
    function Image() {
        this.editable = true;
    }
    return Image;
}());
exports.Image = Image;


/***/ }),

/***/ "../../../../../src/app/server/models/link.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Link = /** @class */ (function () {
    function Link() {
        this.editable = false;
    }
    return Link;
}());
exports.Link = Link;


/***/ }),

/***/ "../../../../../src/app/server/models/project.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Project = /** @class */ (function () {
    function Project() {
        this.editable = false;
    }
    return Project;
}());
exports.Project = Project;


/***/ }),

/***/ "../../../../../src/app/server/models/skill.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Skill = /** @class */ (function () {
    function Skill() {
        this.editable = false;
    }
    return Skill;
}());
exports.Skill = Skill;


/***/ }),

/***/ "../../../../../src/app/server/models/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
        this._id = "";
        this.canEditHeader = false;
        this.canEditSummary = false;
        this.canEditStack = false;
        this.canEditAboutMe = false;
        this.canEditProject = false;
        this.canEditSkill = false;
        this.canEditAccomplishment = false;
        this.canEditTech = false;
        this.canEditLink = false;
        this.canEditRecommendation = false;
        this.canEditOther = false;
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map