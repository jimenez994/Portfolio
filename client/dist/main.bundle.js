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

module.exports = "<a [routerLink]=\"['/admin/messages']\">Messages</a>\n\n<div class=\"row\" *ngIf=\"currentUser != null\">\n    <div class=\"col-sm-6 col-md-4 col-lg-3 col-xl-2\">\n        <app-img-upload [images]=\"images\" (destroyImageEvent)=\"destroyImg($event)\" (createNewImageEvent)=\"uploadImg($event)\"></app-img-upload>\n    </div>\n\n    <div class=\"col-sm-6 col-md-8 col-lg-9 col-xl-10\">\n        <app-header [images]=\"images\" [currentUser]=\"currentUser\" (updateUserEvent)=\"updateUser($event)\" ></app-header>\n        <app-summary [images]=\"images\" [currentUser]=\"currentUser\" (updateUserEvent)=\"updateUser($event)\"></app-summary>\n        <app-stacks (destroySkillEvent)=\"destroyStack($event)\" (updateStackEvent)=\"updateStack($event)\" [images]=\"images\" [currentUser]=\"currentUser\" (createStackEvent)=\"createStack($event)\"></app-stacks>\n        <app-about-me [images]=\"images\" [currentUser]=\"currentUser\" (updateUserEvent)=\"updateUser($event)\"></app-about-me>\n        <app-projects (destroyProjectEvent)=\"destroyProject($event)\" (updateProjectEvent)=\"updateProject($event)\" [images]=\"images\" [currentUser]=\"currentUser\" (createProjectEvent)=\"createProject($event)\"></app-projects>\n        <app-other [images]=\"images\" [currentUser]=\"currentUser\" (updateUserEvent)=\"updateUser($event)\"></app-other>\n        <app-link (destroyLinkEvent)=\"destroyLink($event)\" (updateLinkEvent)=\"updateLink($event)\" [images]=\"images\" [currentUser]=\"currentUser\"\n        (createLinkEvent)=\"createLink($event)\"></app-link>\n    </div>\n</div>\n"

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
var message_service_1 = __webpack_require__("../../../../../src/app/server/controllers/message.service.ts");
var AdminComponent = /** @class */ (function () {
    function AdminComponent(_userService, _imageService, _stackService, _projectService, _linkService, _router, _messageService) {
        this._userService = _userService;
        this._imageService = _imageService;
        this._stackService = _stackService;
        this._projectService = _projectService;
        this._linkService = _linkService;
        this._router = _router;
        this._messageService = _messageService;
        this.images = [];
        this.currentUser = null;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getImages();
        this.getUser();
    };
    // Messages
    AdminComponent.prototype.getMessages = function () {
        var _this = this;
        this._messageService.showMessages()
            .then(function (status) { return _this.getUser; })
            .catch(function (err) { return console.log(err); });
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
            router_1.Router,
            message_service_1.MessageService])
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

module.exports = "  <form (submit)=\"uploadImg()\">\n    <image-upload buttonCaption=\"Add a Image\" dropBoxMessage=\"10Mb Limit\" [max]=\"1\" [maxFileSize]=\"1000000000\" (uploadFinished)=\"onUploadStatus($event)\"></image-upload>\n    <input class=\"btn btn-info btn-block\" type=\"submit\" value=\"upload\">\n  </form>\n  <div *ngIf=\"images[0]\">\n    <button (click)=\"images[0].editable = !images[0].editable\">\n      <small>show images</small>\n    </button>\n    <app-img-list *ngIf=\"images[0].editable\" (deleteImgEvent)=\"deleteImg($event)\" [images]=\"images\"></app-img-list>\n  </div>\n \n\n\n\n\n"

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

/***/ "../../../../../src/app/admin/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"cotainer m-5\">\n  <div *ngFor=\"let message of messages\" class=\"card text-white bg-dark mb-3\">\n    <div class=\"card-header\">{{message.name}}</div>\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">{{message.email}}</h4>\n      <p class=\"card-text\">{{message.text}}</p>\n      <p class=\"text-muted\">{{message.createdAt}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/messages/messages.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/messages/messages.component.ts":
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
var message_service_1 = __webpack_require__("../../../../../src/app/server/controllers/message.service.ts");
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(_messageService) {
        this._messageService = _messageService;
        this.messages = [];
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.getMessages();
    };
    MessagesComponent.prototype.getMessages = function () {
        var _this = this;
        this._messageService.showMessages()
            .then(function (status) { return _this.messages = status; })
            .catch(function (err) { return console.log(err); });
    };
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/admin/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/messages/messages.component.scss")]
        }),
        __metadata("design:paramtypes", [message_service_1.MessageService])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;


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
var messages_component_1 = __webpack_require__("../../../../../src/app/admin/messages/messages.component.ts");
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
    },
    {
        path: 'admin/messages', component: messages_component_1.MessagesComponent
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
var message_service_1 = __webpack_require__("../../../../../src/app/server/controllers/message.service.ts");
var messages_component_1 = __webpack_require__("../../../../../src/app/admin/messages/messages.component.ts");
var pheader_component_1 = __webpack_require__("../../../../../src/app/porfolio-body/pheader/pheader.component.ts");
var pstacks_component_1 = __webpack_require__("../../../../../src/app/porfolio-body/pstacks/pstacks.component.ts");
var pabout_me_component_1 = __webpack_require__("../../../../../src/app/porfolio-body/pabout-me/pabout-me.component.ts");
var pprojects_component_1 = __webpack_require__("../../../../../src/app/porfolio-body/pprojects/pprojects.component.ts");
var plinks_component_1 = __webpack_require__("../../../../../src/app/porfolio-body/plinks/plinks.component.ts");
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
                messages_component_1.MessagesComponent,
                pheader_component_1.PheaderComponent,
                pstacks_component_1.PstacksComponent,
                pabout_me_component_1.PaboutMeComponent,
                pprojects_component_1.PprojectsComponent,
                plinks_component_1.PlinksComponent,
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
                link_service_1.LinkService,
                message_service_1.MessageService
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

/***/ "../../../../../src/app/porfolio-body/pabout-me/pabout-me.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hello text-center\">\n  <h3 class=\"text-dark\">Front-end developer.</h3>\n</div>"

/***/ }),

