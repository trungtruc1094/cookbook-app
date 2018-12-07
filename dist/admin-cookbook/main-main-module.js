(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/@w11k/ngx-componentdestroyed/dist/es2015/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@w11k/ngx-componentdestroyed/dist/es2015/index.js ***!
  \************************************************************************/
/*! exports provided: componentDestroyed, untilComponentDestroyed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentDestroyed", function() { return componentDestroyed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untilComponentDestroyed", function() { return untilComponentDestroyed; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


function componentDestroyed(component) {
    var modifiedComponent = component;
    if (modifiedComponent.__componentDestroyed$) {
        return modifiedComponent.__componentDestroyed$;
    }
    var oldNgOnDestroy = component.ngOnDestroy;
    var stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
    modifiedComponent.ngOnDestroy = function () {
        oldNgOnDestroy && oldNgOnDestroy.apply(component);
        stop$.next(true);
        stop$.complete();
    };
    return modifiedComponent.__componentDestroyed$ = stop$.asObservable();
}
/**
 * @deprecated Use takeUntil(componentDestroyed(this)) instead
 */
function untilComponentDestroyed(component) {
    return function (source) { return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(componentDestroyed(component))); };
}


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-drop.directive.js ***!
  \*************************************************************************/
/*! no static exports found */
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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-item.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-item.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-like-object.class.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-select.directive.js ***!
  \***************************************************************************/