/***/ "../../../../../src/app/porfolio-body/pabout-me/pabout-me.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/porfolio-body/pabout-me/pabout-me.component.ts":
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
var PaboutMeComponent = /** @class */ (function () {
    function PaboutMeComponent() {
    }
    PaboutMeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PaboutMeComponent.prototype, "primaryUser", void 0);
    PaboutMeComponent = __decorate([
        core_1.Component({
            selector: 'app-pabout-me',
            template: __webpack_require__("../../../../../src/app/porfolio-body/pabout-me/pabout-me.component.html"),
            styles: [__webpack_require__("../../../../../src/app/porfolio-body/pabout-me/pabout-me.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaboutMeComponent);
    return PaboutMeComponent;
}());
exports.PaboutMeComponent = PaboutMeComponent;


/***/ }),

/***/ "../../../../../src/app/porfolio-body/pheader/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class header{
    constructor(){
        var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        var canvas = document.querySelector('canvas');

        var ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var mouse = {
            x: undefined,
            y: undefined
        };

        window.addEventListener('resize', function () {
            init();
        });

        window.addEventListener('mouseout', function () {
            mouse = {
                x: undefined,
                y: undefined
            };
        });

        window.addEventListener('mousemove', function (e) {
            mouse = {
                x: e.x,
                y: e.y
            };
        });

        var Particle = function () {
            function Particle(x, y, r, dx, dy) {
                _classCallCheck(this, Particle);

                this.x = x;
                this.y = y;
                this.r = r;
                this.dx = dx;
                this.dy = dy;
                this.color = 'white';
            }

            _createClass(Particle, [{
                key: 'draw',
                value: function draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
            }, {
                key: 'update',
                value: function update() {
                    var t = getDistance(mouse, this);

                    if (this.x < 0 || this.x > canvas.width) {
                        this.dx = -this.dx;
                    }
                    if (this.y < 0 || this.y > canvas.height) {
                        this.dy = -this.dy;
                    }

                    if (mouse.x && mouse.y && t < 100) {
                        // t2 = a2 + b2
                        this.x += -(mouse.x - this.x) / (3 * t);
                        this.y += -(mouse.y - this.y) / (3 * t);
                    } else {
                        this.x += this.dx;
                        this.y += this.dy;
                    }

                    this.draw();
                }
            }]);

            return Particle;
        }();

        var particles = [];

        function init() {
            particles = [];
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
            for (var i = 0; i < 100; i++) {
                var x = Math.random() * canvas.width;
                var y = Math.random() * canvas.height;
                var dx = Math.random() - 0.5;
                var dy = Math.random() - 0.5;
                var p = new Particle(x, y, 4, dx, dy);
                particles.push(p);
                p.draw();
            }
        }

        function drawMatrix() {
            particles.map(function (p1) {
                particles.map(function (p2) {
                    if (getDistance(p1, p2) < 50) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = "white";
                        ctx.stroke();
                    }
                });
            });
        }

        function getDistance(p1, p2) {
            return Math.sqrt(Math.pow(p2.y - p1.y, 2) + Math.pow(p2.x - p1.x, 2));
        }
        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            particles.map(function (p) {
                p.update();
            });
            drawMatrix();
        }

        init();
        animate();
    }
}
/* harmony export (immutable) */ __webpack_exports__["header"] = header;