/*! no static exports found */
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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new core_1.EventEmitter();
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return {};
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileSelectDirective.prototype, "onFileSelected", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-type.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-type.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-upload.module.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_drop_directive_1 = __webpack_require__(/*! ./file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__(/*! ./file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-uploader.class.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__(/*! ./file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__(/*! ./file-type.class */ "./node_modules/ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: function (item) { return item._file; },
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new core_1.EventEmitter();
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var that = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            var appendFile = function () { return sendable.append(item.alias, item._file, item.file.name); };
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                });
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        };
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then(function (result) { return xhr.send(JSON.stringify(result)); });
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
    };
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    FileUploader.prototype._transformResponse = function (response, headers) {
        return response;
    };
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ "./node_modules/ng2-file-upload/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-file-upload/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./file-upload/file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js"));
var file_upload_module_1 = __webpack_require__(/*! ./file-upload/file-upload.module */ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ "./src/app/main/apps/apps.component.css":
/*!**********************************************!*\
  !*** ./src/app/main/apps/apps.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/apps/apps.component.html":
/*!***********************************************!*\
  !*** ./src/app/main/apps/apps.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/main/apps/apps.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/apps/apps.component.ts ***!
  \*********************************************/
/*! exports provided: AppsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsComponent", function() { return AppsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppsComponent = /** @class */ (function () {
    function AppsComponent() {
    }
    AppsComponent.prototype.ngOnInit = function () {
    };
    AppsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apps',
            template: __webpack_require__(/*! ./apps.component.html */ "./src/app/main/apps/apps.component.html"),
            styles: [__webpack_require__(/*! ./apps.component.css */ "./src/app/main/apps/apps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppsComponent);
    return AppsComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/appsdetail/appsdetail.component.css":
/*!***************************************************************!*\
  !*** ./src/app/main/apps/appsdetail/appsdetail.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* SEARCH BAR */\nform.form-search{\n    overflow: hidden;\n    width: 400px;\n    vertical-align: middle;\n    white-space: nowrap;\n  }\nform.form-search input#search{\n    width: 300px;\n    height: 40px;\n    margin-left: 15px;\n    background: #4859A1;\n    border: none;\n    font-size: 10pt;\n    float: left;\n    color: #fff;\n    padding-left: 15px;\n    border-radius: 5px;\n  }\n.form.form-search input#search::-webkit-input-placeholder {\n    color: #fff;\n }\n::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: rgb(175, 174, 174);\n}\n::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: rgb(175, 174, 174);\n}\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: rgb(175, 174, 174);\n}\n.form.form-search input#search:-moz-placeholder { /* Firefox 18- */\n    color: #fff;  \n }\n.form.form-search input#search::-moz-placeholder {  /* Firefox 19+ */\n    color: #fff;  \n }\n.form.form-search input#search:-ms-input-placeholder {  \n    color: #fff;  \n }\nform.form-search button.icon{\n    -webkit-border-top-right-radius: 5px;\n    -webkit-border-bottom-right-radius: 5px;\n    -moz-border-radius-topright: 5px;\n    -moz-border-radius-bottomright: 5px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n  \n    border: none;\n    background: #232833;\n    height: 40px;\n    width: 40px;\n    color: #4f5b66;\n    opacity: 0;\n    font-size: 10pt;\n    transition: all .55s ease;\n  }\nform.form-search button.icon.active {\n    outline: none;\n    opacity: 1;\n    margin-left: -40px;\n    background: white;\n  }\n/* form.form-search:hover button.icon {\n\n  } */\n/* ADD RECIPE BTN */\nbutton.btn-add {\n    color: #fff;\n    background-color: #4859a1;\n    border-color: #007bff;\n    font-weight: bold;\n  }\n/* EDIT BUTTON */\nbutton.btn-edit {\n      /* display: block; */\n      width: 90%;\n      background: #CEB6C5;\n      color: #fff;\n      font-weight: bold;\n      border-color: #CEB6C5;\n  }\n/* REMOVE BUTTON */\nbutton.btn-remove {\n    /* display: block;*/\n    width: 10%; \n    position: relative;\n    background: rgb(240, 24, 53);\n    color: #fff;\n    font-weight: bold;\n    border-color: rgb(240, 24, 53);;\n  }\ni.icon-remove {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    height: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    /* width: 10px;\n    height: 10px; */\n    display: block;\n    /* background: red; */\n  }\n\n  \n\n  \n "

/***/ }),

/***/ "./src/app/main/apps/appsdetail/appsdetail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/main/apps/appsdetail/appsdetail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- SEARCH AND ADD BUTTON -->\n  <div class=\"row\">\n    <div class=\"col-md-5 mr-auto\">\n      <form class=\"form-inline my-2 my-lg-0 form-search\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" id=\"search\" placeholder=\"Search\" [value]=\"searchContent\" [formControl]=\"searchContentControl\">\n        <button class=\"icon\"><i class=\"fa fa-search\"></i></button>\n      </form>\n    </div>\n    <div class=\"col-md-2 ml-auto\">\n      <div class=\"d-flex justify-content-end\">\n        <button type=\"button\" class=\"btn btn-add\" (click)=\"addRecipe()\">Add Recipe</button>\n      </div>\n    </div>\n  </div>\n\n  <!-- LIST OF RECIPE -->\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"d-flex flex-wrap py-4\" id=\"main\">\n        <div *ngFor=\"let recipe of recipeList; let i = index\">\n          <div class=\"card m-2\" style=\"width: 350px;\" *ngIf=\"recipe\">\n\n            <img class=\"card-img-top\" *ngIf=\"recipe && recipe.recipeImages && recipe.recipeImages.length > 0\" [src]=\"recipe.recipeImages[0]\"\n              alt=\"Card image cap\" (load)=\"isLoadingImageFn(i)\" width=\"100%\" height=\"200px\" style=\"position: relative; object-fit: cover;\">\n\n            <img class=\"card-img-top\" src=\"/assets/img/spinner.svg\" *ngIf=\"recipe && recipe.isLoadingImage\" width=\"100%\"\n              height=\"200px\" style=\"position: absolute;\">\n\n            <div class=\"card-body\">\n              <h5 class=\"card-title\" (click)=\"clickRecipeName(recipe.id)\">{{recipe.recipeName}}</h5>\n              <p class=\"card-text\" style=\"overflow : hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical;\">\n                {{recipe.recipeSubtitle}}\n              </p>\n              <div class=\"d-flex justify-content-center\">\n                <button href=\"#\" class=\"btn btn-primary flex-fill btn-edit mx-1\" (click)=\"editRecipe(recipe.id)\">EDIT</button>\n                <button href=\"#\" class=\"btn btn-danger flex-fill btn-remove mr-1\" (click)=\"confirmDeleteModal(i)\"><i\n                    class=\"fa fa-trash icon-remove\"></i></button>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- PAGINATION -->\n  <div class=\"row justify-content-center align-items-center\">\n    <div class=\"col-md-12\">\n      <!-- <button (click)=\"prevPage()\" [disabled]=\"!prevKeys?.length\">Prev</button>\n        <button (click)=\"nextPage()\" [disabled]=\"!nextKey\">Next</button> -->\n      <div style=\"text-align: center;\">\n        <button class=\"btn btn-primary mx-1 text-center\" (click)=\"prevPage()\" [disabled]=\"!prevKeys?.length\"><i class=\"fa fa-arrow-circle-left\"></i>\n          Prev</button>\n        <button class=\"btn btn-warning mx-1 text-center\" (click)=\"nextPage()\" [disabled]=\"!nextKey\">Next <i class=\"fa fa-arrow-circle-right\"></i></button>\n      </div>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/main/apps/appsdetail/appsdetail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/apps/appsdetail/appsdetail.component.ts ***!
  \**************************************************************/
/*! exports provided: AppsdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsdetailComponent", function() { return AppsdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _apps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apps.service */ "./src/app/main/apps/apps.service.ts");
/* harmony import */ var src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/helper.service */ "./src/app/shared/services/helper.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var _w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @w11k/ngx-componentdestroyed */ "./node_modules/@w11k/ngx-componentdestroyed/dist/es2015/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// declare var $clamp: any;
var AppsdetailComponent = /** @class */ (function () {
    function AppsdetailComponent(route, router, appsService, helperService, store) {
        this.route = route;
        this.router = router;
        this.appsService = appsService;
        this.helperService = helperService;
        this.store = store;
        this.appName = '';
        this.recipeList = [];
        this.appId = '';
        // Search Content
        this.searchContent = '';
        this.searchContentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
    }
    AppsdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.appName = params['app'];
        });
        this.route.queryParams.subscribe(function (queryParams) {
            _this.appId = queryParams['appId'];
            _this.appsService.getRecipeListFirst(_this.appId);
            // Search recipe
            _this.searchContentControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_6__["componentDestroyed"])(_this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500))
                .subscribe(function (newValue) {
                if (newValue == '') {
                    _this.appsService.getRecipeListFirst(_this.appId);
                }
                else {
                    _this.appsService.getRecipeListOnSearch(_this.appId, newValue);
                }
            });
        });
        this.appsService.nextKey$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_6__["componentDestroyed"])(this))).subscribe(function (res) {
            _this.nextKey = res;
        });
        this.appsService.prevKeys$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_6__["componentDestroyed"])(this))).subscribe(function (res) {
            _this.prevKeys = res;
        });
        this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getRecipeList"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_6__["componentDestroyed"])(this))).subscribe(function (res) {
            if (res && res.length == 0) {
                _this.recipeList = [];
            }
            else {
                _this.recipeList = res;
                if (_this.recipeList && _this.recipeList.length > 0) {
                    _this.recipeList.forEach(function (element) {
                        element['isLoadingImage'] = true;
                    });
                }
            }
        });
    };
    AppsdetailComponent.prototype.prevPage = function () {
        this.appsService.prevPage();
    };
    AppsdetailComponent.prototype.nextPage = function () {
        this.appsService.nextPage();
    };
    AppsdetailComponent.prototype.isLoadingImageFn = function (i) {
        this.recipeList[i]['isLoadingImage'] = false;
    };
    AppsdetailComponent.prototype.addRecipe = function () {
        this.router.navigate(['new'], { relativeTo: this.route, preserveQueryParams: true });
    };
    AppsdetailComponent.prototype.confirmDeleteModal = function (i) {
        var _this = this;
        this.helperService.confirmDialogComponent('Confirmation Dialog', 'Do you want to delete this recipe?', 'Yes', 'No', 'lg')
            .then(function (result) {
            if (result) {
                var recipeId = _this.recipeList[i].id;
                _this.recipeList.splice(i, 1);
                _this.appsService.removeRecipe(recipeId, _this.appId, function (resolve) {
                    _this.helperService.showPNotify('Success Message', resolve, 'success');
                }, function (error) {
                    _this.helperService.showPNotify('Error Message', error, 'error');
                });
            }
        });
    };
    AppsdetailComponent.prototype.clickRecipeName = function (id) {
        this.router.navigate([id], { relativeTo: this.route, preserveQueryParams: true });
    };
    AppsdetailComponent.prototype.editRecipe = function (id) {
        this.router.navigate([id, 'edit'], { relativeTo: this.route, preserveQueryParams: true });
    };
    AppsdetailComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            $('form.form-search #search').focusin(function () {
                $('form.form-search button.icon').addClass('active');
            });
            $('form.form-search #search').focusout(function () {
                $('form.form-search button.icon').removeClass('active');
            });
        });
    };
    AppsdetailComponent.prototype.ngOnDestroy = function () {
    };
    AppsdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appsdetail',
            template: __webpack_require__(/*! ./appsdetail.component.html */ "./src/app/main/apps/appsdetail/appsdetail.component.html"),
            styles: [__webpack_require__(/*! ./appsdetail.component.css */ "./src/app/main/apps/appsdetail/appsdetail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _apps_service__WEBPACK_IMPORTED_MODULE_2__["AppsService"], src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], AppsdetailComponent);
    return AppsdetailComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/appstart/appstart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/main/apps/appstart/appstart.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/apps/appstart/appstart.component.html":
/*!************************************************************!*\
  !*** ./src/app/main/apps/appstart/appstart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  appstart works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/apps/appstart/appstart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/apps/appstart/appstart.component.ts ***!
  \**********************************************************/
/*! exports provided: AppstartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppstartComponent", function() { return AppstartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppstartComponent = /** @class */ (function () {
    function AppstartComponent() {
    }
    AppstartComponent.prototype.ngOnInit = function () {
        console.log('App Start run');
    };
    AppstartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appstart',
            template: __webpack_require__(/*! ./appstart.component.html */ "./src/app/main/apps/appstart/appstart.component.html"),
            styles: [__webpack_require__(/*! ./appstart.component.css */ "./src/app/main/apps/appstart/appstart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppstartComponent);
    return AppstartComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/recipeaddnew/recipeaddnew.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/recipeaddnew/recipeaddnew.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form.validate .row.bordered {\n    background-color: #f5f5f5;\n    border-radius: 15px;\n    margin-bottom: 20px;\n}\n\n#subtitle {\n    height: 200px;\n    display: block;\n    width: 100%;\n}\n\nbutton.btn-primary {\n    border-radius: 100px;\n    border: 0;\n    background: linear-gradient(90deg,#07dabe,#31ed8c);\n    box-shadow: none!important;\n    color: #fff!important;\n    min-width: 140px;\n}\n\n.row .thumb {\n    position: relative;\n    width: 200px;\n    height: 200px;\n    margin: 0 15px 15px 0;\n    padding: 0;\n    text-align: center;\n    color: #ccc;\n    font-size: .9em;\n    border: 1px solid #ccc;\n    background: #fff;\n    cursor: move;\n    border-radius: 4px;\n    -moz-border-radius: 4px;\n    -webkit-border-radius: 4px;\n    float: left;\n    overflow: hidden;\n}\n\n.drop-zone input[type=file] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    cursor: pointer;\n}\n\n.progress-container {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: calc(50% - 10px);\n    bottom: 0;\n    padding: 10px;\n}\n\n.fix-thumb {\n    border: none!important;\n    vertical-align: middle!important;\n    float: none!important;\n    display: table-cell;\n    width: 200px;\n    height: 200px;\n}\n\n.fix-thumb img {\n    height: auto;\n    max-width: 100%;\n    border: 0;\n    vertical-align: middle;\n}\n\n.fix-icon {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    opacity: 0.5;\n    padding: 2px;\n    border-radius: 2px;\n}\n\n.fix-icon>button {\n    padding: 0;\n    border: none;\n    background: none;\n}\n\n/* TABLE */\n\n.upload-table {\n    table-layout: fixed;\n    width: 100%;\n    white-space: nowrap;\n  }\n\n.upload-table td {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n/* Column widths are based on these cells */\n\n.row-ID {\n    width: 20%;\n  }\n\n.row-progress {\n    width: 70%;\n  }\n\n.row-number {\n    width: 10%;\n  }\n\n/* Thumbnail Image */\n\n.thumbnail-image-show {\n    border-top-left-radius: calc(0.25rem - 1px);\n    border-top-right-radius: calc(0.25rem - 1px);\n    border-bottom-left-radius: calc(0.25rem - 1px);\n    border-bottom-right-radius: calc(0.25rem - 1px);\n    position: relative; \n    -o-object-fit: cover; \n       object-fit: cover;\n  }\n"

/***/ }),

/***/ "./src/app/main/apps/recipeaddnew/recipeaddnew.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main/apps/recipeaddnew/recipeaddnew.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- TITLE -->\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <a (click)=\"goBack()\" style=\"cursor: pointer;\"><i class=\"fa fa-arrow-left\"></i></a>\n    </div>\n    <div class=\"col-md-4 offset-md-1\">\n      <h3 align=\"center\">Add New Recipe</h3>\n    </div>\n  </div>\n\n  <!-- RECIPE DETAIL AND IMAGE -->\n  <div class=\"row\">\n    <div class=\"container-fluid m-4 form-box\">\n      <form name=\"userForm\" class=\"validate\" role=\"form\" [formGroup]=\"exampleForm\" novalidate (ngSubmit)=\"onSubmit(exampleForm.value, exampleForm.valid,$event)\">\n        <!-- RECIPE DETAIL -->\n        <div class=\"row bordered p-4\">\n          <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">User Details</div>\n          <div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9\">\n\n            <!-- Recipe : Name -->\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                <div class=\"form-group\">\n                  <label for=\"name\" class=\"label-custom\">Recipe Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter your recipe name\" formControlName=\"recipeName\"\n                    required />\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"exampleForm.controls.recipeName.invalid && exampleForm.controls['recipeName']?.touched\">\n                  <div [hidden]=\"!exampleForm.controls['recipeName'].errors.required\">\n                    Recipe Name field can't be blank\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Recipe : Cate -->\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                <div class=\"form-group\">\n                  <label for=\"category\" class=\"label-custom\">Recipe Category</label>\n                  <select class=\"custom-select\" formControlName=\"recipeCate\" required [disabled]=\"(isLoadingCate$ | async)\">\n                    <option selected>Open this select menu</option>\n                    <option *ngFor=\"let category of (categoryList$ | async)\" [value]=\"category.id\">{{category.category}}</option>\n                  </select>\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"exampleForm.controls.recipeCate.invalid\">\n                  <div [hidden]=\"!exampleForm.controls['recipeCate'].errors.required\">\n                    Please select a category\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Recipe : Subtitle -->\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                <div class=\"form-group\">\n                  <label for=\"subtitle\" class=\"label-custom\">Recipe Subtitle</label>\n                  <textarea id=\"subtitle\" name=\"subtitle\" placeholder=\"Write something..\" style=\"height:200px\"\n                    formControlName=\"recipeSubtitle\" required></textarea>\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"exampleForm.controls.recipeSubtitle.invalid && exampleForm.controls['recipeSubtitle']?.touched\">\n                  <div [hidden]=\"!exampleForm.controls['recipeSubtitle'].errors.required\">\n                    Recipe Subtitle field can't be blank\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Recipe : Ingredients -->\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                <div class=\"form-group\">\n                  <label for=\"inputIngredients\">Ingredients</label>\n                  <div class=\"form-row mb-1\">\n                    <div class=\"col-md-2\" style=\"text-align: left\">\n                      <button type=\"button\" name=\"add\" id=\"add\" class=\"btn btn-success\" (click)=\"addIngredientUnit()\">Add\n                        Ingredient</button>\n                    </div>\n                  </div>\n                  <div id=\"dynamicListIngredients\" formArrayName=\"ingredients\">\n                    <div *ngFor=\"let ingredient of exampleForm.controls.ingredients.controls; let i=index\">\n                      <div class=\"form-row mb-1\" [formGroupName]=\"i\">\n                        <div class=\"col-md-6\">\n                          <input type=\"text\" class=\"form-control\" id=\"inputIngredientName\" aria-describedby=\"emailHelp\"\n                            placeholder=\"\" formControlName=\"name\">\n                        </div>\n                        <div class=\"col-md-3\">\n                          <input type=\"text\" class=\"form-control\" id=\"inputIngredientAmount\" aria-describedby=\"emailHelp\"\n                            placeholder=\"\" formControlName=\"quantity\">\n                        </div>\n                        <div [ngClass]=\"{'col-md-3': exampleForm.controls.ingredients.controls.length == 1, 'col-md-2': exampleForm.controls.ingredients.controls.length > 1}\">\n                          <select id=\"inputIngredientsUnit\" class=\"form-control\" formControlName=\"unit\">\n                            <option *ngFor=\"let unit of units\" [value]=\"unit.id\">{{unit.title}}</option>\n                          </select>\n                        </div>\n                        <div class=\"col-md-1\" style=\"text-align: center\" *ngIf=\"exampleForm.controls.ingredients.controls.length > 1\">\n                          <button type=\"button\" name=\"add\" id=\"add\" style=\"width: 100%\" class=\"btn btn-danger\" (click)=\"removeIngredientUnit(i)\"><i\n                              class=\"fa fa-trash\"></i></button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!-- <div class=\"alert alert-danger\" *ngIf=\"exampleForm.controls.ingredients.controls.length > 1 && (!exampleForm.controls['ingredients']?.controls.name || !exampleForm.controls['ingredients']?.controls.quantity || !exampleForm.controls['ingredients']?.controls.unit)\">\n                  <div [hidden]=\"!exampleForm.controls['recipeSubtitle'].errors.required\">\n                    Please input at least 1 ingredient...\n                  </div>\n                </div> -->\n              </div>\n            </div>\n\n            <!-- Recipe : Duration & Level -->\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n                <div class=\"form-group\">\n                  <label for=\"duration\" class=\"label-custom\">Duration</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter your duration\" formControlName=\"duration\"\n                    required />\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"exampleForm.controls.duration.invalid && exampleForm.controls['duration']?.touched\">\n                  <div [hidden]=\"!exampleForm.controls['duration'].errors.required\">\n                    Recipe Duration field can't be blank\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n                <div class=\"form-group\">\n                  <label for=\"category\" class=\"label-custom\">Level</label>\n                  <select class=\"custom-select\" formControlName=\"level\">\n                    <option *ngFor=\"let level of levels\" [value]=\"level.id\">{{level.title}}</option>\n                  </select>\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"exampleForm.controls.level.invalid\">\n                  <div [hidden]=\"!exampleForm.controls['level'].errors.required\">\n                    Recipe Level field can't be blank\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Recipe : Prep Time & Serving -->\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n                <div class=\"form-group\">\n                  <label for=\"prep\" class=\"label-custom\">Prep Time</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter your prep time\" formControlName=\"prep\"\n                    required />\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"exampleForm.controls.prep.invalid && exampleForm.controls['prep']?.touched\">\n                  <div [hidden]=\"!exampleForm.controls['prep'].errors.required\">\n                    Recipe Prep field can't be blank\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n                <div class=\"form-group\">\n                  <label for=\"serving\" class=\"label-custom\">Serving</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter your serving\" formControlName=\"serving\"\n                    required />\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"exampleForm.controls.serving.invalid && exampleForm.controls['serving']?.touched\">\n                  <div [hidden]=\"!exampleForm.controls['serving'].errors.required\">\n                    Recipe Serving field can't be blank\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Recipe : Steps -->\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                <div class=\"form-group\">\n                  <label for=\"inputSteps\">Steps</label>\n                  <div class=\"form-row mb-1\">\n                    <div class=\"col-md-2\" style=\"text-align: left\">\n                      <button type=\"button\" name=\"add\" id=\"addStep\" class=\"btn btn-success\" (click)=\"addStepUnit()\">Add\n                        Step</button>\n                    </div>\n                  </div>\n                  <div id=\"dynamicListSteps\" formArrayName=\"steps\">\n                    <div *ngFor=\"let ingredient of exampleForm.controls.steps.controls; let i=index\">\n                      <div class=\"form-row mb-1\" [formGroupName]=\"i\">\n                        <div class=\"col-md-1\" style=\"text-align: center;\">\n                          <p class=\"no\">{{i+1}}.</p>\n                        </div>\n                        <div [ngClass]=\"{'col-md-11': exampleForm.controls.steps.controls.length == 1, 'col-md-10': exampleForm.controls.steps.controls.length > 1}\">\n                          <textarea id=\"step\" name=\"step\" placeholder=\"Write something..\" style=\"width:100%\"\n                            formControlName=\"step\"></textarea>\n                        </div>\n                        <div class=\"col-md-1\" style=\"text-align: right\" *ngIf=\"exampleForm.controls.steps.controls.length > 1\">\n                          <button type=\"button\" name=\"add\" id=\"addStep\" style=\"width: 100%\" class=\"btn btn-danger\"\n                            (click)=\"removeStepUnit(i)\"><i class=\"fa fa-trash\"></i></button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <!-- PHOTO DETAIL -->\n        <div class=\"row bordered p-4\">\n          <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">Photos</div>\n          <div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9\">\n\n            <div class=\"row\" *ngIf=\"isUploadingRecipe\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                <h5>Upload progress:</h5>\n                <table class=\"upload-table table\">\n                  <thead>\n                    <tr>\n                      <th class=\"row-1 row-name\">Name</th>\n                      <th class=\"row-2 row-progress\">Progress</th>\n                      <th class=\"row-3 row-number\">Number</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let upload of uploadingTasks\">\n                      <td><strong>{{ upload.fileName }}</strong></td>\n                      <td style=\"width: 100%\">\n                        <div class=\"progress\" style=\"margin-bottom: 0;\">\n                          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': (upload.percentage | async) + '%' }\"></div>\n                        </div>\n                      </td>\n                      <td style=\"width: 20px\">\n                        <!-- <h5>{{(upload.percentage | async)}}%</h5> -->\n                        <h5>{{ upload.percentage | async }}%</h5>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                <div *ngIf=\"images.length > 0\">\n                  <div id=\"drop-zone\" class=\"thumb dragdrop drop-zone\" *ngFor=\"let image of images; let i=index\">\n                    <div class=\"fix-icon\">\n                      <button type=\"button\" (click)=\"removeFile(i)\"><i class=\"fa fa-trash fa-2x\"></i></button>\n                    </div>\n                    <div class=\"fix-thumb\">\n                      <img class=\"img-responsive\" [src]=\"image\" />\n                    </div>\n                  </div>\n                </div>\n                <div id=\"drop-zone\" class=\"thumb dragdrop drop-zone\">\n                  <span style=\"position: absolute;left: calc(50% - 20px);top: calc(50% - 20px);\"><i class=\"fa fa-upload fa-3x\"></i></span>\n                  <input type=\"file\" value=\"\" accept=\"image/x-png, image/gif, image/jpeg\" (change)=\"onSelectFile($event)\"\n                    multiple=\"true\" />\n                </div>\n              </div>\n            </div>\n\n\n\n            <!-- <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th width=\"20%\">Name</th>\n                      <th>Size</th>\n                      <th>Progress</th>\n                      <th>Actions</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of uploader.queue\">\n                      <td><strong>{{ item?.file?.name }}</strong></td>\n                      <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                      <td>\n                        <div class=\"progress\" style=\"margin-bottom: 0;\">\n                          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                        </div>\n                      </td>\n                      <td nowrap>\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"item.remove()\">\n                          <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                        </button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div> -->\n\n\n\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                <div *ngIf=\"downloadURLs && downloadURLs.length > 0\">\n                  <h5>Results:</h5>\n                  <div class=\"row\">\n                    <div class=\"col-md-4\" *ngFor=\"let url of downloadURLs\">\n                      <div class=\"thumbnail\">\n                        <!-- <img [src]=\"url\" style=\"width:100%\"><br /> -->\n                        <img class=\"thumbnail-image-show\" [src]=\"url\" alt=\"Card image cap\" width=\"100%\" height=\"200px\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-4 offset-md-4\" style=\"text-align: center;\">\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"exampleForm.invalid\" [class.disabled]=\"isClickedOnce\"\n              (click)=\"isClickedOnce = true\" *ngIf=\"!isUploadingRecipe\">Save</button>\n            <app-spinner *ngIf=\"isUploadingRecipe\"></app-spinner>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/apps/recipeaddnew/recipeaddnew.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/apps/recipeaddnew/recipeaddnew.component.ts ***!
  \******************************************************************/
/*! exports provided: RecipeaddnewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeaddnewComponent", function() { return RecipeaddnewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _apps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apps.service */ "./src/app/main/apps/apps.service.ts");
/* harmony import */ var src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/helper.service */ "./src/app/shared/services/helper.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @w11k/ngx-componentdestroyed */ "./node_modules/@w11k/ngx-componentdestroyed/dist/es2015/index.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var _apps_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../apps.actions */ "./src/app/main/apps/apps.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RecipeaddnewComponent = /** @class */ (function () {
    function RecipeaddnewComponent(appsService, _fb, route, store, router, helperService) {
        this.appsService = appsService;
        this._fb = _fb;
        this.route = route;
        this.store = store;
        this.router = router;
        this.helperService = helperService;
        this.pnotify = undefined;
        this.uploadedFiles = [];
        this.images = [];
        this.selectImageChecked = false;
        this.uploadComplete = false;
        // Get value for unit and level
        this.units = this.helperService.ingredient_unit;
        this.levels = this.helperService.recipe_level;
        this.isUploadingRecipe = false;
        this.downloadURLs = [];
    }
    RecipeaddnewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.appParam = params['app'];
        });
        this.route.queryParams.subscribe(function (queryParams) {
            _this.appIdQueryParam = queryParams['appId'];
        });
        // Uploading Recipe
        this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_8__["getIsUploadingRecipe"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_7__["componentDestroyed"])(this))).subscribe(function (res) {
            _this.isUploadingRecipe = res;
        });
        this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_8__["getUploadingTask"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_7__["componentDestroyed"])(this))).subscribe(function (res) {
            _this.uploadingTasks = res;
        });
        this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_8__["getDownloadingURLs"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_7__["componentDestroyed"])(this))).subscribe(function (res) {
            _this.downloadURLs = res;
        });
        // Loading Category from Service
        this.appsService.getCategoryList();
        this.isLoadingCate$ = this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_8__["getIsLoadingCate"]);
        this.categoryList$ = this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_8__["getCategoryList"]);
        // Initialize form
        this.exampleForm = this._fb.group({
            recipeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            recipeCate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            recipeSubtitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ingredients: this._fb.array([
                this.getIngredientUnit()
            ]),
            duration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            level: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prep: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            serving: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            steps: this._fb.array([
                this.getStepUnit()
            ])
        });
    };
    // Select File and show preview before upload
    RecipeaddnewComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        this.selectImageChecked = true;
        if (event.target.files && event.target.files[0]) {
            this.uploadedFiles = event.target.files;
            for (var i = 0; i < this.uploadedFiles.length; i++) {
                var element = this.uploadedFiles[i];
                var reader = new FileReader();
                reader.readAsDataURL(element);
                reader.onload = function (event) {
                    _this.images.push(event.target.result);
                };
            }
        }
    };
    // Create new control ingredient
    RecipeaddnewComponent.prototype.getIngredientUnit = function () {
        return this._fb.group({
            name: [''],
            quantity: [''],
            unit: ['']
        });
    };
    // Create new control unit
    RecipeaddnewComponent.prototype.getStepUnit = function () {
        return this._fb.group({
            step: [''],
        });
    };
    RecipeaddnewComponent.prototype.removeFile = function (i) {
        this.images.splice(i, 1);
    };
    // Remove or Add ingredient unit
    RecipeaddnewComponent.prototype.addIngredientUnit = function () {
        var control = this.exampleForm.controls['ingredients'];
        control.push(this.getIngredientUnit());
    };
    RecipeaddnewComponent.prototype.removeIngredientUnit = function (i) {
        var control = this.exampleForm.controls['ingredients'];
        control.removeAt(i);
    };
    // Remove or Add step unit
    RecipeaddnewComponent.prototype.addStepUnit = function () {
        var control = this.exampleForm.controls['steps'];
        control.push(this.getStepUnit());
    };
    RecipeaddnewComponent.prototype.removeStepUnit = function (i) {
        var control = this.exampleForm.controls['steps'];
        control.removeAt(i);
    };
    // Click Submit form
    RecipeaddnewComponent.prototype.onSubmit = function (model, isValid, e) {
        var _this = this;
        e.preventDefault();
        // Get an array of files
        var fileArr = this.uploadedFiles;
        var recipeObj = {
            appId: this.appIdQueryParam,
            recipeName: model.recipeName,
            recipeCategory: model.recipeCate,
            recipeSubtitle: model.recipeSubtitle,
            recipeIngredients: model.ingredients,
            recipeDuration: model.duration,
            recipeLevel: model.level,
            recipePrep: model.prep,
            recipeServing: model.serving,
            recipeSteps: model.steps
        };
        this.appsService.addNewRecipe(fileArr, recipeObj, this.appIdQueryParam, function (resolve) {
            _this.store.dispatch(new _apps_actions__WEBPACK_IMPORTED_MODULE_9__["DownloadingURLs"](null));
            _this.helperService.showPNotify('Success Message', 'Upload Recipe successfully', 'success');
            _this.router.navigate(['../'], { relativeTo: _this.route, preserveQueryParams: true });
        }, function (error) {
            _this.helperService.showPNotify('Error Message', error, 'error');
        });
    };
    // Click Backbutton
    RecipeaddnewComponent.prototype.goBack = function () {
        this.router.navigate(['../'], { relativeTo: this.route, preserveQueryParams: true });
    };
    RecipeaddnewComponent.prototype.ngOnDestroy = function () { };
    RecipeaddnewComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            console.log('jQuery dashboard ready');
        });
    };
    RecipeaddnewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipeaddnew',
            template: __webpack_require__(/*! ./recipeaddnew.component.html */ "./src/app/main/apps/recipeaddnew/recipeaddnew.component.html"),
            styles: [__webpack_require__(/*! ./recipeaddnew.component.css */ "./src/app/main/apps/recipeaddnew/recipeaddnew.component.css")]
        }),
        __metadata("design:paramtypes", [_apps_service__WEBPACK_IMPORTED_MODULE_4__["AppsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]])
    ], RecipeaddnewComponent);
    return RecipeaddnewComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/recipedetail/recipedetail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/recipedetail/recipedetail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".step-number {\n    width: 24px;\n    height: 24px;\n    line-height: 24px;\n    font-size: 14px;\n    margin: 0 8px 0 0;\n    display: inline-block;\n    border-radius: 4px;\n    color: #ffffff;\n    background: #7b7769;\n    text-align: center;\n    counter-increment: numList;\n    content: counter(numList);\n    float: left;\n    margin-top: 0 !important;\n}\n\n.step {\n    margin-bottom: 15px;\n}\n\n.bordered {\n    background-color: #f5f5f5;\n    border-radius: 15px;\n    padding-bottom: 10px;\n    padding-top: 30px;\n    margin-bottom: 10px;\n}"

/***/ }),

/***/ "./src/app/main/apps/recipedetail/recipedetail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main/apps/recipedetail/recipedetail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- Title -->\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <a (click)=\"goBack()\" style=\"cursor: pointer;\"><i class=\"fa fa-arrow-left\"></i></a>\n    </div>\n  </div>\n\n  <app-spinner *ngIf=\"!recipe\"></app-spinner>\n\n  <div class=\"container-fluid\" *ngIf=\"recipe\">\n    <!-- Title -->\n    <div class=\"row justify-content-center\">\n      <div class=\"col-6 text-center\">\n        <h3 class=\"text-success\">{{recipe.recipeName}}</h3>\n      </div>\n    </div>\n\n    <div class=\"row justify-content-center\">\n      <div class=\"col-6 text-center bordered\">\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n          <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\" *ngFor=\"let url of recipe.recipeImages; let isFirstRow=first\" [ngClass]=\"{'active': isFirstRow}\">\n              <img class=\"d-block w-100\" [src]=\"url\" alt=\"First slide\" style=\"position: relative; object-fit: cover;\"\n                height=\"500px\">\n            </div>\n          </div>\n          <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </div>\n\n        <p class=\"my-2 text-left\">{{recipe.recipeSubtitle}}</p>\n\n        <p class=\"text-left font-weight-bold\">Category: <span class=\"font-weight-normal\">{{recipe.recipeCategory}}</span></p>\n        <p class=\"text-left font-weight-bold\">Prep Time: <span class=\"font-weight-normal\">{{recipe.recipePrep}}</span></p>\n        <p class=\"text-left font-weight-bold\">Cook Time: <span class=\"font-weight-normal\">{{recipe.recipeDuration}}</span></p>\n        <p class=\"text-left font-weight-bold\">Serving: <span class=\"font-weight-normal\">{{recipe.recipeServing}}</span></p>\n        <p class=\"text-left font-weight-bold\">Level: <span class=\"font-weight-normal\">{{recipe.recipeLevel}}</span></p>\n      </div>\n    </div>\n\n    <!-- Ingredients-->\n    <div class=\"row justify-content-center\">\n      <div class=\"col-6 bordered\">\n        <h4>Ingredients</h4>\n        <ul class=\"list-unstyled\">\n          <li *ngFor=\"let ingredient of recipe.recipeIngredients\"><span class=\"font-weight-bold\" *ngIf=\"ingredient.quantity && ingredient.quantity != 0\">{{ingredient.quantity}} </span><span class=\"font-weight-bold\" *ngIf=\"ingredient.unit\">{{ingredient.unit}} </span>{{ingredient.name}}</li>\n        </ul>\n      </div>\n    </div>\n\n    <!-- Steps -->\n    <div class=\"row justify-content-center\">\n      <div class=\"col-6 bordered\">\n        <h4>Steps</h4>\n\n        <div class=\"step-list\">\n\n          <div class=\"step\" *ngFor=\"let step of recipe.recipeSteps; let i = index\">\n            <div class=\"step-number\">{{i + 1}}</div>\n            <div class=\"step-desc\">{{step.step}}</div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/apps/recipedetail/recipedetail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/apps/recipedetail/recipedetail.component.ts ***!
  \******************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipeedit_recipeedit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipeedit/recipeedit.service */ "./src/app/main/apps/recipeedit/recipeedit.service.ts");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @w11k/ngx-componentdestroyed */ "./node_modules/@w11k/ngx-componentdestroyed/dist/es2015/index.js");