/***/ }),

/***/ "../../../../../src/app/porfolio-body/pheader/pheader.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n  <body>\n    <canvas></canvas>\n    \n    <div class=\"info\">\n      Drag your mouse for repulsion\n    </div>\n    \n    <div class=\"header\">\n      <h1>Jonathan Jimenez</h1>\n      <h2>\n        <a href=\"https://benafonso.com\">Ben. Afonso</a>\n      </h2>\n    </div>\n\n  </body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/porfolio-body/pheader/pheader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n  margin: 0;\n  padding: 0;\n  color: white; }\n\na {\n  text-decoration: none;\n  color: inherit; }\n\ncanvas {\n  background: #222;\n  z-index: -2; }\n\n.header {\n  position: absolute;\n  color: white;\n  top: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  margin-top: 35vh;\n  background-color: rgba(40, 90, 90, 0.3); }\n\nh1 {\n  position: relative;\n  font-family: 'Lobster', cursive;\n  font-weight: normal; }\n\nh2 {\n  font-family: 'Annie Use Your Telescope', cursive;\n  font-weight: normal; }\n\nh1:before {\n  content: \"\";\n  position: absolute;\n  bottom: -10px;\n  left: calc(50vw - 100px);\n  height: 1px;\n  width: 200px;\n  background: #fff; }\n\n.info {\n  font-family: 'Annie Use Your Telescope', cursive;\n  position: absolute;\n  top: 10px;\n  left: 0;\n  width: 200px;\n  background: rgba(100, 100, 100, 0.5);\n  height: 30px;\n  width: 200px;\n  line-height: 30px;\n  border-radius: 0px 4px 4px 0px;\n  padding-left: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/porfolio-body/pheader/pheader.component.ts":
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
var header_1 = __webpack_require__("../../../../../src/app/porfolio-body/pheader/header.js");
var PheaderComponent = /** @class */ (function () {
    function PheaderComponent() {
    }
    PheaderComponent.prototype.ngOnInit = function () {
        new header_1.header();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PheaderComponent.prototype, "primaryUser", void 0);
    PheaderComponent = __decorate([
        core_1.Component({
            selector: 'app-pheader',
            template: __webpack_require__("../../../../../src/app/porfolio-body/pheader/pheader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/porfolio-body/pheader/pheader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PheaderComponent);
    return PheaderComponent;
}());
exports.PheaderComponent = PheaderComponent;


/***/ }),

/***/ "../../../../../src/app/porfolio-body/plinks/bla.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class bla{
    constructor (){
        
        /* ---- particles.js config ---- */

        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 1000
                    }
                },
                "color": {
                    "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
                },

                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#fff"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.6,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 2,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 120,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

}
/* harmony export (immutable) */ __webpack_exports__["bla"] = bla;


/***/ }),