/* harmony import */ var src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/helper.service */ "./src/app/shared/services/helper.service.ts");
/* harmony import */ var _apps_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../apps.service */ "./src/app/main/apps/apps.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(route, router, recipeEditService, store, helperService, appsService) {
        this.route = route;
        this.router = router;
        this.recipeEditService = recipeEditService;
        this.store = store;
        this.helperService = helperService;
        this.appsService = appsService;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Start Recipe: ', this.recipe);
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.route.queryParams.subscribe(function (queryParams) {
                _this.appIdQueryParam = queryParams['appId'];
                _this.recipeEditService.getRecipe(_this.appIdQueryParam, _this.id);
            });
        });
        // For first init
        if (this.helperService.categories.length > 0 && this.helperService.categories) {
            this.getRecipeDetails();
        }
        else {
            this.helperService.categoriesList.subscribe(function (res) {
                if (res && res.length > 0) {
                    _this.getRecipeDetails();
                }
            });
        }
    };
    RecipeDetailComponent.prototype.getRecipeDetails = function () {
        var _this = this;
        this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_3__["getRecipe"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_6__["componentDestroyed"])(this))).subscribe(function (res) {
            if (res) {
                _this.recipe = lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"](res);
                _this.recipe.recipeCategory = _this.helperService.convertCategoryId(_this.recipe.recipeCategory);
                _this.recipe.recipeLevel = _this.helperService.convertLevelId(_this.recipe.recipeLevel);
                var newIngredients = [];
                for (var i = 0; i < _this.recipe.recipeIngredients.length; i++) {
                    var ingredient = _this.recipe.recipeIngredients[i];
                    if (ingredient.unit !== '') {
                        ingredient['unit'] = _this.helperService.convertUnitId(ingredient.unit);
                        newIngredients.push(ingredient);
                    }
                    else {
                        newIngredients.push(ingredient);
                    }
                }
                _this.recipe.recipeIngredients = newIngredients;
            }
        });
    };
    // Click Backbutton
    RecipeDetailComponent.prototype.goBack = function () {
        this.router.navigate(['../'], { relativeTo: this.route, preserveQueryParams: true });
        console.log('Recipe: ', this.recipe);
    };
    RecipeDetailComponent.prototype.ngOnDestroy = function () { };
    RecipeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipedetail',
            template: __webpack_require__(/*! ./recipedetail.component.html */ "./src/app/main/apps/recipedetail/recipedetail.component.html"),
            styles: [__webpack_require__(/*! ./recipedetail.component.css */ "./src/app/main/apps/recipedetail/recipedetail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _recipeedit_recipeedit_service__WEBPACK_IMPORTED_MODULE_2__["RecipeEditService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"],
            _apps_service__WEBPACK_IMPORTED_MODULE_8__["AppsService"]])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/recipeedit/recipeedit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/main/apps/recipeedit/recipeedit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form.validate .row.bordered {\n    background-color: #f5f5f5;\n    border-radius: 15px;\n    margin-bottom: 20px;\n}\n\n#subtitle {\n    height: 200px;\n    display: block;\n    width: 100%;\n}\n\nbutton.btn-primary {\n    border-radius: 100px;\n    border: 0;\n    background: linear-gradient(90deg,#07dabe,#31ed8c);\n    box-shadow: none!important;\n    color: #fff!important;\n    min-width: 140px;\n}\n\n.row .thumb {\n    position: relative;\n    width: 200px;\n    height: 200px;\n    margin: 0 15px 15px 0;\n    padding: 0;\n    text-align: center;\n    color: #ccc;\n    font-size: .9em;\n    border: 1px solid #ccc;\n    background: #fff;\n    cursor: move;\n    border-radius: 4px;\n    -moz-border-radius: 4px;\n    -webkit-border-radius: 4px;\n    float: left;\n    overflow: hidden;\n}\n\n.drop-zone input[type=file] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    cursor: pointer;\n}\n\n.progress-container {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: calc(50% - 10px);\n    bottom: 0;\n    padding: 10px;\n}\n\n.fix-thumb {\n    border: none!important;\n    vertical-align: middle!important;\n    float: none!important;\n    display: table-cell;\n    width: 200px;\n    height: 200px;\n}\n\n.fix-thumb img {\n    height: auto;\n    max-width: 100%;\n    border: 0;\n    vertical-align: middle;\n}\n\n.fix-icon {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    opacity: 0.5;\n    padding: 2px;\n    border-radius: 2px;\n}\n\n.fix-icon-result {\n    opacity: 0.8;\n}\n\n.fix-icon>button {\n    padding: 0;\n    border: none;\n    background: none;\n}\n\n/* TABLE */\n\n.upload-table {\n    table-layout: fixed;\n    width: 100%;\n    white-space: nowrap;\n  }\n\n.upload-table td {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n/* Column widths are based on these cells */\n\n.row-ID {\n    width: 20%;\n  }\n\n.row-progress {\n    width: 70%;\n  }\n\n.row-number {\n    width: 10%;\n  }\n\n/* Thumbnail Image */\n\n.thumbnail-image-show {\n    border-top-left-radius: calc(0.25rem - 1px);\n    border-top-right-radius: calc(0.25rem - 1px);\n    border-bottom-left-radius: calc(0.25rem - 1px);\n    border-bottom-right-radius: calc(0.25rem - 1px);\n    position: relative; \n    -o-object-fit: cover; \n       object-fit: cover;\n  }\n"

/***/ }),