/***/ "../../../../../src/app/porfolio-body/plinks/plinks.component.html":
/***/ (function(module, exports) {

module.exports = " Summary\n<app-plinks></app-plinks>\n\n<section class=\"bg-dark text-white py-5\">\n  <div class=\"container text-center\">\n    <h4 class=\"text-white\">{{primaryUser.summary}}</h4>\n\n    {{primaryUser.summary }}\n\n\n\n  </div>\n</section>\n\n<!-- Stacks -->\n<app-pstacks [primaryUser]=\"primaryUser\"></app-pstacks>\n\n<!-- Projects -->\n<app-pprojects [primaryUser]=\"primaryUser\"></app-pprojects>\n\n<!-- Anout me -->\n<app-pabout-me [primaryUser]=\"primaryUser\"></app-pabout-me>\n<!--  -->\n<!-- AUTHORS -->\n<section id=\"authors\" class=\"my-5 text-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"info-header mb-5\">\n          <h1 class=\"text-primary pb-3\">\n            Projects\n          </h1>\n          <p class=\"lead pb-3\">\n            <!--  -->\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div *ngFor=\"let project of primaryUser._project\" class=\"col-lg-3 col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <img src=\"{{project.img}}\" alt=\"\" class=\"img-fluid rounded-circle w-50 mb-3\">\n            <h3>{{project.title}}</h3>\n            <h5 class=\"text-muted\">{{project.subTitle}}</h5>\n            <p>{{project.description}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- CONTACT -->\n<section id=\"contact\" class=\"bg-light py-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-9\">\n        <h3>Get In Touch</h3>\n        <p class=\"lead\">If you have any questions, please don’t hesitate to contact using form below…</p>\n        <form (submit)=\"createMessage()\">\n          <div class=\"form-group\">\n            <div class=\"input-group input-group-lg\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-user\"></i>\n              </span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"newMessage.name\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"input-group input-group-lg\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-envelope\"></i>\n              </span>\n              <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"newMessage.email\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"input-group input-group-lg\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-pencil\"></i>\n              </span>\n              <textarea type=\"text\" class=\"form-control\" name=\"text\" placeholder=\"Message\" rows=\"5\" [(ngModel)]=\"newMessage.text\"></textarea>\n            </div>\n          </div>\n          <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block btn-lg\">\n        </form>\n      </div>\n      <div class=\"col-lg-3 align-self-center\">\n        <!-- <img src=\"img/mlogo.png\" alt=\"\" class=\"img-fluid\"> -->\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<footer id=\"main-footer\" class=\"py-5 bg-primary text-white\">\n  <div class=\"container\">\n    <div class=\"row text-center\">\n      <div class=\"col-md-6 ml-auto\">\n        <p class=\"lead\">Copyright &copy; 2017</p>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/porfolio-body/plinks/plinks.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n  height: 100%;\n  margin: 0px;\n  padding: 0px; }\n\n#particles-js {\n  width: 100%;\n  height: 100%;\n  background: #111111; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/porfolio-body/plinks/plinks.component.ts":
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
var bla_1 = __webpack_require__("../../../../../src/app/porfolio-body/plinks/bla.js");
var PlinksComponent = /** @class */ (function () {
    function PlinksComponent() {
    }
    PlinksComponent.prototype.ngOnInit = function () {
        new bla_1.bla();
    };
    PlinksComponent = __decorate([
        core_1.Component({
            selector: 'app-plinks',
            template: __webpack_require__("../../../../../src/app/porfolio-body/plinks/plinks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/porfolio-body/plinks/plinks.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlinksComponent);
    return PlinksComponent;
}());
exports.PlinksComponent = PlinksComponent;


/***/ }),

/***/ "../../../../../src/app/porfolio-body/porfolio-body.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<script src=\"https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js\"></script>\n<body id=\"home\" *ngIf=\"primaryUser != null\">\n    <nav class=\"navbar navbar-expand-sm navbar-light fixed-top py-2\">\n        <div class=\"container\">\n            <a href=\"#\" class=\"navbar-brand\">\n                <!-- <img src=\"img/mlogo.png\" width=\"50\" height=\"50\" alt=\"\"> -->\n                <h3 class=\"d-inline align-middle\">Jimenez</h3>\n            </a>\n            <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbarNav\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n                <ul class=\"navbar-nav ml-auto\">\n                    <li class=\"nav-item\">\n                        <a href=\"#summary\" class=\"nav-link\">Summary</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a href=\"#about\" class=\"nav-link\">About</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a href=\"#authors\" class=\"nav-link\">Meet The Authors</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a href=\"#contact\" class=\"nav-link\">Contact</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <!-- Header -->\n    <app-pheader [primaryUser]=\"primaryUser\"></app-pheader>\n   \n\n</body>\n\n"

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
var message_service_1 = __webpack_require__("../../../../../src/app/server/controllers/message.service.ts");
var message_1 = __webpack_require__("../../../../../src/app/server/models/message.ts");
var PorfolioBodyComponent = /** @class */ (function () {
    function PorfolioBodyComponent(_userServices, _mesageService) {
        this._userServices = _userServices;
        this._mesageService = _mesageService;
        this.users = null;
        this.primaryUser = null;
        this.newMessage = new message_1.Message();
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
    PorfolioBodyComponent.prototype.createMessage = function () {
        var _this = this;
        this.newMessage._user = this.primaryUser._id;
        this._mesageService.createMessage(this.newMessage)
            .then(function (status) { return _this.getUsers(); })
            .catch(function (err) { return console.log(err); });
        this.newMessage = new message_1.Message();
    };
    PorfolioBodyComponent = __decorate([
        core_1.Component({
            selector: 'app-porfolio-body',
            template: __webpack_require__("../../../../../src/app/porfolio-body/porfolio-body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/porfolio-body/porfolio-body.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            message_service_1.MessageService])
    ], PorfolioBodyComponent);
    return PorfolioBodyComponent;
}());
exports.PorfolioBodyComponent = PorfolioBodyComponent;


/***/ }),

/***/ "../../../../../src/app/porfolio-body/pprojects/pprojects.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Projects</h1>\n<div class=\"accordion\">\n  <ul>\n    <li *ngFor=\"let project of primaryUser._project\" [ngStyle]=\"{'background-image': 'url(' + project.img + ')'}\">\n      <div>\n        <a href=\"#\">\n          <h2>{{project.title}}</h2>\n          <p>{{project.description}}</p>\n        </a>\n      </div>\n    </li>\n    \n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/porfolio-body/pprojects/pprojects.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  text-align: center;\n  color: #333; }\n\n.accordion {\n  width: 100%;\n  max-width: 1080px;\n  height: 250px;\n  overflow: hidden;\n  margin: 50px auto; }\n\n.accordion ul {\n    width: 100%;\n    display: table;\n    table-layout: fixed;\n    margin: 0;\n    padding: 0; }\n\n.accordion ul li {\n      display: table-cell;\n      vertical-align: bottom;\n      position: relative;\n      width: 16.666%;\n      height: 250px;\n      background-repeat: no-repeat;\n      background-position: center center;\n      -webkit-transition: all 500ms ease;\n      transition: all 500ms ease; }\n\n.accordion ul li div {\n        display: block;\n        overflow: hidden;\n        width: 100%; }\n\n.accordion ul li div a {\n          display: block;\n          height: 250px;\n          width: 100%;\n          position: relative;\n          z-index: 3;\n          vertical-align: bottom;\n          padding: 15px 20px;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          color: #fff;\n          text-decoration: none;\n          font-family: Open Sans, sans-serif;\n          -webkit-transition: all 200ms ease;\n          transition: all 200ms ease; }\n\n.accordion ul li div a * {\n            opacity: 0;\n            margin: 0;\n            width: 100%;\n            text-overflow: ellipsis;\n            position: relative;\n            z-index: 5;\n            white-space: nowrap;\n            overflow: hidden;\n            -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n            -webkit-transition: all 400ms ease;\n            transition: all 400ms ease; }\n\n.accordion ul li div a h2 {\n            font-family: Montserrat,sans-serif;\n            text-overflow: clip;\n            font-size: 24px;\n            text-transform: uppercase;\n            margin-bottom: 2px;\n            top: 160px; }\n\n.accordion ul li div a p {\n            top: 160px;\n            font-size: 13.5px; }\n\n.accordion ul:hover li {\n      width: 8%; }\n\n.accordion ul:hover li:hover {\n      width: 60%; }\n\n.accordion ul:hover li:hover a {\n        background: rgba(0, 0, 0, 0.4); }\n\n.accordion ul:hover li:hover a * {\n          opacity: 1;\n          -webkit-transform: translateX(0);\n          transform: translateX(0); }\n\n@media screen and (max-width: 600px) {\n  body {\n    margin: 0; }\n  .accordion {\n    height: auto; }\n    .accordion ul li, .accordion ul li:hover, .accordion ul:hover li, .accordion ul:hover li:hover {\n      position: relative;\n      display: table;\n      table-layout: fixed;\n      width: 100%;\n      -webkit-transition: none;\n      transition: none; } }\n\n.about {\n  text-align: center;\n  font-size: 12px;\n  color: #666; }\n\n.about a {\n    color: blue;\n    text-decoration: none; }\n\n.about a:hover {\n      text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/porfolio-body/pprojects/pprojects.component.ts":
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
var PprojectsComponent = /** @class */ (function () {
    function PprojectsComponent() {
    }
    PprojectsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PprojectsComponent.prototype, "primaryUser", void 0);
    PprojectsComponent = __decorate([
        core_1.Component({
            selector: 'app-pprojects',
            template: __webpack_require__("../../../../../src/app/porfolio-body/pprojects/pprojects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/porfolio-body/pprojects/pprojects.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PprojectsComponent);
    return PprojectsComponent;
}());
exports.PprojectsComponent = PprojectsComponent;


/***/ }),

/***/ "../../../../../src/app/porfolio-body/pstacks/pstacks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body-pstacks\">\n\n\n    <!-- vertical -->\n\n    <h4>Skills</h4>\n    <div class=\"flip flip-vertical\"  *ngFor=\"let stack of primaryUser._skill\">\n      <div class=\"front\" [ngStyle]=\"{'background-image': 'url(' + stack.img + ')'}\">\n        <h1 class=\"text-shadow\">{{stack.title}}</h1>\n      </div>\n      <div class=\"back\">\n        <h2>{{stack.title}}</h2>\n        <p>{{stack.description}}</p>\n      </div>\n    </div>\n</div>\n    \n\n\n"

/***/ }),

/***/ "../../../../../src/app/porfolio-body/pstacks/pstacks.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-weight: normal; }\n\n.body-pstacks {\n  color: #555;\n  background: #222;\n  text-align: center;\n  padding: 1em; }\n\nh1 {\n  font-size: 2.2em; }\n\n.flip {\n  position: relative; }\n\n.flip > .front,\n.flip > .back {\n  display: block;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-transition-duration: .5s;\n          transition-duration: .5s;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform; }\n\n.flip > .front {\n  -webkit-transform: rotateY(0deg);\n          transform: rotateY(0deg); }\n\n.flip > .back {\n  position: absolute;\n  opacity: 0;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: rotateY(-180deg);\n          transform: rotateY(-180deg); }\n\n.flip:hover > .front {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\n.flip:hover > .back {\n  opacity: 1;\n  -webkit-transform: rotateY(0deg);\n          transform: rotateY(0deg); }\n\n.flip.flip-vertical > .back {\n  -webkit-transform: rotateX(-180deg);\n          transform: rotateX(-180deg); }\n\n.flip.flip-vertical:hover > .front {\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg); }\n\n.flip.flip-vertical:hover > .back {\n  -webkit-transform: rotateX(0deg);\n          transform: rotateX(0deg); }\n\n.flip {\n  position: relative;\n  display: inline-block;\n  margin-right: 4px;\n  margin-bottom: 1em;\n  width: 400px; }\n\n.flip > .front,\n.flip > .back {\n  display: block;\n  color: white;\n  width: inherit;\n  background-size: cover !important;\n  background-position: center !important;\n  height: 220px;\n  padding: 1em 2em;\n  background: #313131; }\n\n.flip > .front p,\n.flip > .back p {\n  font-size: 0.9125rem;\n  line-height: 160%;\n  color: #999; }\n\n.text-shadow {\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04), 3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04), 0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04), 7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04), 9px 9px rgba(0, 0, 0, 0.04), 0.3125rem 0.3125rem rgba(0, 0, 0, 0.04), 11px 11px rgba(0, 0, 0, 0.04), 12px 12px rgba(0, 0, 0, 0.04), 13px 13px rgba(0, 0, 0, 0.04), 14px 14px rgba(0, 0, 0, 0.04), 0.625rem 0.625rem rgba(0, 0, 0, 0.04), 16px 16px rgba(0, 0, 0, 0.04), 17px 17px rgba(0, 0, 0, 0.04), 18px 18px rgba(0, 0, 0, 0.04), 19px 19px rgba(0, 0, 0, 0.04), 1.25rem 1.25rem rgba(0, 0, 0, 0.04); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/porfolio-body/pstacks/pstacks.component.ts":
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
var PstacksComponent = /** @class */ (function () {
    function PstacksComponent() {
    }
    PstacksComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PstacksComponent.prototype, "primaryUser", void 0);
    PstacksComponent = __decorate([
        core_1.Component({
            selector: 'app-pstacks',
            template: __webpack_require__("../../../../../src/app/porfolio-body/pstacks/pstacks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/porfolio-body/pstacks/pstacks.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PstacksComponent);
    return PstacksComponent;
}());
exports.PstacksComponent = PstacksComponent;


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

/***/ "../../../../../src/app/server/controllers/message.service.ts":
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
var MessageService = /** @class */ (function () {
    function MessageService(_http) {
        this._http = _http;
    }
    MessageService.prototype.createMessage = function (newMessage) {
        return this._http.post("/message/create/" + newMessage._user, newMessage).map(function (data) { return data.json(); }).toPromise();
    };
    MessageService.prototype.showMessages = function () {
        return this._http.get("/messages").map(function (data) { return data.json(); }).toPromise();
    };
    MessageService.prototype.deleteMessage = function (id) {
        return this._http.get("/message/delete/" + id).map(function (data) { return data.json(); }).toPromise();
    };
    MessageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;


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

/***/ "../../../../../src/app/server/models/message.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */ (function () {
    function Message() {
        this.editable = false;
    }
    return Message;
}());
exports.Message = Message;


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