/***/ "./src/app/main/apps/recipeedit/recipeedit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/main/apps/recipeedit/recipeedit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- TITLE -->\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <a (click)=\"goBack()\" style=\"cursor: pointer;\"><i class=\"fa fa-arrow-left\"></i></a>\n    </div>\n    <div class=\"col-md-4 offset-md-1\">\n      <h3 align=\"center\">Edit Recipe</h3>\n    </div>\n  </div>\n\n  <!-- RECIPE DETAIL AND IMAGE -->\n  <div class=\"row\">\n    <div class=\"container-fluid m-4 form-box\">\n      <form name=\"userForm\" class=\"validate\" role=\"form\" [formGroup]=\"exampleForm\" novalidate (ngSubmit)=\"onSubmit(exampleForm.value, exampleForm.valid,$event)\">\n        <!-- RECIPE DETAIL -->\n        <div class=\"row bordered p-4\">\n          <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">User Details</div>\n          <div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9\">\n\n            <!-- Recipe : Name -->\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                <div class=\"form-group\">\n                  <label for=\"name\" class=\"label-custom\">Recipe Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter your recipe name\" formControlName=\"recipeName\"\n                    required />\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"exampleForm.controls.recipeName.invalid && exampleForm.controls['recipeName']?.touched\">\n                  <div [hidden]=\"!exampleForm.controls['recipeName'].errors.required\">\n                    Recipe Name field can't be blank\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Recipe : Cate -->\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                <div class=\"form-group\">\n                  <label for=\"category\" class=\"label-custom\">Recipe Category</label>\n                  <select class=\"custom-select\" formControlName=\"recipeCate\" required [disabled]=\"(isLoadingCate$ | async)\">\n                    <option selected>Open this select menu</option>\n                    <option *ngFor=\"let category of (categoryList$ | async)\" [value]=\"category.id\">{{category.category}}</option>\n                  </select>\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"exampleForm.controls.recipeCate.invalid\">\n                  <div [hidden]=\"!exampleForm.controls['recipeCate'].errors.required\">\n                    Please select a category\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Recipe : Subtitle -->\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                <div class=\"form-group\">\n                  <label for=\"subtitle\" class=\"label-custom\">Recipe Subtitle</label>\n                  <textarea id=\"subtitle\" name=\"subtitle\" placeholder=\"Write something..\" style=\"height:200px\"\n                    formControlName=\"recipeSubtitle\" required></textarea>\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"exampleForm.controls.recipeSubtitle.invalid && exampleForm.controls['recipeSubtitle']?.touched\">\n                  <div [hidden]=\"!exampleForm.controls['recipeSubtitle'].errors.required\">\n                    Recipe Subtitle field can't be blank\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Recipe : Ingredients -->\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                <div class=\"form-group\">\n                  <label for=\"inputIngredients\">Ingredients</label>\n                  <div class=\"form-row mb-1\">\n                    <div class=\"col-md-2\" style=\"text-align: left\">\n                      <button type=\"button\" name=\"add\" id=\"add\" class=\"btn btn-success\" (click)=\"addIngredientUnit()\">Add\n                        Ingredient</button>\n                    </div>\n                  </div>\n                  <div id=\"dynamicListIngredients\" formArrayName=\"ingredients\">\n                    <div *ngFor=\"let ingredient of exampleForm.controls.ingredients.controls; let i=index\">\n                      <div class=\"form-row mb-1\" [formGroupName]=\"i\">\n                        <div class=\"col-md-6\">\n                          <input type=\"text\" class=\"form-control\" id=\"inputIngredientName\" aria-describedby=\"emailHelp\"\n                            placeholder=\"\" formControlName=\"name\">\n                        </div>\n                        <div class=\"col-md-3\">\n                          <input type=\"text\" class=\"form-control\" id=\"inputIngredientAmount\" aria-describedby=\"emailHelp\"\n                            placeholder=\"\" formControlName=\"quantity\">\n                        </div>\n                        <div [ngClass]=\"{'col-md-3': exampleForm.controls.ingredients.controls.length == 1, 'col-md-2': exampleForm.controls.ingredients.controls.length > 1}\">\n                          <select id=\"inputIngredientsUnit\" class=\"form-control\" formControlName=\"unit\">\n                            <option *ngFor=\"let unit of units\" [value]=\"unit.id\">{{unit.title}}</option>\n                          </select>\n                        </div>\n                        <div class=\"col-md-1\" style=\"text-align: center\" *ngIf=\"exampleForm.controls.ingredients.controls.length > 1\">\n                          <button type=\"button\" name=\"add\" id=\"add\" style=\"width: 100%\" class=\"btn btn-danger\" (click)=\"removeIngredientUnit(i)\"><i\n                              class=\"fa fa-trash\"></i></button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Recipe : Duration & Level -->\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n                <div class=\"form-group\">\n                  <label for=\"duration\" class=\"label-custom\">Duration</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter your duration\" formControlName=\"duration\"\n                    required />\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"exampleForm.controls.duration.invalid && exampleForm.controls['duration']?.touched\">\n                  <div [hidden]=\"!exampleForm.controls['duration'].errors.required\">\n                    Recipe Duration field can't be blank\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n                <div class=\"form-group\">\n                  <label for=\"category\" class=\"label-custom\">Level</label>\n                  <select class=\"custom-select\" formControlName=\"level\">\n                    <option *ngFor=\"let level of levels\" [value]=\"level.id\">{{level.title}}</option>\n                  </select>\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"exampleForm.controls.level.invalid\">\n                  <div [hidden]=\"!exampleForm.controls['level'].errors.required\">\n                    Recipe Level field can't be blank\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Recipe : Prep Time & Serving -->\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n                <div class=\"form-group\">\n                  <label for=\"prep\" class=\"label-custom\">Prep Time</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter your prep time\" formControlName=\"prep\"\n                    required />\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"exampleForm.controls.prep.invalid && exampleForm.controls['prep']?.touched\">\n                  <div [hidden]=\"!exampleForm.controls['prep'].errors.required\">\n                    Recipe Prep field can't be blank\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n                <div class=\"form-group\">\n                  <label for=\"serving\" class=\"label-custom\">Serving</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter your serving\" formControlName=\"serving\"\n                    required />\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"exampleForm.controls.serving.invalid && exampleForm.controls['serving']?.touched\">\n                  <div [hidden]=\"!exampleForm.controls['serving'].errors.required\">\n                    Recipe Serving field can't be blank\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Recipe : Steps -->\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                <div class=\"form-group\">\n                  <label for=\"inputSteps\">Steps</label>\n                  <div class=\"form-row mb-1\">\n                    <div class=\"col-md-2\" style=\"text-align: left\">\n                      <button type=\"button\" name=\"add\" id=\"addStep\" class=\"btn btn-success\" (click)=\"addStepUnit()\">Add\n                        Step</button>\n                    </div>\n                  </div>\n                  <div id=\"dynamicListSteps\" formArrayName=\"steps\">\n                    <div *ngFor=\"let ingredient of exampleForm.controls.steps.controls; let i=index\">\n                      <div class=\"form-row mb-1\" [formGroupName]=\"i\">\n                        <div class=\"col-md-1\" style=\"text-align: center;\">\n                          <p class=\"no\">{{i+1}}.</p>\n                        </div>\n                        <div [ngClass]=\"{'col-md-11': exampleForm.controls.steps.controls.length == 1, 'col-md-10': exampleForm.controls.steps.controls.length > 1}\">\n                          <textarea id=\"step\" name=\"step\" placeholder=\"Write something..\" style=\"width:100%\"\n                            formControlName=\"step\"></textarea>\n                        </div>\n                        <div class=\"col-md-1\" style=\"text-align: right\" *ngIf=\"exampleForm.controls.steps.controls.length > 1\">\n                          <button type=\"button\" name=\"add\" id=\"addStep\" style=\"width: 100%\" class=\"btn btn-danger\"\n                            (click)=\"removeStepUnit(i)\"><i class=\"fa fa-trash\"></i></button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <!-- PHOTO DETAIL -->\n        <div class=\"row bordered p-4\">\n          <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">Photos</div>\n          <div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9\">\n\n            <div class=\"row\" *ngIf=\"isUploadingRecipe\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                <h5>Upload progress:</h5>\n                <table class=\"upload-table table\">\n                  <thead>\n                    <tr>\n                      <th class=\"row-1 row-name\">Name</th>\n                      <th class=\"row-2 row-progress\">Progress</th>\n                      <th class=\"row-3 row-number\">Number</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let upload of uploadingTasks\">\n                      <td><strong>{{ upload.fileName }}</strong></td>\n                      <td style=\"width: 100%\">\n                        <div class=\"progress\" style=\"margin-bottom: 0;\">\n                          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': (upload.percentage | async) + '%' }\"></div>\n                        </div>\n                      </td>\n                      <td style=\"width: 20px\">\n                        <h5>{{(upload.percentage | async)}}%</h5>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                <div *ngIf=\"images.length > 0\">\n                  <div id=\"drop-zone\" class=\"thumb dragdrop drop-zone\" *ngFor=\"let image of images; let i=index\">\n                    <div class=\"fix-icon\">\n                      <button type=\"button\" (click)=\"removeFile(i)\"><i class=\"fa fa-trash fa-2x\"></i></button>\n                    </div>\n                    <div class=\"fix-thumb\">\n                      <img class=\"img-responsive\" [src]=\"image\" />\n                    </div>\n                  </div>\n                </div>\n                <div id=\"drop-zone\" class=\"thumb dragdrop drop-zone\">\n                  <span style=\"position: absolute;left: calc(50% - 20px);top: calc(50% - 20px);\"><i class=\"fa fa-upload fa-3x\"></i></span>\n                  <input type=\"file\" value=\"\" accept=\"image/x-png, image/gif, image/jpeg\" (change)=\"onSelectFile($event)\"\n                    multiple=\"true\" />\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                <div *ngIf=\"recipe\">\n                  <h5>Results:</h5>\n                  <div class=\"row\">\n                    <div class=\"col-md-4\" *ngFor=\"let url of recipe.recipeImages; let i = index\">\n                      <div class=\"thumbnail m-2\">\n                        <div>\n                          <img class=\"thumbnail-image-show\" [src]=\"url\" alt=\"Card image cap\" width=\"100%\" height=\"200px\"\n                            style=\"position: relative; object-fit: cover;\">\n                        </div>\n                        <div class=\"fix-icon fix-icon-result\">\n                          <button type=\"button\" (click)=\"removeImage(i)\"><i class=\"fa fa-trash fa-2x\"></i></button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-4 offset-md-4\" style=\"text-align: center;\">\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"exampleForm.invalid\" [class.disabled]=\"isClickedOnce\"\n              (click)=\"isClickedOnce = true\" *ngIf=\"!isUploadingRecipe\">Update</button>\n            <app-spinner *ngIf=\"isUploadingRecipe\"></app-spinner>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/apps/recipeedit/recipeedit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/apps/recipeedit/recipeedit.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditComponent", function() { return RecipeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipeedit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipeedit.service */ "./src/app/main/apps/recipeedit/recipeedit.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var _apps_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apps.actions */ "./src/app/main/apps/apps.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @w11k/ngx-componentdestroyed */ "./node_modules/@w11k/ngx-componentdestroyed/dist/es2015/index.js");
/* harmony import */ var _apps_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../apps.service */ "./src/app/main/apps/apps.service.ts");
/* harmony import */ var src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/helper.service */ "./src/app/shared/services/helper.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var RecipeEditComponent = /** @class */ (function () {
    function RecipeEditComponent(route, recipeEditService, _fb, router, store, appsService, helperService) {
        this.route = route;
        this.recipeEditService = recipeEditService;
        this._fb = _fb;
        this.router = router;
        this.store = store;
        this.appsService = appsService;
        this.helperService = helperService;
        this.uploadedFiles = [];
        this.images = [];
        // Get value for unit and level
        this.units = this.helperService.ingredient_unit;
        this.levels = this.helperService.recipe_level;
        this.isUploadingRecipe = false;
        this.downloadURLs = [];
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_4__["getRecipe"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_8__["componentDestroyed"])(this))).subscribe(function (res) {
            if (res) {
                _this.recipe = res;
                _this.updateValues(res);
            }
        });
        this.route.params.subscribe(function (params) {
            _this.appParam = params['app'];
        });
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.route.queryParams.subscribe(function (queryParams) {
                _this.appIdQueryParam = queryParams['appId'];
                _this.recipeEditService.getRecipe(_this.appIdQueryParam, _this.id);
            });
        });
        // Uploading Recipe
        this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_4__["getIsUploadingRecipe"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_8__["componentDestroyed"])(this))).subscribe(function (res) {
            _this.isUploadingRecipe = res;
        });
        this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_4__["getUploadingTask"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_8__["componentDestroyed"])(this))).subscribe(function (res) {
            _this.uploadingTasks = res;
        });
        this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_4__["getDownloadingURLs"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_8__["componentDestroyed"])(this))).subscribe(function (res) {
            _this.downloadURLs = res;
        });
        // Loading Category from Service
        this.appsService.getCategoryList();
        this.isLoadingCate$ = this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_4__["getIsLoadingCate"]);
        this.categoryList$ = this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_4__["getCategoryList"]);
        // Initialize form
        this.exampleForm = this._fb.group({
            recipeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            recipeCate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            recipeSubtitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ingredients: this._fb.array([]),
            duration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            level: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            prep: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            serving: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            steps: this._fb.array([])
        });
    };
    // Select File and show preview before upload
    RecipeEditComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.uploadedFiles = event.target.files;
            for (var i = 0; i < this.uploadedFiles.length; i++) {
                var element = this.uploadedFiles[i];
                var reader = new FileReader();
                reader.readAsDataURL(element);
                reader.onload = function (event) {
                    _this.images.push(event.target.result);
                };
            }
        }
    };
    RecipeEditComponent.prototype.updateValues = function (recipe) {
        if (this.exampleForm) {
            this.exampleForm.patchValue({
                recipeName: recipe.recipeName,
                recipeCate: recipe.recipeCategory,
                recipeSubtitle: recipe.recipeSubtitle,
                ingredients: recipe.recipeIngredients,
                duration: recipe.recipeDuration,
                level: recipe.recipeLevel,
                prep: recipe.recipePrep,
                serving: recipe.recipeServing
            });
            this.initIngredient();
            this.initStep();
        }
    };
    // Init ingredient
    RecipeEditComponent.prototype.initIngredient = function () {
        var _this = this;
        var control = this.exampleForm.controls['ingredients'];
        this.recipe.recipeIngredients.forEach(function (element) {
            control.push(_this._fb.group({
                name: [element.name],
                quantity: [element.quantity],
                unit: [element.unit]
            }));
        });
    };
    // Init step
    RecipeEditComponent.prototype.initStep = function () {
        var _this = this;
        var control = this.exampleForm.controls['steps'];
        this.recipe.recipeSteps.forEach(function (element) {
            control.push(_this._fb.group({
                step: [element.step]
            }));
        });
    };
    RecipeEditComponent.prototype.getIngredientUnit = function () {
        return this._fb.group({
            name: [''],
            quantity: [''],
            unit: ['']
        });
    };
    RecipeEditComponent.prototype.getStepUnit = function () {
        return this._fb.group({
            step: [''],
        });
    };
    // Remove or Add ingredient unit
    RecipeEditComponent.prototype.addIngredientUnit = function () {
        var control = this.exampleForm.controls['ingredients'];
        control.push(this.getIngredientUnit());
    };
    RecipeEditComponent.prototype.removeIngredientUnit = function (i) {
        var control = this.exampleForm.controls['ingredients'];
        control.removeAt(i);
    };
    // Remove or Add step unit
    RecipeEditComponent.prototype.addStepUnit = function () {
        var control = this.exampleForm.controls['steps'];
        control.push(this.getStepUnit());
    };
    RecipeEditComponent.prototype.removeStepUnit = function (i) {
        var control = this.exampleForm.controls['steps'];
        control.removeAt(i);
    };
    RecipeEditComponent.prototype.removeFile = function (i) {
        lodash__WEBPACK_IMPORTED_MODULE_11__["pullAt"](this.images, [i]);
    };
    RecipeEditComponent.prototype.removeImage = function (i) {
        lodash__WEBPACK_IMPORTED_MODULE_11__["pullAt"](this.recipe.recipeImages, [i]);
    };
    RecipeEditComponent.prototype.onSubmit = function (model, isValid, e) {
        var _this = this;
        e.preventDefault();
        // Get an array of files
        var fileArr = this.uploadedFiles;
        var recipeObj = {
            id: this.recipe.id,
            appId: this.appIdQueryParam,
            recipeName: model.recipeName,
            recipeCategory: model.recipeCate,
            recipeSubtitle: model.recipeSubtitle,
            recipeIngredients: model.ingredients,
            recipeDuration: model.duration,
            recipeLevel: model.level,
            recipeSteps: model.steps,
            recipePrep: model.prep,
            recipeServing: model.serving,
            recipeImages: this.recipe.recipeImages
        };
        this.recipeEditService.updateRecipe(fileArr, recipeObj, this.appIdQueryParam, function (resolve) {
            _this.store.dispatch(new _apps_actions__WEBPACK_IMPORTED_MODULE_5__["DownloadingURLs"](null));
            _this.helperService.showPNotify('Success Message', 'Updating Recipe successfully', 'success');
            _this.router.navigate(['../../'], { relativeTo: _this.route, preserveQueryParams: true });
        }, function (error) {
            _this.helperService.showPNotify('Error Message', error, 'error');
        });
    };
    // Click Backbutton
    RecipeEditComponent.prototype.goBack = function () {
        this.router.navigate(['../../'], { relativeTo: this.route, preserveQueryParams: true });
    };
    RecipeEditComponent.prototype.ngOnDestroy = function () { };
    RecipeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipeedit',
            template: __webpack_require__(/*! ./recipeedit.component.html */ "./src/app/main/apps/recipeedit/recipeedit.component.html"),
            styles: [__webpack_require__(/*! ./recipeedit.component.css */ "./src/app/main/apps/recipeedit/recipeedit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _recipeedit_service__WEBPACK_IMPORTED_MODULE_2__["RecipeEditService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _apps_service__WEBPACK_IMPORTED_MODULE_9__["AppsService"],
            src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_10__["HelperService"]])
    ], RecipeEditComponent);
    return RecipeEditComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/recipeedit/recipeedit.service.ts":
/*!************************************************************!*\
  !*** ./src/app/main/apps/recipeedit/recipeedit.service.ts ***!
  \************************************************************/
/*! exports provided: RecipeEditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditService", function() { return RecipeEditService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/helper.service */ "./src/app/shared/services/helper.service.ts");
/* harmony import */ var src_app_shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/firebase.service */ "./src/app/shared/services/firebase.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _apps_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apps.actions */ "./src/app/main/apps/apps.actions.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RecipeEditService = /** @class */ (function () {
    function RecipeEditService(helperService, firebaseService, store, afStorage, afStore) {
        this.helperService = helperService;
        this.firebaseService = firebaseService;
        this.store = store;
        this.afStorage = afStorage;
        this.afStore = afStore;
    }
    RecipeEditService.prototype.getRecipe = function (appId, id) {
        var _this = this;
        this.firebaseService.getDocumentInCollectionOfDocument('availableApps', appId, 'recipeList', id).subscribe(function (res) {
            _this.store.dispatch(new _apps_actions__WEBPACK_IMPORTED_MODULE_4__["SendingRecipe"](res));
        });
    };
    RecipeEditService.prototype.updateRecipe = function (fileArr, recipeObj, appId, callback, callbackError) {
        var _this = this;
        var downloadURLs = [];
        var fileList = fileArr;
        var uploads = [];
        if (fileList && fileList.length > 0) {
            console.log('Uploading with file');
            var _loop_1 = function (file) {
                var fileName = file.name;
                var path = "files/" + fileName;
                var ref = this_1.afStorage.ref(path);
                var task = this_1.afStorage.upload(path, file);
                var percentage$ = task.percentageChanges();
                var uploadFile = {
                    fileName: fileName,
                    percentage: percentage$
                };
                uploads.push(uploadFile);
                this_1.store.dispatch(new _apps_actions__WEBPACK_IMPORTED_MODULE_4__["UploadingRecipe"](uploads));
                // get notified when the download URL is available
                task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                    ref.getDownloadURL().subscribe(function (res) {
                        downloadURLs.push(res);
                        if (downloadURLs.length == fileArr.length) {
                            var recipeObject = __assign({}, recipeObj, { recipeImages: lodash__WEBPACK_IMPORTED_MODULE_8__["concat"](recipeObj.recipeImages, downloadURLs) });
                            _this.store.dispatch(new _apps_actions__WEBPACK_IMPORTED_MODULE_4__["DownloadingURLs"](recipeObject.recipeImages));
                            _this.firebaseService.updateDocumentOfCollectionInDocument('availableApps', appId, 'recipeList', recipeObject).then(function (res) {
                                _this.store.dispatch(new _apps_actions__WEBPACK_IMPORTED_MODULE_4__["UnUploadingRecipe"]());
                                callback('Updating recipe successfully');
                            })
                                .catch(function (error) {
                                callbackError('Unable to add recipe');
                            });
                        }
                    });
                })).subscribe();
            };
            var this_1 = this;
            for (var _i = 0, fileList_1 = fileList; _i < fileList_1.length; _i++) {
                var file = fileList_1[_i];
                _loop_1(file);
            }
        }
        else {
            console.log('Uploading without file');
            this.store.dispatch(new _apps_actions__WEBPACK_IMPORTED_MODULE_4__["UploadingRecipe"](null));
            var recipeObject = __assign({}, recipeObj, { recipeImages: recipeObj.recipeImages });
            this.firebaseService.updateDocumentOfCollectionInDocument('availableApps', appId, 'recipeList', recipeObject).then(function (res) {
                _this.store.dispatch(new _apps_actions__WEBPACK_IMPORTED_MODULE_4__["UnUploadingRecipe"]());
                callback('Updating recipe successfully');
            })
                .catch(function (error) {
                callbackError('Unable to add recipe');
            });
        }
    };
    RecipeEditService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"],
            src_app_shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]])
    ], RecipeEditService);
    return RecipeEditService;
}());



/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ACTIONS -->\n<section id=\"actions\" class=\"py-4 mb-2 bg-light\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <a href=\"#\" class=\"btn btn-primary btn-block\" data-toggle=\"modal\" data-target=\"#addAppModal\">\n          <i class=\"fa fa-plus\"></i> Add App\n        </a>\n      </div>\n      <div class=\"col-md-3\">\n        <a (click)=\"clickCateModal()\" class=\"btn btn-success btn-block\" data-toggle=\"modal\" data-target=\"#addCategoryModal\">\n          <i class=\"fa fa-plus\"></i> Add Category\n        </a>\n      </div>\n      <div class=\"col-md-3\">\n        <a href=\"#\" class=\"btn btn-warning btn-block\" data-toggle=\"modal\" data-target=\"#addUserModal\">\n          <i class=\"fa fa-plus\"></i> Add User\n        </a>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- SUMMARY SECTION -->\n<section id=\"summary\" class=\"py-3 mb-2 bg-light\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"card text-center bg-primary text-white mb-3\">\n          <div class=\"card-body\">\n            <h3>Apps</h3>\n            <h4 class=\"display-4\"><i class=\"fa fa-pencil-alt\"></i> 6</h4>\n            <a href=\"posts.html\" class=\"btn btn-outline-light btn-sm\">View</a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-3\">\n        <div class=\"card text-center bg-success text-white mb-3\">\n          <div class=\"card-body\">\n            <h3>Categories</h3>\n            <h4 class=\"display-4\"><i class=\"fa fa-folder\"></i> 4</h4>\n            <a href=\"categories.html\" class=\"btn btn-outline-light btn-sm\">View</a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-3\">\n        <div class=\"card text-center bg-warning text-white mb-3\">\n          <div class=\"card-body\">\n            <h3>Users</h3>\n            <h4 class=\"display-4\"><i class=\"fa fa-users\"></i> 4</h4>\n            <a href=\"users.html\" class=\"btn btn-outline-light btn-sm\">View</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- POSTS -->\n<section id=\"posts\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12 my-3\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Latest Posts</h4>\n          </div>\n          <table class=\"table table-striped\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th>#</th>\n                <th>Title</th>\n                <th>Category</th>\n                <th>Date</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>1</td>\n                <td>Post One</td>\n                <td>Web Development</td>\n                <td>May 10 2018</td>\n                <td>\n                  <a href=\"details.html\" class=\"btn btn-secondary\">\n                    <i class=\"fa fa-angle-double-right\"></i> Details\n                  </a>\n                </td>\n              </tr>\n              <tr>\n                <td>2</td>\n                <td>Post Two</td>\n                <td>Tech Gadgets</td>\n                <td>May 11 2018</td>\n                <td>\n                  <a href=\"details.html\" class=\"btn btn-secondary\">\n                    <i class=\"fa fa-angle-double-right\"></i> Details\n                  </a>\n                </td>\n              </tr>\n              <tr>\n                <td>3</td>\n                <td>Post Three</td>\n                <td>Web Development</td>\n                <td>May 13 2018</td>\n                <td>\n                  <a href=\"details.html\" class=\"btn btn-secondary\">\n                    <i class=\"fa fa-angle-double-right\"></i> Details\n                  </a>\n                </td>\n              </tr>\n              <tr>\n                <td>4</td>\n                <td>Post Four</td>\n                <td>Business</td>\n                <td>May 15 2018</td>\n                <td>\n                  <a href=\"details.html\" class=\"btn btn-secondary\">\n                    <i class=\"fa fa-angle-double-right\"></i> Details\n                  </a>\n                </td>\n              </tr>\n              <tr>\n                <td>5</td>\n                <td>Post Five</td>\n                <td>Web Development</td>\n                <td>May 17 2018</td>\n                <td>\n                  <a href=\"details.html\" class=\"btn btn-secondary\">\n                    <i class=\"fa fa-angle-double-right\"></i> Details\n                  </a>\n                </td>\n              </tr>\n              <tr>\n                <td>6</td>\n                <td>Post Six</td>\n                <td>Health & Wellness</td>\n                <td>May 20 2018</td>\n                <td>\n                  <a href=\"details.html\" class=\"btn btn-secondary\">\n                    <i class=\"fa fa-angle-double-right\"></i> Details\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 my-3\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Latest Posts</h4>\n          </div>\n          <table class=\"table table-striped\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th>#</th>\n                <th>Title</th>\n                <th>Category</th>\n                <th>Date</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>1</td>\n                <td>Post One</td>\n                <td>Web Development</td>\n                <td>May 10 2018</td>\n                <td>\n                  <a href=\"details.html\" class=\"btn btn-secondary\">\n                    <i class=\"fa fa-angle-double-right\"></i> Details\n                  </a>\n                </td>\n              </tr>\n              <tr>\n                <td>2</td>\n                <td>Post Two</td>\n                <td>Tech Gadgets</td>\n                <td>May 11 2018</td>\n                <td>\n                  <a href=\"details.html\" class=\"btn btn-secondary\">\n                    <i class=\"fa fa-angle-double-right\"></i> Details\n                  </a>\n                </td>\n              </tr>\n              <tr>\n                <td>3</td>\n                <td>Post Three</td>\n                <td>Web Development</td>\n                <td>May 13 2018</td>\n                <td>\n                  <a href=\"details.html\" class=\"btn btn-secondary\">\n                    <i class=\"fa fa-angle-double-right\"></i> Details\n                  </a>\n                </td>\n              </tr>\n              <tr>\n                <td>4</td>\n                <td>Post Four</td>\n                <td>Business</td>\n                <td>May 15 2018</td>\n                <td>\n                  <a href=\"details.html\" class=\"btn btn-secondary\">\n                    <i class=\"fa fa-angle-double-right\"></i> Details\n                  </a>\n                </td>\n              </tr>\n              <tr>\n                <td>5</td>\n                <td>Post Five</td>\n                <td>Web Development</td>\n                <td>May 17 2018</td>\n                <td>\n                  <a href=\"details.html\" class=\"btn btn-secondary\">\n                    <i class=\"fa fa-angle-double-right\"></i> Details\n                  </a>\n                </td>\n              </tr>\n              <tr>\n                <td>6</td>\n                <td>Post Six</td>\n                <td>Health & Wellness</td>\n                <td>May 20 2018</td>\n                <td>\n                  <a href=\"details.html\" class=\"btn btn-secondary\">\n                    <i class=\"fa fa-angle-double-right\"></i> Details\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- MODALS -->\n\n<!-- ADD APP MODAL -->\n<div class=\"modal fade\" id=\"addAppModal\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary text-white\">\n        <h5 class=\"modal-title\">Add App</h5>\n        <button class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n      </div>\n      <form #f=\"ngForm\">\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label for=\"title\">App Name</label>\n            <input type=\"text\" class=\"form-control\" #appName=\"ngModel\" [(ngModel)]=\"appNameVar\" name=\"appName\" required />\n          </div>\n          <div class=\"alert alert-danger\" *ngIf=\"appName.errors?.required\">\n            App Name field can't be blank\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\" [disabled]=\"!f.form.valid\" (click)=\"addApp()\">\n            Add App\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- ADD CATEGORY MODAL -->\n<div class=\"modal fade\" id=\"addCategoryModal\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-success text-white\">\n        <h5 class=\"modal-title\">Add Category</h5>\n        <button class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n      </div>\n      <form #cateForm=\"ngForm\">\n\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label for=\"title\">Category Name</label>\n            <input type=\"text\" class=\"form-control\" #cateName=\"ngModel\" [(ngModel)]=\"cateNameVar\" name=\"cateName\"\n              required />\n          </div>\n          <div class=\"alert alert-danger\" *ngIf=\"cateName.errors?.required\">\n            Category Name field can't be blank\n          </div>\n        </div>\n\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-success\" data-dismiss=\"modal\" [disabled]=\"!cateForm.form.valid\" (click)=\"addCategory()\">\n            Add Category\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- ADD USER MODAL -->\n<div class=\"modal fade\" id=\"addUserModal\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-warning text-white\">\n        <h5 class=\"modal-title\">Add User</h5>\n        <button class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password2\">Confirm Password</label>\n            <input type=\"password\" class=\"form-control\" />\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-warning\" data-dismiss=\"modal\">\n          Save Changes\n        </button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/ui.service */ "./src/app/shared/services/ui.service.ts");
/* harmony import */ var _apps_apps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apps/apps.service */ "./src/app/main/apps/apps.service.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/main/dashboard/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(uiService, appsService, dashboardService) {
        this.uiService = uiService;
        this.appsService = appsService;
        this.dashboardService = dashboardService;
        this.appNameVar = "";
        this.cateNameVar = "";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log('Dashboard run');
    };
    // App Modal
    DashboardComponent.prototype.clickAppModal = function () {
        this.appNameVar = "";
    };
    DashboardComponent.prototype.addApp = function () {
        this.dashboardService.addNewApp(this.appNameVar);
        $(function () {
            $('#addAppModal').modal('toggle');
        });
    };
    // Category Modal
    DashboardComponent.prototype.clickCateModal = function () {
        this.cateNameVar = "";
    };
    DashboardComponent.prototype.addCategory = function () {
        this.dashboardService.addNewCategory(this.cateNameVar, function (resolve) {
            console.log('Callback: ', resolve);
        }, function (error) {
            console.log('Error: ', error);
        });
        $(function () {
            $('#addCategoryModal').modal('toggle');
        });
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () { });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/main/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/main/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_1__["UiService"],
            _apps_apps_service__WEBPACK_IMPORTED_MODULE_2__["AppsService"],
            _dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/main/dashboard/dashboard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.service.ts ***!
  \*****************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/ui.service */ "./src/app/shared/services/ui.service.ts");
/* harmony import */ var src_app_shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/firebase.service */ "./src/app/shared/services/firebase.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardService = /** @class */ (function () {
    function DashboardService(afStore, uiService, firebaseService) {
        this.afStore = afStore;
        this.uiService = uiService;
        this.firebaseService = firebaseService;
    }
    // Adding new app
    DashboardService.prototype.addNewApp = function (appName) {
        var app = {
            id: this.afStore.createId(),
            appName: appName,
            createdDate: new Date(),
            appUrl: this.uiService.changeToPlainText(appName),
            recipeQuantity: 0
        };
        this.firebaseService.addDocument(app, 'availableApps')
            .then(function (result) {
            console.log('Add new app success');
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    // Adding new category
    DashboardService.prototype.addNewCategory = function (categoryName, callback, errCallback) {
        var _this = this;
        var nextId;
        var category;
        this.afStore.collection('availableCategories', function (ref) { return ref.orderBy('id', 'desc').limit(1); }).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (result) {
            nextId = result[0].id + 1;
            category = {
                id: nextId,
                category: categoryName,
                createdDate: new Date()
            };
        }, function (error) { }, function () {
            _this.firebaseService.addDocument(category, 'availableCategories')
                .then(function (result) {
                callback(result);
            })
                .catch(function (error) {
                errCallback(error);
            });
        });
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"],
            src_app_shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <app-sidenav></app-sidenav>\n\n    <div id=\"content\">\n        <app-nav></app-nav>\n        <div id=\"main-content\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () { };
    MainComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            console.log('jquery ready');
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });
            // if (!$('#sidebar').hasClass('active')) {
            //   $('.navbar-expand-lg .navbar-nav').css('margin-right', '250px');
            // } else {
            //   $('.navbar-expand-lg .navbar-nav').css('margin-right', '0px');
            // }
            // $("#logout-btn").css("margin-top", ($(window).height()-$("#logout-btn").height())+"px");
            $('#sidebarCollapse').on('click', function () {
                console.log('Click button');
                $('#sidebar, #content, #nav-content').toggleClass('active');
                // $('#nav-content').toggleClass('active');
                // if (!$('#sidebar').hasClass('active')) {
                //   $('.navbar-expand-lg .navbar-nav').css('margin-right', '250px');
                // } else {
                //   $('.navbar-expand-lg .navbar-nav').css('margin-right', '0px');
                // }
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
        });
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-main",
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/main/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/auth-guard.service */ "./src/app/shared/auth-guard.service.ts");
/* harmony import */ var _apps_apps_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apps/apps.component */ "./src/app/main/apps/apps.component.ts");
/* harmony import */ var _apps_appsdetail_appsdetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./apps/appsdetail/appsdetail.component */ "./src/app/main/apps/appsdetail/appsdetail.component.ts");
/* harmony import */ var _apps_recipedetail_recipedetail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./apps/recipedetail/recipedetail.component */ "./src/app/main/apps/recipedetail/recipedetail.component.ts");
/* harmony import */ var _apps_recipeedit_recipeedit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./apps/recipeedit/recipeedit.component */ "./src/app/main/apps/recipeedit/recipeedit.component.ts");
/* harmony import */ var _apps_appstart_appstart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./apps/appstart/appstart.component */ "./src/app/main/apps/appstart/appstart.component.ts");
/* harmony import */ var _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../navigation/sidenav/sidenav.component */ "./src/app/navigation/sidenav/sidenav.component.ts");
/* harmony import */ var _navigation_nav_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../navigation/nav/nav.component */ "./src/app/navigation/nav/nav.component.ts");
/* harmony import */ var _apps_recipeaddnew_recipeaddnew_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./apps/recipeaddnew/recipeaddnew.component */ "./src/app/main/apps/recipeaddnew/recipeaddnew.component.ts");
/* harmony import */ var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/dashboard.service */ "./src/app/main/dashboard/dashboard.service.ts");
/* harmony import */ var _apps_recipeedit_recipeedit_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./apps/recipeedit/recipeedit.service */ "./src/app/main/apps/recipeedit/recipeedit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    {
        path: "",
        component: _main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        canActivateChild: [_shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            { path: "", redirectTo: "/dashboard", pathMatch: "full" },
            { path: "dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
            {
                path: 'apps', component: _apps_apps_component__WEBPACK_IMPORTED_MODULE_7__["AppsComponent"], children: [
                    { path: '', component: _apps_appstart_appstart_component__WEBPACK_IMPORTED_MODULE_11__["AppstartComponent"] },
                    { path: ':app', component: _apps_appsdetail_appsdetail_component__WEBPACK_IMPORTED_MODULE_8__["AppsdetailComponent"] },
                    { path: ':app/new', component: _apps_recipeaddnew_recipeaddnew_component__WEBPACK_IMPORTED_MODULE_14__["RecipeaddnewComponent"] },
                    { path: ':app/:id', component: _apps_recipedetail_recipedetail_component__WEBPACK_IMPORTED_MODULE_9__["RecipeDetailComponent"] },
                    { path: ':app/:id/edit', component: _apps_recipeedit_recipeedit_component__WEBPACK_IMPORTED_MODULE_10__["RecipeEditComponent"] },
                ]
            }
        ]
    }
];
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _apps_apps_component__WEBPACK_IMPORTED_MODULE_7__["AppsComponent"],
                _apps_appstart_appstart_component__WEBPACK_IMPORTED_MODULE_11__["AppstartComponent"],
                _apps_appsdetail_appsdetail_component__WEBPACK_IMPORTED_MODULE_8__["AppsdetailComponent"],
                _apps_recipedetail_recipedetail_component__WEBPACK_IMPORTED_MODULE_9__["RecipeDetailComponent"],
                _apps_recipeedit_recipeedit_component__WEBPACK_IMPORTED_MODULE_10__["RecipeEditComponent"],
                _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__["SidenavComponent"],
                _navigation_nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"],
                _apps_recipeaddnew_recipeaddnew_component__WEBPACK_IMPORTED_MODULE_14__["RecipeaddnewComponent"]
            ],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploadModule"]],
            providers: [_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_15__["DashboardService"], _apps_recipeedit_recipeedit_service__WEBPACK_IMPORTED_MODULE_16__["RecipeEditService"]],
            exports: []
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/navigation/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/navigation/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4 {\n    width: 60px;\n    height: 45px;\n    position: relative;\n    margin: 50px auto;\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    transition: .5s ease-in-out;\n    cursor: pointer;\n  }\n  \n  #nav-icon1 span, #nav-icon3 span, #nav-icon4 span {\n    display: block;\n    position: absolute;\n    height: 9px;\n    width: 100%;\n    background: #d3531a;\n    border-radius: 9px;\n    opacity: 1;\n    left: 0;\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    transition: .25s ease-in-out;\n  }\n  \n  #nav-icon1 span:nth-child(1) {\n    top: 0px;\n  }\n  \n  #nav-icon1 span:nth-child(2) {\n    top: 18px;\n  }\n  \n  #nav-icon1 span:nth-child(3) {\n    top: 36px;\n  }\n  \n  #nav-icon1.open span:nth-child(1) {\n    top: 18px;\n    -webkit-transform: rotate(135deg);\n    transform: rotate(135deg);\n  }\n  \n  #nav-icon1.open span:nth-child(2) {\n    opacity: 0;\n    left: -60px;\n  }\n  \n  #nav-icon1.open span:nth-child(3) {\n    top: 18px;\n    -webkit-transform: rotate(-135deg);\n    transform: rotate(-135deg);\n  }\n  \n  /* TOP BADGE */\n  \n  .navbar-icon-top .navbar-nav .nav-link > .fa {\n    position: relative;\n    width: 36px;\n    font-size: 24px;\n  }\n  \n  .navbar-icon-top .navbar-nav .nav-link > .fa > .badge {\n    font-size: 0.6rem !important;\n    position: absolute !important;\n    right: 0 !important;\n    font-family: sans-serif;\n    top: -4px !important;\n  }\n  \n  /* AVATAR */\n  \n  #avatar {\n    /* make a square container */\n    width: 40px;\n    height: 40px;\n\n    /* fill the container, preserving aspect ratio, and cropping to fit */\n    background-size: cover;\n\n    /* center the image vertically and horizontally */\n    background-position: top center;\n\n    /* round the edges to a circle with border radius 1/2 container size */\n    border-radius: 50%;\n  }\n  \n  li.nav-item.avatar {\n    display: flex;\n    align-items: center;\n  }\n  \n  li.nav-item > div.avatar-name {\n    margin-left: 10px;\n  }\n  \n  li.nav-item > div.avatar-name > .name {\n    color: white;\n    font-weight: 500;\n  }\n  \n  li.nav-item > div.avatar-name > .email {\n    color: #b1b1b1;\n    font-weight: 100;\n    font-style: italic;\n  }\n  \n  .dropdown-menu.dropdown-menu-right.show {\n    background-color: #4859a1 !important;\n    margin: -1px -1px 0px 0px !important;\n    border-radius: 0px 0px 5px 5px !important;\n    box-shadow: 5px 10px 18px #4859a145 !important;\n    color: #fff !important;\n    padding: 0 !important;\n  }\n  \n  .dropdown-menu.dropdown-menu-right.show a {\n    color: #fff;\n    line-height: 2;\n    border-bottom: 1px solid #fff;\n  }\n  \n  .dropdown-menu.dropdown-menu-right.show a:hover {\n    color: #4859a1;\n    line-height: 2;\n  }\n\n\n  \n\n\n\n"

/***/ }),

/***/ "./src/app/navigation/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/navigation/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark\" id=\"nav-content\">\n  <div class=\"container-fluid\">\n\n    <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info\">\n      <i class=\"fa fa-bars\"></i>\n    </button>\n\n    <button class=\"btn btn-dark d-inline-block d-lg-none ml-auto\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <i class=\"fas fa-align-justify\"></i>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n      <ul class=\"nav navbar-nav ml-auto\">\n        <!-- Message Badge -->\n        <!-- <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">\n            <i class=\"fa fa-envelope-o\">\n              <span class=\"badge badge-danger\">11</span>\n            </i>\n            Messages\n          </a>\n        </li> -->\n\n        <li class=\"nav-item avatar\">\n          <div class=\"avatar-section\">\n            <img src=\"/assets/img/avatar.png\" class=\"rounded-circle\" id=\"avatar\">\n          </div>\n          <div class=\"avatar-name\">\n            <div class=\"name\">{{ userEmail }}</div>\n            <div class=\"email\">{{ userName }}</div>\n          </div>\n          <div class=\"avatar-icon\">\n            <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n              aria-expanded=\"false\">\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right avatar-dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n              <a class=\"dropdown-item\" href=\"#\">Account Settings</a>\n              <a class=\"dropdown-item\" href=\"#\">Logout</a>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navigation/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/navigation/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavComponent = /** @class */ (function () {
    function NavComponent(authService, store, localService) {
        this.authService = authService;
        this.store = store;
        this.localService = localService;
        this.userName = '';
        this.userEmail = '';
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user$ = this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_3__["getCurrentUser"]);
        this.user$.subscribe(function (result) {
            if (result) {
                _this.userEmail = result.email;
                _this.userName = result.fullName;
            }
        });
        if (this.authService.isAuth) {
            this.userEmail = this.localService.get("af_current_user")['email'];
            this.userName = this.localService.get("af_current_user")['fullName'];
        }
    };
    NavComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            $('#sidebarCollapse').click(function () {
                $("i.fa", this).toggleClass("fa-bars fa-times");
            });
        });
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/navigation/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/navigation/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/navigation/sidenav/sidenav.component.css":
/*!**********************************************************!*\
  !*** ./src/app/navigation/sidenav/sidenav.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/sidenav/sidenav.component.html":
/*!***********************************************************!*\
  !*** ./src/app/navigation/sidenav/sidenav.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"sidebar\">\n  <div class=\"sidebar-header\">\n    <h3 [routerLink]=\"['/dashboard']\" style=\"cursor: pointer; outline: none\">Recipe Cookbook</h3>\n  </div>\n\n  <ul class=\"list-unstyled components\">\n    <p [routerLink]=\"['/dashboard']\" style=\"cursor: pointer; outline: none\">Dashboard</p>\n    <li>\n      <a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" [ngClass]=\"{'dropdown-toggle':!(isLoadingApp$ | async)}\">\n        Apps\n        <img src=\"/assets/img/spinner-cate.svg\" style=\"position: absolute; top: calc(50% - 20px);right: 5px;width: 40px;\"\n          *ngIf=\"(isLoadingApp$ | async)\">\n      </a>\n      <ul class=\"collapse list-unstyled\" id=\"homeSubmenu\" *ngIf=\"!(isLoadingApp$ | async)\">\n        <li *ngFor=\"let app of (appList$ | async)\" routerLinkActive=\"active\">\n          <a [routerLink]=\"['/apps', app.appUrl]\" [queryParams]=\"{appId: app.id}\">{{ app.appName }}<span style=\"float: right;\">{{app.recipeQuantity}}</span></a>\n        </li>\n      </ul>\n    </li>\n    <li>\n      <a href=\"#\">About</a>\n    </li>\n    <li>\n      <a href=\"#\">Portfolio</a>\n    </li>\n    <li>\n      <a href=\"#\">Contact</a>\n    </li>\n  </ul>\n\n  <ul class=\"list-unstyled\" id=\"logout-btn\">\n    <li>\n      <a class=\"btn btn-outline-success logout\" (click)=\"logout()\"><i class=\"fa fa-user-times\"></i> Logout</a>\n    </li>\n  </ul>\n</nav>\n\n<!-- (click)=\"onClick(app.appName)\" -->"

/***/ }),

/***/ "./src/app/navigation/sidenav/sidenav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/navigation/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/ui.service */ "./src/app/shared/services/ui.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.reducer */ "./src/app/app.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(authService, router, uiService, store) {
        this.authService = authService;
        this.router = router;
        this.uiService = uiService;
        this.store = store;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        this.uiService.getAppList();
        this.isLoadingApp$ = this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getIsLoadingApp"]);
        this.appList$ = this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getAppList"]);
    };
    SidenavComponent.prototype.logout = function () {
        this.router.navigate(["/login"]);
        this.authService.signOutUser();
    };
    SidenavComponent.prototype.ngOnDestroy = function () {
    };
    SidenavComponent.prototype.ngAfterViewInit = function () { };
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/navigation/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/navigation/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared-components/spinner/spinner.component.css":
/*!************************************************************************!*\
  !*** ./src/app/shared/shared-components/spinner/spinner.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n    margin: 5px auto;\n    width: 50px;\n    height: 40px;\n    text-align: center;\n    font-size: 10px;\n  }\n  \n  .spinner > div {\n    background-color: #333;\n    height: 100%;\n    width: 6px;\n    display: inline-block;\n    \n    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n    animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  }\n  \n  .spinner .rect2 {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s;\n  }\n  \n  .spinner .rect3 {\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s;\n  }\n  \n  .spinner .rect4 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s;\n  }\n  \n  .spinner .rect5 {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s;\n  }\n  \n  @-webkit-keyframes sk-stretchdelay {\n    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  \n    20% { -webkit-transform: scaleY(1.0) }\n  }\n  \n  @keyframes sk-stretchdelay {\n    0%, 40%, 100% { \n      transform: scaleY(0.4);\n      -webkit-transform: scaleY(0.4);\n    }  20% { \n      transform: scaleY(1.0);\n      -webkit-transform: scaleY(1.0);\n    }\n  }"

/***/ }),

/***/ "./src/app/shared/shared-components/spinner/spinner.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shared/shared-components/spinner/spinner.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"rect1\"></div>\n  <div class=\"rect2\"></div>\n  <div class=\"rect3\"></div>\n  <div class=\"rect4\"></div>\n  <div class=\"rect5\"></div>\n</div>"

/***/ }),

/***/ "./src/app/shared/shared-components/spinner/spinner.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/shared-components/spinner/spinner.component.ts ***!
  \***********************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/shared/shared-components/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/shared/shared-components/spinner/spinner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-components/spinner/spinner.component */ "./src/app/shared/shared-components/spinner/spinner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map